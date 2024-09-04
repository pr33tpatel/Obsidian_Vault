Preet Patel
Course: CSE 335 Database
09-04-2024, 11:03 AM
Lecture 6: Normal Forms
#database 
[[Computer Science]]

## Functional Dependencies
- Functional Dependencies (FDs) are used to specify formal measures for the "goodness" of the relational designs
- FDs and keys are used to define **normal forms** for relations
<u>Example of FD Constraints</u>:
- Social Security Number determines employee name
	- `SSN -> name`
- Project Number determines project name and location
	- `Pnumber -> {Pname, Plocation}`
- Employee SSN and project number determines the hours per week the employee works on that project
	- `{SSN, Pnumber} -> Hours`
#### Functional Dependencies Activity
![[Pasted image 20240904110918.png]]
<u>Identify all functional dependencies in the table</u>
- `StudentID -> StudentName`
- `Course_ID -> {Course_Name, Instructor}`
- `{Student_ID, Course_ID} -> {Student_Name, Course_Name, Instructor}`
- `{Student_ID, Course_ID} -> Instructor`

## Normal Forms
#### First Normal Form
- Very important to have data in First Normal Form
<u>Rules</u>:
- Each cell has to be a single value
- Same type per column
- Columns can be uniquely identified
<u>Definition of 1NF</u>:
A table is in First Normal Form (1NF) if:
1. It has a primary key
2. All columns contain only atomic (invisible) values
3. There are not repeating groups or arrays
#### Second Normal Form
- It must already by in First Normal Form
- No partial dependencies
- All attribute need to be on the full 
**Candidate Key**: Minimal Superkey
**Prime Attributes**: Attributes in the candidate key
**Non-prime Attributes**: Attributes that are not in a candidate key 
**Partial Dependencies**: when a non-prime attribute is functionally dependent on only a part of a candidate key

#### Third Normal Form
- All columns can only be determined by the key in the table and no other column
- There are no transitive dependencies (nothing is depending on anything but the key)
**Transitive Dependency**: $A\rightarrow B$ and $B \rightarrow C$ so $A \rightarrow C$

#### Review
**First Normal Form**: Each cell only contains one piece of information
**Second Normal Form**: Don't repeat data in one column because of another column
**Third Normal Form**: Every column relates only to the key