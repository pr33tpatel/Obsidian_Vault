Preet Patel
Course: CSE 335 - Database
08-28-2024, 11:05 AM
Lecture 5: Functional Dependencies

## Activity Part 1
<u>Question:</u> Create a data table which contains at least columns for a school system. Identify which column you would select as the "key". How did you arrive at this decision?

Table name: "school-management"

| school_id | address | principal | number_of_staff | number_of_students | funding | phone | recurring_cost | initial_cost | number_classes_offered |
| --------- | ------- | --------- | --------------- | ------------------ | ------- | ----- | -------------- | ------------ | ---------------------- |
|           |         |           |                 |                    |         |       |                |              |                        |
Primary key: "**school_id**"

## Database Design
#### Redundancy
- Redundancy is the root of many problems with relational schemas
	- Redundant storage
	- Update anomalies
	- Insertion anomalies
	- Deletion anomalies
- Redundancy results in *low transaction throughput*
#### Decomposition
- Making multiple tables instead of one master table
- `Student(sid, sname, address)`
- `Course(cid, cname)`
- `Enrolled(sid, cid, grade)`
- This is better than storing all data in one singular table

#### Database Normalization
- Database Normalization is a process that uses formal rules to organize data to eliminate redundancy and avoid complexities
- First Normal Form: Separating one singular table into multiple specific tables. Also, only keep single valued attributes

#### Functional Dependencies
- Functional dependencies can be used to design a database in a way that eliminates redundancy.
	- Ex: consider a database that stores employee records and departments. If we store the department name for each employee, we might end up with several copies of the same department name.
- `StudentID -> StudentName`
	- This is a trivial functional dependency because with a single `StudentID`, we can determine `StudentName`
- `StudentDOB, Class -> StudentName`
	- This is non-trivial because multiple data points are required to determine `StudentName`
- Advantages of functional dependencies
	- Data Integrity
	- Normalization
	- Efficient Storage
	- Ease of Maintenance

## Activity Part 2
<u>Question:</u> Create a data table which contains at least columns for a school system. Identify which column you would select as the "key". How did you arrive at this decision?

Table name: "administration"

| school_id | address | principal | initial_cost | recurring_cost | funding |
| --------- | ------- | --------- | ------------ | -------------- | ------- |
|           |         |           |              |                |         |
Table name: "students"

| num_of_students | num_domestic_students | num_nondomestic_students |
| --------------- | --------------------- | ------------------------ |
|                 |                       |                          |

Table name: "staff"

| num_of_staff | num_of_teachers | num_of_nonteachers |
| ------------ | --------------- | ------------------ |
|              |                 |                    |
#### Keys
- Types of keys: **primary**, **foreign**, candidate,  alternative, unique

#### Armstrong's Axioms
$X \subset Y \Rightarrow X \rightarrow Y$

