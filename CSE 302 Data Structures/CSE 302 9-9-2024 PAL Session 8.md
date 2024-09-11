Preet Patel
Course: CSE 302 PAL Session
09-09-2024, 3:13 PM
Lecture: 8
#algorithm 
[[Computer Science]]

## Pointers
- `&`: operator to *retrieve* memory address, AKA: "reference"
- `*`: operator to *initialize* and *access* variable value, AKA: "dereference"
#### Referencing a Memory Address:
- `string food = "Pizza";`
- `cout << food;`: "Pizza" (variable value)
- `cout << &food;`: 0x7fec84 (hexadecimal memory address)

#### Initializing a Pointer:
- `string* ptr = &food;`
	- `*` indicates a pointer
	- `ptr` pointer name
	- `ptr = &food`, sets the value of the pointer to the memory address of the variable

#### Dereferencing a Pointer:
- How can we get the value the pointer is pointing to?
- `cout << *ptr;`
	- `*ptr`, dereferences the value pointed to by the pointer
- Modifying the value pointed to by the pointer:
- `*ptr = "Hamburger";`
	- sets the value at the address the pointer is pointing at to "Hamburger"

#### Pointer Operations:
- Basic Idea: use different operators to access different things with pointers
<u>Example</u>:
``` c++
int arr[] = {5, 10, 15, 20, 25, 30};
int* ptr = arr; //initalize a pointer to point at 1st element at [0]
ptr += 4;       //move ptr 4 positions to the right in memory, [0] -> [4]
cout << *ptr;   //dereference the pointer to get value at current position
			    //current position: [4] -> "25"

```

![[CSE 302_ Review Worksheet 9_9.pdf]]

Q1: a
Q2: c
Q3: d
Q4: a
Q5: b
Q6: c
Q7: c
Q8: b
Q9: c
Q10: a
Q11: b
Q12: c