Preet Patel
Course: CSE 220 Java and Object Oriented Programming
07-09-2024, 3:25 PM
Lecture 14: Polymorphism and Sorting
#cse220 
[[Computer Science]]
CSE 220]]

## Binding
- Polymorphism means "having many forms"
- A polymorphic reference is a variable that can refer to different types of objects at different points in time
- the method called through a polymorphic reference can change from one invocation to another
- all object references in Java are potentially polymorphic
- consider `obj.doIt();` method
	- at some point, this invocation is *bound* to the definition of the method that it invokes
	- if the binding occurs at compile time, then that line of code would call the same method every time
	- Java usually defers **method binding** until run time; this is called *dynamic or late binding*
<u>Compile Time vs Run Time</u>:
* Compile time refers to the time-frame when source code is converted to machine code
* Run time is refers to the the time-frame when machine code is executed
## Inheritance Based Polymorphism
- an object can be a reference of the parent class or a child class
- Consider the parent class `Holiday` and child class `NewYears`
- the object `day` can be referenced like:
``` Java
Holiday day;
day = new Holiday();  //reference of parent class

Holiday day;
day = new NewYears(); //reference of child class
 ```
- supposed `Holiday` contains a method called `celebrate()` and `NewYears` overrides it
- in the example: `day.celebrate();`, the object determines which method is invoked

- If `NewYears` contained a method called `countdown` which is not in the parent class `Holiday` and we called `day2.countdown();` <-- would generate a compile error
	- this is because the compiler doesn't know which type of holiday is being referenced
	- an explicit cast can fix the error: `((NewYears)day2).countdown();`

##### Polymorphism and Inheritance Example 1
- See `HospitialEmployee, MD, RN, AdminEmployee, and TestHospital.java`
##### Polymorphism and Inheritance Example 2
- See `StaffMember, Employee, Volunteer, Executive, Hourly, Staff, and Firm.java`


## Interface Based Polymorphism
- Suppose we have classes `Philosohper` and `Dog` which both implement the `Speaker` interface providing distinct versions of the `speak` method
``` Java
Speaker guest = new Philosohper();
guest.speak(); //Philosopher object

guest = Dog();
guest.speak(); //Dog object
```
- If the `Philospher` class had a method called `ponitifcate()` and we called it as: `guest.ponificiate();` <-- would generate a  compile error.
	- this is because the compiler does not know what the type of reference is
	- we can fix this by explicit casting: `((Philosopher) guest).pontificate();`

## Sorting
- Sorting is the process of arranging a list of items in a particular order
#### Selection Sort
- select a value and put in its final place in the list
![[Pasted image 20240709161635.png]]
- See `PhoneList.java`, `Sorting.java`, `Contact.java`
