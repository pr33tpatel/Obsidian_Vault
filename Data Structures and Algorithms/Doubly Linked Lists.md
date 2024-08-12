Preet Patel
Topic: Doubly Linked Lists
08-12-2024, 4:19 PM
Self-Study: 7
#algorithm 
[[Computer Science]]

## Doubly Linked Lists
- two pointers, a pointer to the next node, and a pointer to the previous node
- list can be traversed in two directions, forwards and backwards
- a node can be inserted before and after a given node
- the main disadvantage is that doubly linked lists take up more space due to the existence of two pointers
``` mermaid
graph LR;

idbegin[NULL] <-->|prev| id1[n1] -->|next| id2[n2]
id2 -->|prev| id1
id2 -->|next| id3[n3]
id3 -->|prev| id2
id3 -->|next| id4[n4]
id4 -->|prev| id3
id4 -->|next| idend[NULL]

```

#### Implementation
``` c++
#include <iostream>
using namespace std;

class Node{
    public:
        int value;
        Node* next;
        Node* prev;
};
int main() {
    Node* head;
    Node* tail;
    
    //Add 1st node
    Node* node = new Node(); // allocate space for a new node
    node->value = 4;
    node->next = nullptr;
    node->prev = nullptr;
    head = node;
    tail = node;

    //Add new nodes
    addNodeToEnd(5, head, tail);
    addNodeToEnd(6, head, tail);
    addNodeToEnd(8, head, tail);
    addNodeToEnd(9, head, tail);
    printForward(head);
    printBackward(tail);

    Node* before7 = getNodeAtPosition(2, head);
    Node* after7 = getNodeAtPosition(3, head);
    addNodeInMiddle(7, before7, after7, head, tail);
    cout << "List after inserting node of value 7 at position 3: ";
    printForward(head);

    addNodeInFront(3, head, tail);
    cout << "List after inserting node of value 3 in front of list: ";
    printForward(head);

    Node* node_to_delete = getNodeAtPosition(3, head);
    deleteNode(node_to_delete, head, tail);
    cout << "Value of node to be deleted: " << node_to_delete->value << endl;
    cout << "List after deleting node at position 3 in list (0-indexed): ";
    printForward(head);
    return 0;
}
```

#### addNodeToEnd
``` c++
void addNodeToEnd(int value, Node*& head, Node*& tail) {
    //1.) create new node
    Node* newNode = new Node();
    //2.) set value of node
    newNode->value = value;
    //3.) set the next and previous pointers of the new node
    newNode->next = nullptr;
    newNode->prev = tail;
    //4.) reassign tail or head pointers to new node
    if (tail != nullptr) { // checks to see if the list is empty, aka, the tail is pointing to a valid node and not pointing to NULL
        tail->next = newNode; // sets the next pointer of the current last node to the newNode, which links newNode to the list
    }
    else { // this will happen if the list is empty
        head = newNode; // sets the head pointer to the newNode
    }

    tail = newNode; // updates tail pointer to point to new node;
}
```

#### addNodeInMiddle
``` c++
void addNodeInMiddle(int value, Node* prev, Node* next, Node*& head, Node*& tail) {
    //1.) create a new node
    Node* newNode = new Node();
    //2.) set value of node
    newNode->value = value;
    //3.) set next and previous pointers of the new node
    newNode->next = next;
    newNode->prev = prev;
    //4.) set next and previous pointers of old next and previous nodes
    if (prev != nullptr) { //checks to see if prev is a valid node
        prev->next = newNode;
    } else {
        head = newNode; // newNode becomes head because prev is a nullptr, the list probably doesn't exist
    }

    if (next != nullptr) { // checks to see if next is a valid node
        next->prev = newNode;
    } else {
        tail = newNode; // sets tail to newNode because next node does not exist, so newNode is the new tail of list
    }
}
```

#### addNodeInFront
``` c++
void addNodeInFront(int value, Node*& head, Node*& tail) {
    //1.) create the new node
    Node* newNode = new Node();
    //2.) set value of new node
    newNode->value = value;
    //3.) assign next and previous pointers of new node
    newNode->prev = nullptr; // head of list points to nullptr
    newNode->next = head;
    //4.) reassign head and tail pointers
    if (head != nullptr) { //checks if the list is not empty
        head->prev = newNode; //current head's prev pointer will point to the newNode
        head = newNode; //reassign head pointer to the newNode
    }   
    else { //this will happen if the list is empty
        head = newNode;
        tail = newNode;
    }
}
```

#### deleteNode
``` c++
void deleteNode(Node* node, Node*& head, Node*& tail) {
    //1.) reassign previous and next nodes by linking them to each other and severing the link of node to be deleted
    if (node->prev != nullptr) { // checks to see if the node is not the head
        node->prev->next = node->next; //sets the previous node's next pointer to input node's next pointer
    } else { // node is the head
        head = node->next; //reassign head pointer to the input node's next node
    }

    if (node->next != nullptr) { //checks to see if the node is not the tail
        node->next->prev = node->prev;
    } else { // node is the tail
        tail = node->prev;
    }

    //2.) delete the node and free memory
    delete node;
}
```

#### getNodeAtPosition
``` c++
Node* getNodeAtPosition(int position, Node*& head) {
    Node* temp = head;
    int count = 0;
    while (temp!= nullptr && count < position) { //makes sure you are not at end of list and loop continues while count < position
        temp = temp->next;
        count++;
    }
    return temp; //return a temp node when it is at the given position
}
```

#### printForward
``` c++
void printForward(Node* head) {
    Node* traverser = head;
    cout << "Printing list in forwards direction: ";
    while (traverser != nullptr) {
        cout << traverser->value << ", ";
        traverser = traverser->next;
    }
    cout << endl;
}
```

#### printBackward
``` c++
void printBackward(Node* tail) {
    Node* traverser = tail;
    cout << "Printing list in backwards direction: ";
    while (traverser != nullptr) {
        cout << traverser->value << ", ";
        traverser = traverser->prev;
    }
    cout << endl;
}
```


