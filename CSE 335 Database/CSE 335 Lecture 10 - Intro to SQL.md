Preet Patel
Course: CSE 335 Database
09-18-2024, 11:03 AM
Lecture 10: Intro to SQL
#database 
[[Computer Science]]

## Intro to SQL
- SQL: Structured Query Language (1974)
- Based upon relational algebra and tuple relational calculus
- SQL is used for storing, manipulating, and retrieving data from relational databases
- SQL code can be embedded with other software such as Python, R, etc.
- SQL is better for structured data
	- For unstructured data such as images, etc., SQL is not the best suited

#### Domain Types in SQL
- `cha(n)`: fixed length character string with size $n$
- `varchar(n)`: variable length character string with maximum size $n$ 
- `int`: integer (machine-dependent)
- `smallint`: small integer (machine-dependent)
- `numeric(p,d)`: fixed point number with precision of $p$ digits, with $d$ digits right of the decimal point 
	- example: `numeric(3,1)` allows to store 44.5
- `real, double precision`: float point and double-precision number (machine-dependent precision)
- `float(n)`: floating point number with precision of at least $n$ digits

#### Create Table Construct
``` sql
create table table_name (
	column1 datatype,
	column2 datatype not null,
	column3 datatype,
	...
	columnN datatype,
	PRIMARY KEY (one or more columns)
);
```
- the `not null` ensures that data cannot be null
- the Primary Key is `not null` by default when declared
