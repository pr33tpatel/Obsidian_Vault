Preet Patel
Course: CSE 335 - Database
08-21-2024, 11:04 AM
Lecture 2: Database Design Using the E-R Model
#database 
[[Computer Science]]

## Design Phases
#### Initial Phase: 
- characterize the data needs of the users
#### Second Phase: 
- Choosing a data model
	- Hierarchical
	- Network
	- Relational
	- Entity Relationship
#### Final Phase: 
- moving from an abstract model to the implementation of the data base
	- Logical Design - deciding on the database schema
	- Business Decision - What attributes do we record in the database
	- Computer Science Decision - What relation schemas do we have and how should the attributes be distributed among the relation schemas
	- Physical Design - Planning the physical layout of the database

## Design Pitfalls
#### Redundancy
- a bad design may result in a repeat of information
	- this leads to data inconsistency among the various copies of the information
#### Incompleteness
- a bad design may make certain aspects of the enterprise difficult to model

## Design Approaches
- **Entity Relationship Model**: models an enterprise as a collection of entities and relationships.
	- Entity: an "object" that is unique from other entities, defined as set of attributes
	- Relationship: an association among entities
- Normalization Theory: formalize what designs are bad, and test for them

## Entity Relational Model
- model defines entities as "objects" with a a set of attributes and relationships as associations between objects
*For example*: suppose we design a school database
- the student would be an entity with attributes like address, name, id, age
- the address can be an entity also with attributes like city, street, city, etc.
``` mermaid
graph LR;
idstudent(student) --> idaddress((address));
idstudent(student) --> id2((name));
idstudent(student) --> id3((id));
idstudent(student) --> id4((age));
```
- Attribute: describes and defines the properties of an entity
- Key Attribute: describes the main characteristic of an entity, the primary key
- Composite Attribute: an attribute which is composed of other attributes
	- example: the name attribute is composed of characters, language, first/last
- Multivalued Attribute: attribute that can have more than one value
- Derived Attribute: an attribute that is derived from another attribute
	- example: age attribute changes and derived from date of birth attribute
#### Mapping Constraints
- One-to-one: one entity maps to one other entity
- One-to-Many: one entity maps to many entities
- Many-to-one: 
- Many-to-many

#### Keys
- it is used to identify any record or row of data from the table. it is also used to establish and identify relationships between tables
	- example: a `Student_ID` is a key because it is unique for each student and can identify different students
- it is good to store keys in multiple tables so different levels of access can be granted to different users of the database. also, if you only have one table, and something bad happens to it, then you don't have a backup
- Primary Key: the first key which is used to identify one and only one instance of the entity uniquely. 
	- example, `Student_ID` is the primary key because it can only map to only one student, as in there can be no two students with the same ID. Names would be a bad primary key because you can have two people of the same name
- Foreign Key: link data in table to data in another table. A foreign key column in a table points to a column with unique values in another table (often the primary key) to create a way of cross-referencing the two tables
#### Entity Relationship Diagram
- Weak Entity Sets: an entity set that does not contain sufficient attributes to uniquely identify its entities. In other words, a primary key does not exist for a weak entity set. However, it contains a partial key called a *discriminator* which can identify a group of entities from the set.
<u>Extended E-R Features: Specialization:</u>
- Specialization designating sub-grouping within an entity set
	- example: `Graudate` and `Undergradute` grouping
- **"is-a"** relationship, similar to inheritance in OOP

#### Quick Tips
- first, identify all entities and attributes
- identify the primary key for each entity for identification
- define relationships: specify how entities are related (one-to-one, one-to-many, many-to-many)
