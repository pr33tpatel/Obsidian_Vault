Preet Patel
Course: CSE 412 - Embedded Systems
09-03-2024, 9:36 AM
Lecture 4: Debugging
#embeddedsystems 
[[Computer Science]]
[[Electrical Engineering]]

For lab 1: Body section is mainly for what things happened and the Analysis section is for why those things happened. Usually, if the sentence is structured like *this phenomenon happened "because" ...* it probably belongs in the Analysis section.

## Addressing
- Immediate: Load a value directly in the code
- Direct: Load a value from a memory location
- Indirect: Get an address from a register, then load the value at that address
- Registers R16-25 are the simplest to use
	- R16-25 can be used from direct addressing
- Registers R26-31 can hold 16 bit addresses
	- X (r26, r27), Y (r28, r29), Z (r30, r31) are used for indirect addressing


``` assembly
;
; MemoryDemo9-3-2024.asm
;
; Created: 9/3/2024 9:52:22 AM
; Author : preet
;

.dseg
.org 0x100 
eevar: .byte 0x05 ; where is this in data memory

.cseg ;these next things will go in program memory
.org 0x0
cheeseburger: ; this word is synonymous with "start"
	inc r16
	ldi r17, 35 ; this is a "load immediate", loads a hardcoded value
	ldi r18, 10 ; is this "10" in decimal?
	mul r17, r18 ; what does this do?
	;lid r19, eevar ;what goes wrong here?? we tried to use an address (0x100) as a value.
	; It was too big for ldi

	ldi r26, 0x00 ; this is about using the X register
	ldi r27, 0x01 
	st X, r17  
	ld r3, X
	lds r4, eevar ;this is a load "direct" from data space

	rjmp cheeseburger

```