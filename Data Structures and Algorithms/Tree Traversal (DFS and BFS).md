Preet Patel
Topic: Tree Traversal (DFS and BFS)
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
#### Inorder
- `inorder(left, data, right)`
#### Postorder
 `postorder(left, right, data)`

