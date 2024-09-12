Preet Patel
Course: CSE 412 - Embedded Systems
09-12-2024, 9:45 AM
Lecture 6: Math on Microcontrollers
#embeddedsystems 
[[Computer Science]]
[[Electrical Engineering]]

## Math on Microcontrollers
- Use C libraries for advanced calculations like trigonometric stuff
- Two' Complement process is like multiplying by -1, that's why it is the NEG instruction

## Celsius Look Up Table in Assembly
``` asm
start:
		ldi r16,255
		ldi r17,2
		ldi r18,1
		ldi r19,0

		add r16,r18
		adc r17,r19

		ldi r20,7
		sts 0x105,r20

		ldi ZL,low(2*table)
		ldi Zh,high(2*table)
		ldi r16, celsius
		add ZL,r16
		ldi r16,0
		adc ZH, r16
		lpm

		sts 0x106, r0
		table: .db 32, 34, 36, 37, 39, 41, 43, 45, 46, 48, 50, 52, 54, 55, 57, 59, 61, 63, 64, 66
		.equ celsius = 0
		.exit
```

## Subroutines vs. In-Code:
- Subroutines save program memory if multiple calls to the same subroutine
- Subroutines need stack operations and jumps $\rightarrow$ longer execution times. 
- Subroutines allow for modular development and testing of software

