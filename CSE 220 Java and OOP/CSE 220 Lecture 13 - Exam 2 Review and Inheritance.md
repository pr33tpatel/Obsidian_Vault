Preet Patel
CSE 220: Java and Object Oriented Programming
06-29-2024, 4:01 PM
Lecture 13: Exam 2 Review and Inheritance

[[CSE 220]]
[[Computer Science]]
#cse220

## Inheritance (cont.)
- because the parent can refer to the private member, the child can reference it indirectly using its parent's methods
- The `super` reference can be used to refer to the parent class, even if no object of the parent exists
- See `FoodAnalyzer.java`, `FoodItem.java` ,`Pizza.java`

### Inheritance in JavaFX
- Class `Node` is the top of the class hierarchy diagram
- `Shapes`, `ImageView`, `Parent` are subclasses to `Node`
-  All classes inherit from `Node`
![[Pasted image 20240629161325.png]]

### Color and Date Pickers
- A color picker allows the user to select a color from a palette
- A date picker allows the user to select a calendar date
- See `PickerDemo.java`
- `.now()` is a method which returns the current local date
- `.getDayOfWeek()` is a method to get the date day of the week

### Recap of OOP
- Abstraction - the principle that information irrelevant to users/developers should be hidden from them
- Encapsulation - principle that requires object self-governance, which helps reinforce abstraction by preventing objects from directly modifying each other
- Polymorphism - lets us access objects related through inheritance or interfaces in using general references (variables)

## Exam 2 Review
Make sure comfortable with: 
- Conditional Statements (including switch/case statements)
- Loops
- Class Relationships
- Arrays/ArrayLists
- Inheritance/Interfaces

#### Conditional Statements
- `if`, `if-else`, `switch` statements allows us to choose which statement will be executed next
- `if-else`: 
	- if the condition holds, the statement is executed, 
	- if no else clause is provided and the condition fails, the statement is not executed, and control resumes with the code in normal sequence
	- if there is an else clause and the condition fails, the statement in the else clause is executed
 ![[Pasted image 20240629162927.png]]
- `switch`:
	- evaluates an expression then attempts to match the result to one of several possible cases
	- Cases contain a value and list of statements
	- the flow of control to the statement associated with the first case value that matches
![[Pasted image 20240629162944.png]]
- `while` , `do-while`, `for` loops:
![[Pasted image 20240629163141.png]]

#### Class Relationships
- Dependency: class A **uses** class B
	- ex.) an online app may ***use*** File object when saving/loading user config options
- Aggregation: class A ***has-a*** B 
	- an object of class B is usually declared a member variable for class A
	- ex.) a company may ***have*** collections (list or arrays) representing information related to employees, facilities, etc. 
- Inheritance: class A ***is-a*** B 
	- class A usually directly inherits properties from class B using the keyword `extends`
	- class A should still have distinct qualities not in class B
	- aircraft carrier ***is-a*** type of marine vessel

#### Interfaces
- a Java interface is a collection of abstract methods and constants
	- an abstract method is a method header without a method body
	- an abstract method can be declared using the modifier `abstract`, but because all methods in an interface are abstract, usually it is not present
- an interface is used to establish a set of methods that a class will implement
- interfaces rely on the keyword `implements`
![[Pasted image 20240629164101.png]]
- interface cannot be instantiated
- methods in an interface have public visibility by default, it can be made private but is not common to do so
- a class formally implements an interface by:
	- stating so in the class header, using `implements`
	- providing implementations for every abstract method in the interface
- if a class declares that it implements an interface, it must define all methods in the interface
![[Pasted image 20240629165048.png]]

#### Comparable interface

- the `Comparable` class can be implemented to provide mechanism to compare objects
``` Java
if (obj1.compareTo(obj2)  <  0)
	System.out.println("obj1 is less than obj2");
```
- you cannot compare objects like: "obj1 < obj2" like you can with primitive data

#### Iterator Interface
- can be implemented using  `Iterator` interface which contains three methods
	- `hasNext`: returns a boolean result - "true"  if there are items left to process
	- `next`: returns the next object in the iteration
		- if you are parsing a file, it will return the next character
	- `remove`: removes the object most recently returned by the `next` method

### Array and ArrayList
- array is a collection of homogenous elements with ordered indices starting at 0
	- arrays have fixed size
	- generally very efficient structures
	- can store primitives or objects

- `ArrayList` object is a ordered list of elements that can shrunk or grown as needed
	- similar to `<vector>` in C++
	- dynamic size
	- can be slower than regular arrays because of the overhead from adding/removing elements
	- `ArrayList` can only store objects, meaning you should use wrapper classes for primitive data
		- `int j = 100;`
		- `Integer k = new Integer[j];`
#### Bounds checking
- an index used in an array or `ArrayList` must specify a valid element, the index value must be in the range $0 \text{ to } n-1$
- Java interpreter throws an `ArrayIndexOutOfBoundsException` if an index is out of bounds
- "off-by-one" bugs are such that the element and index are accessed incorrectly
- `length` returns the number of elements in an array
- `size()` returns the number of elements in an `ArrayList`

### Inheritance
- allows to derive a new class from an existing one
	- existing class is called the "parent", "super", or "base" class
	- derived class is the "child" or "subclass"
- the child class inherits methods and data from the parent class
- inheritance can be chained, meaning one class can inherit from another, which inherits from a third class, etc.

- inheritance allows for software reusability and readability
- `extends` keyword is used for inheritance
	- `extends` is different from `implements` as extends is directly related to inheritance where implements is saying the class implements an interface
![[Pasted image 20240629171310.png]]

#### Protected Modifier
- `protected` modifier allows a child class to reference a variable/method from the parent class
- it provides more encapsulation than public visibility, but not as much as private visibility
- protected variables are also visible to any class within the package of the parent class

#### Super Reference
- `super` keyword allows to refer back to the constructor of the parent class

#### Method Overloading
- process of giving a methods the same name but with different signatures for different functionalities
	- each signatures is unique
	- signatures include the number, type, and order of input parameters
- ex.) `System.out.println` is overloaded for different input types (String, int, double, etc.)
- **Do not confuse with method overriding**

#### Method Overriding
- a child class can override the definition of an inherited method
	- the new method must have the same signature of as the parent's method
	- methods declared `final` cannot be overridden
- variables can be "shadowed" (declared in both the child and parent class) but is not common to do so

#### Class Hierarchies
![[Pasted image 20240629172153.png]]

#### Object Class
- all classes are derived from the `Object` class
- `Object` class contains useful methods which are inherited by any class
	- `toString` and `equals` are inherited from the `Object` class

#### Interfaces and Inheritances
- interfaces and inheritance can be applied to classes
- interfaces cannot inherit from classes and vice-versa

#### Abstract Classes
- `abstract` keyword
- provides a skeletal framework for inheriting classes

#### JavaFX
- all objects inherit from base class `Node`