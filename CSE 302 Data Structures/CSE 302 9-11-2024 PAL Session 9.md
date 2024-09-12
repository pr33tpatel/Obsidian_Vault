Preet Patel
Course: CSE 302 PAL
09-11-2024, 3:09 PM
Lecture: 9
#algorithm 
[[Computer Science]]

## Abstract Data Types (ADT)
- What is an ADT?
- Abstract Data Type: grouping (type, class, etc.) for objects that have a set behavior
- Taxonomy Example:
	- Reptiles are a grouping of objects: scaly skin, egg, cold blood
	- Mammals are a grouping of objects: hair, live babies, milk
#### Why use ADTs
- ADTs are useful for encapsulation
	- Taxonomy Example: instead of individually interacting with scaly skin, egg, cold blood attributes, you can interact with Reptiles which holds the other objects

#### Types of ADTs
3 Main Types:
- List (Linked List):
	- Unsorted
	- Sorted
	- Functions: `get()`, `insert()`, `remove()`
- Stack (Last In, First Out):
![[cse302 stack|100]]
	- Functions: 
		- `push()`: add new to top
		- `pop()` : remove and return top
		- `top()` or `peek()`: return top but keep in stack
- Queue (First In, First Out):
![[cse302 queue|200]]
	- Functions:
		- `enqueue()`: end of queue
		- `dequeu()`: remove/return

## Header Files
- The header file initializes the functions of our ADT
- we use header files to have a copy of a pre-written ADT/data structure that we can import into other projects without having to re-write the ADT/data structure
- Header files will reduce redundancy
Header file for Stack ADT:
``` c++
//Stack.h (header file)
#ifndef STACK_H
#define STACK_H

class Stack {
public:
	Stack(int size); //constructor
	~Stack();        //destructor
	void push(int value);  //push value onto stack
	int pop();             //pop a value from the stack
	int peek() const;      //return the top value without popping
	bool isEmpty() const;  //check if the stack is empty
	bool isFull() const;   //check if the stack is full

private: 
	/* things only accessible within this class so you don't use it in the    
	driver file */    
	int* arr;      //pointer to the array for stack storage
	int top;       //index of the top element
	int capacity;  //maximum capacity of stack
}
```
- Setter function: only modify the data 
	- Example: `push()`
- Getter function: retrieve the data
	- Example: `peek()`
- `pop()` is special because it both modifies and retrieves the data

``` c++
//main.cpp
#include <iostream>
#include "Stack.h"

//Constructor
Stack::Stack(int size) : capacity(size), top(-1) {
	arr = new int[capacity];
}

//Destructor
Stack::~Stack() {
	delete[] arr;
}

void Stack::push(int value) {
	if (isFull()) { return; }
	arr[++top] = value;
}

int Stack::pop() {
	return isEmpty() ? -1 : arr[top--];
}

int Stack::peek() {
	return isEmpty() ? -1 : arr[top];
}

bool Stack::isEmpty() const {
	return top == -1;
}

bool Stack::isFull() const {
	return top == capacity - 1;
	/* 
	suppose the capacity was defined to be 5 elements.
	`top` returns the index of the top element.
	if the index of the top element is '4',
	then isFull => true because 4 == 5 -1 (0-indexing happening here)
	*/
}

int main() {
	Stack stack(5); //constructor, make stack ADT of 5 elements
	stack.push(10);
	stack.push(20);
	stack.push(30);
	/* stack: [30, 20, 10] */
	std::cout << "Top element is:" << stack.peek() << std::endl;
	/* output: "30" */

	while (!stack.isEmpty()) {
		std::cout << stack.pop() << std::endl;
		/* output: {top element}, then remove the top element */
	}
}
```
