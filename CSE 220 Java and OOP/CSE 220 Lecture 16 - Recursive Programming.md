Preet Patel
Course: CSE 220 Java and Object Oriented Programming
07-16-2024, 4:40 PM
Lecture 16 - Recursive Programming
#cse220 
[[Computer Science]]
[[CSE 220]]

## Recursive Programming
#### Sum of $0 \text{ to }N$
``` Java
public static int sumrec(int num) {
	int result;
	if (num == 0) { result = 0;}  // base case, exits recursion
	else 
		result = num + sumrec(num - 1);  // recursive case

	return result;
}
```
- can only handle positive inputs. A negative input would result in infinite recursion
- it is convenient to define recursive methods as `static` because it is not necessarily tied to an object. This helps because many IDEs have debugging features to test static methods.
#### Factorial of $N!$
``` Java
public static int factrec(int num) {
	int result;
	if (num == 1) { result = 1;}  // base case, exits recursion
	else 
		result = num * factrec(num - 1);  // recursive case

	return result;
}
```

#### Iterative Alternatives to Recursion
``` Java
public static int factiter (int num) {
	int result = 1;
	for (int iter = 2; itec <= num; iter++)
		result = result * iter;
		
	return result;
}
```

#### Fibonacci Sequence (Recursive)
``` Java
public static int FibonacciRec (int num) {
	if (num == 0)
		return 0;
	else if (num == 1) 
		return 1;
	else
		return FibonacciRec(num - 1) + FibonacciRec(num - 2);
}
```
- this is very memory demanding because it is making two recursive calls each time, not efficient

#### Fibonacci Sequence (Iterative)
``` Java
public static int FibonacciIter(int n) {
	int []fibseq = new int[Math.max(2, n+1)];
	fibseq[0] = 0;
	fibseq[1] = 1
	for (int i = 2; i <= n; i++) {
		System.out.println(i);
		fibseq[i] = fibseq[i-1] + fibseq[i-2];
	}
	return fibseq[n];
}
```
- the iterative approach to the Fibonacci Sequence is more efficient than the recursive approach

#### Maze Traversal
- See `MazeSearch.java` and `Maze.java`
