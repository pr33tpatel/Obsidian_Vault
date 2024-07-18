Preet Patel
Course: CSE 220 - Java and Object Oriented Programming
07-18-2024, 12:59 PM
Lecture 17: Exceptions and Collections

#cse220 
[[Computer Science]]
[[CSE 220]]

## Exception Handling
- Exceptions are objects that describe an unusual situation
- Exceptions are thrown by a program, and may be caught and handled
- A program can be separated by normal execution flow and exception error flow

- An *error* is an object that describes a problem with the Java Virtual Machine
	- Errors are generally thrown by base-level Java resource modules
- Errors are very rare

- An exception message includes the *call stack trace* which indicates what line the exception occurs and shows the method call trail that led to the execution of the exception
- See `Zero.java`

#### Try-catch statement
- the `try` block is followed by `catch` clauses
- each catch clause has an associated exception type and is called an *exception handler*
- See `ProductCodes.java`

- The `finally` clause is always executed
- See `AvgUpto10.java`

#### Exception Propagation
- an exception can be handled at a higher level if it snot appropriate to handle it where it occurs
- exceptions propagate up through the method calling hierarchy until they are caught and handled or until they reach the `main` method
- See `Propagation.java` and `ExceptionScope.java` 

## Exception Classes
![[Pasted image 20240718132036.png]]
- An exception is either *checked* or *unchecked*
- A *checked* exception must either be caught or must be listed in the `throws` clause
- An *unchecked* exception does not require explicit handling
	- only objects of `RuntimeException` or descendants are *unchecked* exceptions
#### Creating Custom Exceptions
- See `CreatingExceptions.java` and `OutofRangeException.java`

## Robustness and Exception Priorities
- Robustness is the ability for the software to adapt to unusual situations
	- Ex.) Image Processing and Machine Learning
- Not every exception can be recovered from in an appropriate manner. In this case, graceful termination is possibly the best course of action. However, in high-stakes situations (medical software, military and defense), graceful termination may not be an viable option
______
## Collections
- a collection is an object that serves as an repository for other objects
- A collection provides services for adding, removing, and managing elements
- All collection classes in Java are **generic**
#### Abstract Data Types and Data Structures
- An abstract data type (ADT)  is an organized collection of information and set of operations used to manage data
- The set of operations is what defines the ADT
- the data structure represents a specific implementation of an ADT
	- Ex.) *Unsorted List* is the abstract data type and *storing data in linked lists* is the data structure
## Dynamic Representations
#### Dynamic Structures
- a *static* structure has a fixed size
	- this is different from the `static` modifier
- Arrays are static
- A dynamic structure grows and shrinks at execution, such as the ArrayList
#### Object Reference
- An *object reference* stores the memory address of an object, also called a **pointer** 
- references can be used to create links between objects
#### Linked Lists
``` Java
class Node {
	int info;
	Node next;
}
```
![[Pasted image 20240718134211.png]]
- New nodes can be inserted into the middle of the list by connecting the previous node and the next node to the node being inserted
- Nodes can also be deleted by removing its link from the data structure (going to next.next element)
- See `Magazine.java`, `MagazineRack.java`, `MagazineList.java`
