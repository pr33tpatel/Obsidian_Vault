Preet Patel
Course: CSE 412 Embedded Systems
09-17-2024, 9:45 AM
Lecture 7: Subroutines
#embeddedsystems 
[[Computer Science]]
[[Electrical Engineering]]

## Subroutines and Stack
- Stack: a consecutive chunk of memory
- Program counter: a pointer to keep track of where you are in the program
- Stack Pointer (SP): holds the next available address to store data on the stack
	- Stack pointer starts at `0x08FF` on the 328PB (RAMEND), the highest IRAM address and grows backwards towards smaller addresses
