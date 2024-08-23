Preet Patel
Course: CSE 335 - Database
08-23-2024, 11:05 AM
Lecture 3: Relational Models
#database 
[[Computer Science]]

## Relational Models
- **Database Model**: a type of data model that determines the logical structure of the database
	- Hierarchical - root node with derived child nodes
	- Relational - entities and relationships
	- Network - 
	- Object-Oriented - parent/child nodes
#### Why Study the Relational Model:
- most widely used: IBM, Microsoft, Oracle, etc.
- Legacy systems in older models
<u>Interview Question:</u> "Draw an entity-relationship diagram for a database with companions, people and professionals (people who work for companies)."
#### Relational Database:
- Relational Database: a set of **relations**
	- Instance: a table with rows and columns
		- number of rows = cardinality
		- number of fields = degree/arity
	- Schema: specifies name of relation, also name and type of each column
		- ex: Students(s_id: string, name: string, login: string, gpa: real)
![[Pasted image 20240823111550.png]]
![[Pasted image 20240823111637.png]]
- Attribute names must be unique, each column name must be different

#### SQL Language
- `select` - to choose columns
- `from` - to choose a table
- `join`, `on` - to join a table
- `where` - to filter records
- `group by` - to group records
- `having` - to filter groups
- `order by` - to sort output
<u>Example:</u> "Find all 18 year old students"
``` sql
SELECT *
FROM Student S
WHERE S.age = 18
```

<u>Querying Multiple Relations</u>: 
``` sql
SELECT S.name, E.cid
FROM Students S, Enrolled E
WHERE S.sid = E.sid AND E.grade = "A"
```
![[Pasted image 20240823112920.png]]
- we get the S.name (student name) and E.cid (class ID) based on the "WHERE" query

- Creating Relations in SQL:
``` sql
CREATE TABLE Employee (
	EmployeeID INT PRIMARY KEY,
	FirstName VARCHAR (50),
	LastName VARCHAR (50),
	Department VARCHAR (50),
	Salary DECIMAL (10, 2);
)
```
- because "EmployeeID" is the primary key, if you try to add an entry with a duplicate EmployeeID, that entry will be rejected

- `DROP TABLE Students` - destroys the relation Students
- `ALTER TABLE Students
	- `ADD COLUMN firstYear: integer`
- the schema of Students is altered by adding a new field
- `INSERT INTO` - insert a single tuple
- `DELETE` - delete tuples
#### Query Complexity vs. Simplicity:
- Complex queries can lead to more complex execution processes, which can negatively impact performance if not optimized properly

#### Integrity Constraints (ICs)
- Integrity Constraints are the protocols that a table's data columns must follow. 
- Domain ICs: These are defined as the definition of valid set of values for an attribute.
- Entity ICs: Entity ICs state that primary key can never contain null value because primary key is used to determine individual rows in a relation uniquely, if primary key contains null value then we cannot identify those rows.
- Referential ICs: it can be specified between two tables
- Primary Key ICs: states the primary key attributes are required to be unique and cannot be null

#### Delete or Update in Relational Model
multiple approaches:
- you can delete the rows (not good practice)
- mark it as deleted using a flag
- set the value to null

#### Views and Security
- View: a relation, but we store definition instead of a set of tuples