Preet Patel
Topic: Stack
08-02-2024, 6:52 PM
Self-Study: 3
#algorithm 
[[Computer Science]]
Data Structures and Algorithms]]

## Stack
- **LIFO** - "Last in, First out"
	- Like a stack of plates or pancakes, the last one added to the stack is the first removed
#### Functions
- Empty - tells if stack is empty or not
- Size - returns the number of elements in the stack
- Push - takes in data input and pushes input to top of stack 
- Pop - removes the top element of the stack
- Top - references the top element of the stack

``` c++
#include <iostream>
#include <stack>
using namespace std;

int main() {   
    // 5 functions: empty, size, push, pop, top
    stack<int> numbersStack;
    numbersStack.push(1); // pushes "1" to top of stack
    numbersStack.push(2);
    numbersStack.push(3);
    numbersStack.pop(); // removes the top element from stack

    isStackEmpty(numbersStack);

    printStackSize(numbersStack);
    printStackElements(numbersStack);

    clearStack(numbersStack);

    printStackSize(numbersStack);
    printStackElements(numbersStack);

    return 0;
}
```

``` c++
void printStackElements(stack<int> input_stack) {

	if (input_stack.empty()) {cout << "Stack is empty, no elements to print" << endl;}
	while (!input_stack.empty()) {
		cout << input_stack.top() << endl;
		input_stack.pop();
	}
}
```

``` c++
void clearStack(stack<int>& input_stack) {
    while (!input_stack.empty()) {
        input_stack.pop();
    }
}
```

``` c++
void printStackSize(stack<int>& input_stack) {
    cout << "Stack size is: " << input_stack.size() << endl;
}
```

``` c++
void isStackEmpty(stack<int>& input_stack) {
    if(input_stack.empty()) {cout << "Stack is empty" << endl;}
    else {cout << "Stack is non-empty" << endl;}
}
```

