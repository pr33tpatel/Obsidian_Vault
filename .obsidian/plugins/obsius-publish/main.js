/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => ObsiusPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian2 = require("obsidian");

// src/http.ts
async function http_default(method, url, data = null) {
  const headers = new Headers({
    Accept: "application/json"
  });
  if (data) {
    headers.set("Content-Type", "application/json");
  }
  const resp = await fetch(url, {
    method,
    headers,
    ...data ? { body: JSON.stringify(data) } : {}
  });
  if (!resp.ok) {
    throw new Error(
      `Request failed: ${resp.status} - ${await resp.text()}`
    );
  }
  return resp.headers.get("Content-Type") == "application/json" ? await resp.json() : null;
}

// src/obsius.ts
var baseUrl = "https://obsius.site";
var obsiusWrapper = {
  async createPost(title, content) {
    return http_default("POST", `${baseUrl}/`, { title, content });
  },
  async updatePost(id, secret, title, content) {
    return http_default("PUT", `${baseUrl}/${id}`, {
      secret,
      title,
      content
    });
  },
  async deletePost(id, secret) {
    return http_default("DELETE", `${baseUrl}/${id}`, { secret });
  }
};
async function createClient(loadData, saveData) {
  const data = await loadData();
  return {
    data() {
      return data;
    },
    async publishPost(file) {
      if (data.posts[file.path]) {
        await this.updatePost(file);
        return null;
      } else {
        return await this.createPost(file);
      }
    },
    async createPost(file) {
      const title = file.basename;
      const content = await file.vault.read(file);
      try {
        const resp = await obsiusWrapper.createPost(title, content);
        data.posts[file.path] = {
          id: resp.id,
          secret: resp.secret
        };
        await saveData(data);
        return `${baseUrl}/${resp.id}`;
      } catch (e) {
        console.error(e);
        throw new Error("Failed to create post");
      }
    },
    getUrl(file) {
      const post = data.posts[file.path];
      if (!post) {
        return null;
      }
      return `${baseUrl}/${post.id}`;
    },
    async updatePost(file) {
      const post = data.posts[file.path];
      const title = file.basename;
      const content = await file.vault.read(file);
      try {
        await obsiusWrapper.updatePost(
          post.id,
          post.secret,
          title,
          content
        );
      } catch (e) {
        console.error(e);
        throw new Error("Failed to update post");
      }
    },
    async deletePost(file) {
      const post = data.posts[file.path];
      try {
        await obsiusWrapper.deletePost(post.id, post.secret);
        delete data.posts[file.path];
        await saveData(data);
      } catch (e) {
        console.error(e);
        throw new Error("Failed to delete post");
      }
    },
    async handleNoteRename(file, oldPath) {
      if (data.posts[oldPath]) {
        data.posts[file.path] = data.posts[oldPath];
        delete data.posts[oldPath];
        await saveData(data);
      }
    },
    async handleNoteDelete(file) {
      if (data.posts[file.path]) {
        delete data.posts[file.path];
        await saveData(data);
      }
    }
  };
}

// src/text.ts
function flatten(obj) {
  const result = {};
  for (const key of Object.keys(obj)) {
    const value = obj[key];
    if (typeof value === "string") {
      result[key] = value;
    } else {
      const inner = flatten(value);
      for (const innerKey of Object.keys(inner)) {
        result[`${key}.${innerKey}`] = inner[innerKey];
      }
    }
  }
  return result;
}
var strings = flatten({
  serviceName: "Obsius",
  actions: {
    create: {
      name: "Publish to Obsius",
      success: "Note published to Obsius. URL copied to clipboard.",
      failure: "Failed to publish note to Obsius"
    },
    update: {
      name: "Update in Obsius",
      success: "Updated note in Obsius. It may take a little while before update becomes visible.",
      failure: "Failed to update note in Obsius"
    },
    copyUrl: {
      name: "Copy Obsius URL",
      success: "Obsius URL copied to clipboard",
      failure: "Note not yet published"
    },
    remove: {
      name: "Remove from Obsius",
      success: "Note removed from Obsius",
      failure: "Failed to remove note form Obsius"
    },
    listPosts: {
      name: "View published posts",
      title: "Published posts",
      showFile: "View file",
      showPost: "View post"
    }
  },
  modals: {
    showUrl: {
      title: "Note published at:",
      copy: "Copy URL"
    }
  }
});
function getText(path, ...args) {
  const value = strings[path];
  if (value !== void 0) {
    if (args.length) {
      return `${value}: ${args.join(", ")}`;
    }
    return value;
  }
  return path;
}

// src/modals.ts
var import_obsidian = require("obsidian");
var PublishedPostsModal = class extends import_obsidian.Modal {
  constructor(app, obsiusClient) {
    super(app);
    this.obsiusClient = obsiusClient;
  }
  onOpen() {
    this.contentEl.createEl("h1", {
      text: getText("actions.listPosts.title")
    });
    for (const [path] of Object.entries(this.obsiusClient.data().posts)) {
      const file = this.app.vault.getAbstractFileByPath(path);
      if (!(file instanceof import_obsidian.TFile)) {
        continue;
      }
      const container = this.contentEl.createEl("div", {
        cls: ["published-posts-modal", "list-item-container"]
      });
      container.createEl("span", { text: path });
      const buttonContainer = container.createEl("div");
      const showFile = buttonContainer.createEl("button", {
        title: getText("actions.listPosts.showFile")
      });
      showFile.addEventListener(
        "click",
        () => this.app.workspace.openLinkText(path, path).then(() => this.close())
      );
      (0, import_obsidian.setIcon)(showFile, "file-text");
      const fileUrl = this.obsiusClient.getUrl(file);
      if (fileUrl) {
        const webLink = buttonContainer.createEl("a", {
          cls: "hidden",
          href: fileUrl
        });
        const showPost = buttonContainer.createEl("button");
        showPost.addEventListener("click", () => {
          webLink.click();
          this.close();
        });
        (0, import_obsidian.setIcon)(showPost, "globe");
      }
    }
  }
  onClose() {
    this.contentEl.empty();
  }
};

// main.ts
var ObsiusPlugin = class extends import_obsidian2.Plugin {
  async onload() {
    this.obsiusClient = await createClient(
      async () => ({
        posts: {},
        ...await this.loadData()
      }),
      async (data) => await this.saveData(data)
    );
    this.addObsiusCommands();
    this.registerFileMenuEvent();
    this.registerVaultEvents();
  }
  onunload() {
  }
  addObsiusCommands() {
    this.addCommand({
      id: "obsius.action.listPosts",
      name: getText("actions.listPosts.name"),
      callback: () => this.showPublishedPosts()
    });
    this.addCommand({
      id: "obsius.action.create",
      name: getText("actions.create.name"),
      editorCheckCallback: (checking, _, view) => {
        if (!(view.file instanceof import_obsidian2.TFile)) {
          return false;
        }
        if (checking) {
          return !this.obsiusClient.getUrl(view.file);
        }
        this.publishFile(view.file);
      }
    });
    this.addCommand({
      id: "obsius.action.update",
      name: getText("actions.update.name"),
      editorCheckCallback: (checking, _, view) => {
        if (!(view.file instanceof import_obsidian2.TFile)) {
          return false;
        }
        if (checking) {
          return !!this.obsiusClient.getUrl(view.file);
        }
        this.updateFile(view.file);
      }
    });
    this.addCommand({
      id: "obsius.action.copyUrl",
      name: getText("actions.copyUrl.name"),
      editorCheckCallback: (checking, _, view) => {
        if (!(view.file instanceof import_obsidian2.TFile)) {
          return false;
        }
        if (checking) {
          return !!this.obsiusClient.getUrl(view.file);
        }
        this.copyUrl(view.file);
      }
    });
    this.addCommand({
      id: "obsius.action.remove",
      name: getText("actions.remove.name"),
      editorCheckCallback: (checking, _, view) => {
        if (!(view.file instanceof import_obsidian2.TFile)) {
          return false;
        }
        if (checking) {
          return !!this.obsiusClient.getUrl(view.file);
        }
        this.deleteFile(view.file);
      }
    });
  }
  registerFileMenuEvent() {
    this.registerEvent(
      this.app.workspace.on("file-menu", (menu, file) => {
        if (file instanceof import_obsidian2.TFile) {
          menu.addSeparator();
          if (!this.obsiusClient.getUrl(file)) {
            menu.addItem(
              (item) => item.setTitle(getText("actions.create.name")).setIcon("up-chevron-glyph").onClick(() => this.publishFile(file))
            );
          } else {
            menu.addItem(
              (item) => item.setTitle(getText("actions.update.name")).setIcon("double-up-arrow-glyph").onClick(() => this.updateFile(file))
            ).addItem(
              (item) => item.setTitle(getText("actions.copyUrl.name")).setIcon("link").onClick(() => this.copyUrl(file))
            ).addItem(
              (item) => item.setTitle(getText("actions.remove.name")).setIcon("cross").onClick(() => this.deleteFile(file))
            );
          }
          menu.addSeparator();
        }
      })
    );
  }
  registerVaultEvents() {
    this.registerEvent(
      this.app.vault.on("rename", (file, oldPath) => {
        if (file instanceof import_obsidian2.TFile) {
          this.obsiusClient.handleNoteRename(file, oldPath);
        }
      })
    );
    this.registerEvent(
      this.app.vault.on("delete", (file) => {
        if (file instanceof import_obsidian2.TFile) {
          this.obsiusClient.handleNoteDelete(file);
        }
      })
    );
  }
  showPublishedPosts() {
    new PublishedPostsModal(this.app, this.obsiusClient).open();
  }
  async publishFile(file) {
    try {
      const url = await this.obsiusClient.createPost(file);
      await navigator.clipboard.writeText(url);
      new import_obsidian2.Notice(getText("actions.create.success"));
    } catch (e) {
      console.error(e);
      new import_obsidian2.Notice(getText("actions.create.failure"));
    }
  }
  async updateFile(file) {
    try {
      await this.obsiusClient.updatePost(file);
      new import_obsidian2.Notice(getText("actions.update.success"));
    } catch (e) {
      console.error(e);
      new import_obsidian2.Notice(getText("actions.update.failure"));
    }
  }
  async copyUrl(file) {
    const url = this.obsiusClient.getUrl(file);
    if (url) {
      await navigator.clipboard.writeText(url);
      new import_obsidian2.Notice(getText("actions.copyUrl.success"));
    } else {
      new import_obsidian2.Notice(getText("actions.copyUrl.failure"));
    }
  }
  async deleteFile(file) {
    try {
      await this.obsiusClient.deletePost(file);
      new import_obsidian2.Notice(getText("actions.remove.success"));
    } catch (e) {
      console.error(e);
      new import_obsidian2.Notice(getText("actions.remove.failure"));
    }
  }
};