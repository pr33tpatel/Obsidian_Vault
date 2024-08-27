Preet Patel
Course: CSE 412 - Embedded Systems
08-27-2024, 9:36 AM
Lecture 3: Number Operations and Assembly Programming

#embeddedsystems 
[[Computer Science]]
[[Electrical Engineering]]

**ADD - Add without Carry**
- Operation: $Rd \leftarrow Rd + Rr$
- Syntax: `ADD Rd,Rr`
- Operands: $0 \le d \le 31, 0 \le r \le 31$
- Program Counter: $PC \leftarrow PC + 1$

#### Getting Data In and Out
- Pins on the AVR allow data to be transferred
- Two methods to do this:
	- Serial - "ducks in a row", data is clocked and sent one bit at a time
	- Parallel - number of bits per unit based on number of wires (8, 16, 32-bit)

#### Loops and Jumps
**Relative Jump**
- `rjmp`
- Jump anywhere within $\pm$ 2K of memory from the label
**Absolute Jump**
- `jmp`
- Jump anywhere in the 64KB memory space
