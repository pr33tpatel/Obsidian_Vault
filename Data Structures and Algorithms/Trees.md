Preet Patel
Topic: Trees
08-08-2024, 10:06 PM
Self-Study: 5
#algorithm 
[[Computer Science]]

## Trees
- the first node is the `root` node
	- the `root` node does not have a parent
- a `leaf` node is one that has a parent

#### Binary Search Tree (BST)
- each parent node can only have at max 2 child nodes
- the left child node is a lower value than the right child node
	- `left child` < `right child`
``` mermaid
graph TD;
id1((30)) --> id2((20)) --> id4((15));
id1((30)) --> id3((50)) --> id5((40));
id3 --> id6((55));
```
- helps in searching for elements

#### Implementation
``` c++
#include <iostream>
using namespace std;

struct TreeNode {
    int data;
    TreeNode* left;
    TreeNode* right;
};

TreeNode* createNode(int data) {
    //initializes a new tree node
    TreeNode* newNode = new TreeNode();
    newNode->data = data;
    newNode->left = nullptr;
    newNode->right = nullptr;

    return newNode;
}

int main() {
    TreeNode* root = createNode(1);

    root->left = createNode(2);
    root->right = createNode(3);

    root->left->left = createNode(4); 
    return 0;
}
```
