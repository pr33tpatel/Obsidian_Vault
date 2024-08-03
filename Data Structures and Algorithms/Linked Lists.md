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
- the advantage of linked lists is that you insert and remove elements in constant O(1) time.
- Insertions are done by connecting the previous node to and the next node to the element to be inserted.
	- compared to an array or vector structure were all the elements would have be shifted when inserting an element.
- Deletions can be by connecting one node to another node while "skipping" over another node. The node skipped over is not linked to any node and then it not a part of the linked list

## Implementation
``` c++
class Node {
	public:
		int value; // the value each node will store, in this case, an integer
		Node* next;// a pointer which directs us to the next node in list
};
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

	//functions
	printList(head);//only pass head node to enter list b/c its linked to others
	insertAtFront(&head, -1); //pass memory of head node and value of new node
	insertAtEnd(&head, 4); //pass memory of head node and value of new node
	insertAfter(head, -1); //pass pointer to insert after and value of new node
	insertAfter(second, -2);  //pass pointer to insert after and value of new node
	printList(head); 

	return 0;
}
```

#### Printing a Linked List
``` c++
void printList(Node* n) {
	while(n != NULL) {
		cout << n->value << endl;
		n = n->next;
	}
	cout << "All elements printed" << endl;
}
```
#### Inserting at Front of Linked List
``` c++
void insertAtFront(Node** head, int newValue) {
// 1.) Prepare a new node
	Node* newNode = new Node();
	newNode->value = newValue; 
	
// 2.) Put it in front of current head
	newNode->next = *head;
	
// 3.) Reassign head to point to newNode
	*head = newNode;
}
```
#### Inserting at End of Linked List
``` c++
void insertAtEnd(Node** head, int newValue) {
// 1.) Prepare a new node
	Node* newNode = new Node();
	newNode->value = newValue;
	newNode->next = NULL; //will point to "NULL" because it is going to be last node

// 2.) If Linked list is empty, newNode will be head node
	if (*head == NULL) {
		*head = newNode;
		return;
	}
	
// 3.) Traverse to last node. If a node points to "NULL", we are at current last node
	Node* last = *head; //initally start at head node and traverse through list
	while (last->next != NULL) {
		last = last->next; //change value of last to the next node
	}
	
// 4.) Insert newNode after current last node. By now, we are at end of linked list
	last->next = newNode; //next value of current last node is our newNode
}
```
#### Inserting in Middle of Linked List
``` c++
void insertAfter(Node* previous, int newValue) {
// 1.) Check if previous node is NULL. Previous cannot be a NULL node
	if (previous == NULL) {
		cout << "Previous cannot be NULL";
		return;
	}
	
// 2.) Prepare a newNode
	Node* newNode = new Node();
	newNode->value = newValue;

// 3.) Insert newNode after previous element
	newNode->next = previous->next; 
	previous->next = newNode;
	
	/*make sure you first set the newNode->next to what previous was pointing to   
	 and then you make previous->next point to newNode. If you change 
	previous->next to newNode first, then you will sever the connection to the
	node after newNode. 
	basically,
	do: A --> B, newNode --> B, A --> newNode
		result: A --> newNode --> B
	
	don't do: A --> B, A --> newNode, **now you cannot newNode to B because only A was 
	connected to be and that connection is lost**
	*/ 
}
```
