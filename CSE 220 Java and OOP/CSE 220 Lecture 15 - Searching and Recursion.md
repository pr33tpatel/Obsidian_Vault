Preet Patel
Course: CSE 220 Java and Object Oriented Programming
07-13-2024, 5:40 PM
Lecture 15: Searching and Recursion

#cse220 
[[Computer Science]]
CSE 220]]
## <u>Searching</u>
- Searching is the process of finding a target element
#### Linear Search
- go through the entire search pool until the target is found
- Time Complexity: `O(n)`
#### Binary Search
- assumes the search pool is already sorted
- compares the middle element of the remaining viable candidates
- each comparison eliminates half of the remaining candidates
- Time Complexity: `O (n * logn)`
![[Pasted image 20240713174753.png]]
- see `PhoneList2.java` and `Searching.java`

## <u>JavaFX Properties </u>
- a JavaFX property is an object that holds a value
- a property is observable and mutable
- changes to properties can be immediately reflected in whatever code is using them
#### Property Binding
- a property can be bound to another property so that when the value of one changes, the other is also changed automatically
- no explicit event handling is required
- see `PropertyBindingDemo.java`
#### Change Listeners
- a property can have *change listener* which is like an automated property handler
- changes to properties will then automatically be updated in all other components that rely on it
#### Sliders
- a *slider* is a GUI control t hat allows the user to specify a value
- The min and max values for the slider are set up within the `Slider` constructor
- A slider can be horizontal or vertical
- A slider can also include tick marks and labels if desired
- The `getValue()` method can be used to obtain the current value of the slider
- see `EllipseSliders.java`

## <u>Recursion</u>
#### Recursive thinking:
- consider the list of numbers: $24, 88, 40, 37$
- Such as list can be defined two ways:
 1.) a list is a number, *comma*, number, ...
 2.) a list is a number, *comma*, a **list**
- in the 2nd way, the concept of *list* is used to define itself as a list can be a number followed by a smaller list

#### Recursive Definitions:
- consists of base cases and the recursive cases
- a base case is non-recursive and signals the end of the recursive process
- a recursive case is provides the self-defining element(s)
- multiple base and recursive cases are allowed
- without a base case, there is a a possibility for infinite recursion since the signal for the process to end does not exist

#### Recursive Factorial
- the factorial of $N$, can be defined recursively as $N! = N * (N-1)!$ 
- the base case would be $0! = 1$