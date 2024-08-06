Preet Patel
Topic: Queue
08-06-2024, 2:33 PM
Self-Study: 4
#algorithm 
[[Computer Science]]
[[Data Structures and Algorithms]]

## Queue
- **FIFO** - "First In, First Out"
- Similar to a real queue, like a line at a store
	- The first element that entered the queue will be processed first, and the last element in the queue will be processed last
- Used for when you need to process data in the exact order it was received, and your machine cannot keep up with the processing time
	- Example: When multiple pages enter a printer, the printer cannot print all of them at once, so it utilizes a queue to print the pages in the ordered the printer received them.

#### Functions
- Push: adds an element to the front of the queue
- Pop: removes the top element of the queue
- Size: returns the size of the queue
- Front: returns the top element of the queue
- Back: returns the last element of the queue
- Empty: returns true/false if the queue is empty