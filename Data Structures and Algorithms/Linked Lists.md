Preet Patel
Topic: Linked Lists
07-31-2024, 5:48 PM
Self-Study 2:
#algorithm 
[[Computer Science]]
[[Data Structures and Algorithms]]

## Linked Lists
- Linked lists consists of nodes
- nodes store values such as ints, doubles, strings, etc.
- nodes connect to other nodes; this is called "*linking*"
- the nodes do not have to be continuous in memory because they are connected by the links
- the **head** node is the first node and the last node is usually **null**
- a linked list is used to implement a stack or queue

#### Insertion and Deletion
- the advantage of linked lists is that you insert elements in constant O(1) time.
- Insertions are done by connecting the previous node to and the next node to the element to be inserted.
	- compared to an array or vector structure were all the elements would have be shifted when inserting an element.
- Deletions can be by connecting one node to another node while "skipping" over another node. The node skipped over is not linked to any node and then it not a part of the linked list

## Implementation
``` c++
class Node {
public:
	int value;
	Node* next;
};

void printList(Node* n) {
	while(n != NULL) {
		cout << n->value << endl;
		n = n->next;
	}
	cout << "All elements printed" << endl;
}

int main() {
	//create nodes
	Node* head = new Node(); //allocate space for head node
	Node* second = new Node();
	Node* third = new Node();

	//assign values to each node
	head->value = 1;
	second->value = 2;
	third->value = 3;

	//link nodes using the "next" pointer
	head->next = second;
	second->next = third;
	third->next = NULL;

	printList(head); //only pass head node to enter list b/c its linked to others

	return 0;
}
```
