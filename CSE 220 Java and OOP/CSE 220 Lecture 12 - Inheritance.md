Preet Patel
CSE 220: Java and Object Oriented Programming
06-25-2024, 3:25 PM
Lecture 12

CSE 220]]
[[Computer Science]]
#cse220

## Dates and Times

- java.util.Date class represents time and date in Java
- months are 1-12, dates are 0-30 (instead of 1-31)?
- java.time fixes these issues and adds time zones
- see <u>TimeandDayTest.java</u>
* Duration times: 
``` java
<dur> = Duration.between(<t1>, <t2>).toMillis()
```

## Inheritance
- Inheritance allows to derive a new class from an existing one
- A child is a more specific version of the parent
	- this is an *is-a* relationship
- Benefits: software reusability and readability
- See <u>GenericBook.java, Dictionary.java, Words.java </u>

#### Protected Modifier
- The "Protected" modifier is provides more encapsulation than public but not as much as private
	- with "Protected", the content can be accessed within the same package

* Symbols: private -, protected #, public + 
* Super Reference is used to refer the parent class, and often is used to invoke the parent's constructor
	* `super.();`
	* See <u>GenericBook2.java, Dictionary2.java, Word2.java</u>


#### Single Inheritance and Overriding
* Java only has **single inheritance**: meaning a derived class can only have one parent class
* A child class can **override** the definition of an inherited method for in favor of its own
	* See <u>Messages.java, Thought.java, Advice.java</u>
* a `final` modifier cannot be overridden, this is for security reasons
* shadowing variables is when you use the same name for a variable throughout a parent and child class. This should be used with a lot of caution as it can cause a lot of confusing and error-ridden code

#### Overloading vs Overriding
* Overloading deals with multiple methods with the same name in the same class, but with different signatures
* Overriding deals with two methods, one in the parent class and one in the child class, that have the same signature
* Overloading lets you define a similar operation with different ways for different parameters
* Overriding lets you define a similar operation in different ways for different object types


#### Object class
* The `Object` class is a class in `java.lang`
* all classes are derived from the `Object` class
* by default, a class is a child of the `Object` class if it is not explicitly defined to be the child of another existing class
* The `Object` class contains useful methods:
	* `toString` is in the `Object` class
		* every time we define the `toString` method, we are actually overriding an inherited definition
	* `equals` is in the `Object` class
		* we can override `equals` in any class to define "equality" in any way we that seems more appropriate


#### Abstract Classes
* An abstract class is placeholder in a class hierarchy that represents a generic concept
* An abstract class cannot be instantiated
``` java
public abstract class Product 
{
	// class contents
}
```
- abstract classes often contain abstract methods with no definitions (like interfaces)
	- unlike an interface, the abstract modifier must be explicitly applied to each abstract method
- an abstract method can contain non-abstract methods with full definitions
- a child class of an abstract class must override the abstract methods of the parent or the child class will also be considered abstract
- an abstract method cannot be defined as `final` or `static`
