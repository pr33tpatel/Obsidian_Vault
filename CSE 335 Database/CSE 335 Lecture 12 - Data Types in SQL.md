Preet Patel
Course: CSE 335 - Database 
10-02-2024, 11:09 AM
Lecture: 12
#database 
[[Computer Science]]

## Data Types in SQL
- Why is it important to pick the right data type?
	- Improves data storage efficiency
	- Optimizes performance
	- Ensures data accuracy
#### Data Types
- Numeric Data Types: Stores numbers
	- example: age, price, quantity
- Character String Types: Stores text
	- example: name, address, product description
- Data and Time Types: Stores data and times
	- example: date of birth, order date, transaction date
- Binary Types: stores binary data
	- example: images, PDFs, audio files
- Boolean Types: stores true/false states
	- example: tracks state of entity (is it active?)

#### Numeric Data Types
- `INT`: whole numbers
- `DECIMAL`: decimal precision
	- example: `DECIMAL(5,2)` can store $99.99$
- `FLOAT`: floating point values
	- example: storing $23.121010$
#### Character String Data Types
- `CHAR`: stores fixed length string
- `VARCHAR`: stores variable length string, up to a maximum size determined by size parameter
#### Date and Time Data Types
- `DATE`: stores only the date
	- example: stores date of birth like 1990-05-15
- `TIME`: stores only time (24-hour values)
	- example: stores order time like 14:30:00 (2:30 PM)
- `DATETIME`: stores date and time together
	- example: stores bank transaction: '2024-10-01 14:30:00'
#### Binary Data Types
- `BLOB`: store large binary objects like images
	- example: store a profile picture on social media platform
- `VARBINARY`: stores binary byte strings
- `BOOLEAN`: stores true/false values
	- example: tracking state of an entity (is it active?)

