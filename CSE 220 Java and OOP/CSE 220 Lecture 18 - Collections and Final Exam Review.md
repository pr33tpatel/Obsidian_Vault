Preet Patel
Course: CSE 220: Java and Object Oriented Programming
07-23-2024, 6:13 PM
Lecture 18: Collections and Final Exam Review
#cse220 
[[Computer Science]]
CSE 220]]

## Generics
- A class can be defined to operate on a generic data type which is specified when the class is instantiated:
- `LinkedList<Book> myList =  new LinkedList<Book>();`
- This allows for major code reusability 

#### Generics in Class Definitions
- the strength of generics lies in the ability to reuse entire classes for an arbitrary data type
	- `publc class Myclass<T> {...}`
	- now the generic can be used throughout the class\
- See `MyWrapper.java` and `TestGenericMethod.java`

``` Java
pulic class MyWrapper <T>
{
	private T genvariable;
	public MyWrapper(T genvariable) {
		this.genvariable = genvariable
	}
	public void printMyVariable() {
		System.out.println("My variable has a value of " + genvariable + ".");	
	}
	public void main(String[] args) {
		MyWrapper<Integer> myW1 = new MyWrapper<Integer>(10);
		MyWrapper<String> myW2 = new MyWrapper<String>("Hello");
		myW1.printMyVariable(); //prints "10"
		myW2.printMyVariable(); //prints "Hello"
	}
}
```

``` Java
public class TestGenericMethod {
	pulic static <EX> void countEle(EX inst, EX[] inputArray){
		int count = 0; 
		for (EX element : inputArray) {
			if (inst.equals(element))
				count++;
		}
		System.out.println(inst + " occurs " + count  + " times in the array.");
	}

	public static void main (String args[]) {
		Integer[] intArray = {1, 2, 1 , 3, 1 ,4, 1 ,5 1};
		Double[] doubleArray = {1.1, 2.2, 3.3, 4.4, 3.3, 2.2, 1.1, 2.2, 3.3, 4.4};
		String[] strArray = {"Hi", "there", "Where", "is", "the", "room", "that", "is",                            "empty?"};
		countEle(1, intArray);
		countEle(2.2, doubleArray);
		countEle("is", strArray);
	}
}
```

## Queues
- a queue is a list that adds items only to the rear and removes only from the front
- **FIFO**: "First in, First out"
	- Similar to a *queue* in real life (a waiting line at a bank)
- Enqueue - add item to rear
- Dequeue - remove item from front
- isempty - returns true if the queue is empty
- A queue can represented by a singly linked list

## Stack
- a stack is list where items are remove only from one end
- **LIFO**: "Last in, first out"
	- Similar to a *stack* of plates (ones on the top are added most recently and removed first)
- See `Queue.java`, `Stack.java`, `QSDriverV1.java`, `QSDriverV2.java`

``` Java
import java.util.LinkedList;
pulic class Queue<T> { //using generic data type
	private LinkedList<T> qlist;

	public Queue() { qlist = new LinkedList<T>(); } //constructor
	
	public void enqueue(T newItem) { qlist.addLast(newItem); }
	public  T dequeue() { return qlist.removeFirst(); }
	public boolean isEmpty() { return qlist.isempty(); }
}

```

``` Java
import java.util.LinkedList;
public class Stack<T> {
	private LinkedList<T> qlist;

	public Stack() { qlist = new LinkedList<T>(): }

	public void push(T newItem) { qlist.addFirst(newItem); }
	public T pop() { return qlist.removeFirst(); }
	public boolean isEmpty() { return qlist.isempty(); }
}
```

_______
## Final Exam Review
- Cumulative; make sure you know:**abstraction, encapsulation, inheritance, polymorphism**
#### Abstraction
- a software's user should only have access to and be responsible for relevant content
- if there are different users (customer, admin, etc.), each will have different levels of access
- Other OOP properties help reinforce abstraction
	- encapsulation helps isolate users from underlying data and structure
	- inheritance allows for fine-tuning of class/object selection for specific purposes
Ex.) Online Medical Records Application:
- A patient will have access to see only their personal , prescriptions, and financial information
- A physician will have access to all their patients' data
- A "Billing Dept" employee may have access to financial information
- A software developer has access to underlying infrastructure and UI elements
- **Each role is isolated from each other**

#### Encapsulation
- Classes and code segments have restricted access to each other to explicitly limit capabilities.
- Encapsulating underlying data and structure from code that uses them helps readability and reusability
	- Ex.) If the medical record data changes to include new details, it should be easy to adapt the existing system records
- Limiting capabilities may seem to make code less "powerful" but in reality, it helps to delegate specific tasks to specific code/classes
- One object (called the "client") may use another object for the a service
- The client of an object may call its methods (request service), but it should not be aware of how the service is accomplished
- Any changes made to the object's state should be made the the object's methods
	- Mutator and accessor methods
- The ideology is to make it difficult/impossible for a client to access an object's data directly
	- in other words, the object should be *self-governing*
Ex.) Employee Class
- instance variables like `empID` , `name`, `DOB`, should be kept private
- A **mutator** method can change the object's attributes
- An **accessor** method can return the object's attributes 

#### Class Relationships
- Dependency: class A ***uses*** class B (an object of class B will usually be passed as a parameter to methods of class A)
	- ex.) an application may ***use*** a File object when saving or loading user options
- Aggregation: class A ***has-a*** B (an object of class B will be declared a member variable for A)
	- a company may ***have*** collections (lists, arrays) representing information of employees
- Inheritance: class A ***is-a*** class B (an object of class A will directly inherit properties from class B using the `extends` keyword), class B still has distinct properties from class A.
	- an Car ***is-a*** a type of Vehicle

#### Interfaces
- a Java interface is a collection of *abstract methods* and constants
- an abstract method is a method header without a body/definition
- an abstract method can be declared using the `abstract` modifier, but all methods are declared *abstract* by default within an interface so it is usually not included
- an interface is used to establish a set of methods a class will implement (kinda like a guide)
- An interface cannot be instantiated
- methods in an interface have public visibility by default
- a class formally implements an interface by
	- using the `implements` keyword
	- providing implementations for ***every*** abstract method in the interface
- **if a class declares that it implements an interface, it <b><u>must define all methods</u></b> in the interface**
	- if a class does not need to use a method from the interface, it can use a "dummy" method but must still define all methods

#### Array and ArrayList
- an array is a collection of homogenous elements of the same type starting at 0. Arrays have fixed size and can store both primitives and objects
- an `ArrayList` object is an ordered list of elements. An ArrayList is dynamically sized (can grow and shrink as needed). An ArrayList can only store objects, it cannot store primitives (can use Wrapper classes to store primitives such as Integer for int, Double for double)

#### Inheritance
- vital to one of the two points of polymorphism (note: Java does not allow multiple inheritance)
- a `private` variable/method can only be accessed within the class definition
- a `protected` variable/method can be accessed throughout the directory it was declared in
- a `public` variable/method can be accessed without restriction

#### Overriding Methods
- a child class can *override* the definition of a inherited method
	- the overridden method must have the same signature as the original
	- methods declared as `final` cannot be overridden
- variables can be "shadowed" within the child class (declared in both the parent and child class), but is rarely done and should be used with caution

#### Method Overloading
- Method overloading is the process of giving a single method name multiple definitions
	- the signature of the methods must be unique and is what distinguishes the methods
Ex.) `println(...)` is overloaded
- `prinln(String s)`
- `println(int i)`
- `println(double d)`

#### Class Hierarchies
 ![[Class Hierarchies img.png]]

#### Polymorphism
- a polymorphic reference is a variable that can refer to different types of objects at different points in time
- the method called through a polymorphic reference can change from one call to another
- Ex.) `Occupation myocc;`
	- this reference can point to any `Occupation` object, **or object of compatible type**
	- compatibility is determined through inheritance or interfaces
- Polymorphism via Inheritance:
``` Java
Holiday day;
day = new Holiday();
//or
Holiday day;
day = new NewYears(); //NewYears is a type of Holiday and therefore compatible
```
- Polymorphism via Interfaces:
	- Assume two classes, `Philospher` and `Dog` both implement the interface `Speaker`, providing different versions of the `speak` method
``` Java
Speaker guest = new Philospoher();
guest.speak(); //"Hello"

guset  = new Dog();
guest.speak(); //"Bark"
```

#### Static Methods and Variables
- Static methods are not associated with objects, but rather the class itself
	- `Math.sqrt(...)` is not associated with an object but the `Math` class
- Static variables are unassociated with any instance. Static variables change everywhere
	- If a static variable changes within one method, it changes throughout the class and in other methods also
- Static methods cannot reference instance variables
- Instance methods can reference static variables

#### Recursion
- A recursive method is one where it invokes itself
- a recursive method must have a base case and a recursive case. The base case breaks recursion and without it, it can lead to infinite recursion
- Each call to the method sets up a new execution environment, with new parameters and local variables
- Ex.) Factorial function
	- Base case: $0! = 1$
	- Recursive case: $n! = n*(n-1)!$
``` Java
public static int factorialRec(int num) {
	if (num == 0) {return 1;}
	else
		return num * factorialRec( num - 1);
}
```
- Iteration is the alternative to recursion, usually using looping structures

#### Other/Misc
- Sorting: the process of arranging elements in a particular order
- Searching: the process of finding a target element from a search pool
- Arrays and ArrayLists use bounds checking and will throw exceptions if invalid index is used or trying to access elements out of bounds
- All classes in Java are derived from the `Object` class by default, and inherit the `equals()` and `toString()` methods
- Abstract classes cannot be instantiated but provide skeletal frameworks
- `super` references the parent class and is used to invoke the constructor of another method
- any class can implement the `Comparable` interface to provide a mechanism for comparing objects of that type
- a class implements the `Iterator` interface to guarantee processing of elements and using the `next()` and `hasNext()` methods
