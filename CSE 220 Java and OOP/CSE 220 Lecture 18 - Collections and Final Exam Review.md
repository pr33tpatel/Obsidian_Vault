Preet Patel
Course: CSE 220: Java and Object Oriented Programming
07-23-2024, 6:13 PM
Lecture 18: Collections and Final Exam Review
#cse220 
[[Computer Science]]
[[CSE 220]]

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
