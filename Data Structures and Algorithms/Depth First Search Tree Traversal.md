Preet Patel
Topic: Depth First Search Tree Traversal
08-08-2024, 8:00 PM
Self-Study: 5
#algorithm 
[[Computer Science]]

## Depth First Search
- Time Complexity: $O(V+E)$ where $V$ are vertices and $E$ are edges
- Keeps going down one branch until it cannot go down further
- Once all options have been exhausted (no more viable nodes, cannot re-visit nodes): backtrack until a new branch has been found
## Breath First Search (BFS)
- goes level by level, and only moving onto the next level after all nodes in the current level have been visited

## DFS:  Traversal Methods
#### Preorder
- `preorder (data, left, right)`
``` c++
void printTreePreorder(TreeNode* node) {
    //preorder algorithm steps: data, left, right
    //DFS variation

    //base case
    if (node == nullptr) return;

    //recursive cases   
    cout << node->data << ", ";
    printTreePreorder(node->left); //DFS:invoke printTree but pass in the left child of node, continue until nullptr
    printTreePreorder(node->right);
    cout << endl
    ;
}
```
#### Inorder
- `inorder(left, data, right)`
``` c++
void printTreeInorder(TreeNode* node) {
    //inorder algorithm steps: left, data, right
    //DFS variation
    if (node == nullptr) {
        return;
    }
```
#### Postorder
 `postorder(left, right, data)`
``` c++
void printTreePostorder(TreeNode* node) {
    //Postorder algorithm steps: left, right, data
    //DFS variation
    if (node == nullptr) return;

    printTreePostorder(node->left);
    printTreePostorder(node->right);
    cout << node->data << ", ";
    cout << endl;
}
```

#### CreateNode
``` c++
TreeNode* createNode(int data) {
    //initializes a new tree node
    TreeNode* newNode = new TreeNode();
    newNode->data = data;
    newNode->left = nullptr;
    newNode->right = nullptr;

    return newNode;
}
```



``` c++
#include <iostream>
using namespace std;

struct TreeNode {
    int data;
    TreeNode* left;
    TreeNode* right;
};

int main() {
    // level 1
    TreeNode* root = createNode(1);
    // level 2
    root->left = createNode(2);
    root->right = createNode(3);
    // level 3
    root->left->left = createNode(4);
    root->left->right = createNode(5);
    root->right->left = createNode(6);
    root->right->right = createNode(7);
    // level 4
    root->left->right->left = createNode(9);
    root->right->right->left = createNode(15);
    
    cout << "Preorder DFS Variant:" << endl;
    printTreePreorder(root);

    cout << "Inorder DFS Variant:" << endl;
    printTreeInorder(root);

    cout << "Postorder DFS Variant: " << endl;
    printTreePostorder(root);
    return 0;       
}       

/* 
                        (1)
                       /   \
                    (2)    (3)
                   / \     / \ 
                 (4) (5)  (6) (7)
                     /        /
                    (9)     (15)
*/
```