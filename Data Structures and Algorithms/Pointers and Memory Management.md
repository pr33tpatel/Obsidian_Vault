Preet Patel
Topic: Pointers and Memory Management 
07-31-2024, 5:19 PM
Self-Study: 1

#algorithm 
Data Structures and Algorithms]]
[[Computer Science]]

## Dynamic Memory Allocation
- for dynamic memory allocation, memory is allocated at *runtime*. for static memory allocation, memory is allocated at *compile time*
- `new` and `delete` keywords are used to handle dynamic memory allocation
```c++
int main() {
	int* n = new int; //at runtime, a new integer "n" is created.
	*n = 8;

	int* o;
	o = new int;
	*o = 2;


	int sum = *n  + *o;

	cout << "The sum of" << *n << " and" << *o << "is " << sum << endl;
	/* Output: "The sum of 8 and 2 is 10" */
	
	delete n;
	delete o;
	return 0;
}
```
- "n" was statically allocated at compile time. An unnamed variable was dynamically allocated at run time from `new int`. This results in **2 variables**

#### Dynamic Memory Allocation with Arrays
``` c++
int main() {
	int size;
	int* aptr;
	
	cout << "Enter the size of an array:";
	cin >> size;

	aptr = new int[size]; //memory address of new array is put in aptr

	for (int i = 0; i < size; i++) {
		cout << "Enter a number for element: " << i <<": ";
		cin >> aptr[i];
	}

	//show the contents of the array
	for (int i = 0; i < size; i++) {
		cout << aptr[i] << " ";
	}
	
	delete[] aptr; //delete the entire array, not just one element
	return 0;
}
```