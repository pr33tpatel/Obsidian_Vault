Preet Patel
Course: CSE 335 - Database
09-09-2024, 11:05 AM
Lecture 7:
#database 
[[Computer Science]]

## Functional Dependencies Activity
<u>Question</u>: Analyze the FDs provided and identify examples of:
- Reflexivity: $\text{If } X \text{ is a subset of }Y,  \text{then } Y \rightarrow X$
- Transitivity: $X \rightarrow Y,\space Y\rightarrow Z, \space X\Rightarrow Z$
- Augmentation
<u>Functional Dependencies</u>:
- `StudentID -> StudentName`
	- Reflexivity
- `CourseID -> CourseName`
- `ProfessorID -> ProfessorName`
- `DeptID -> DeptName`
- `CourseID -> ProfessorID`
- `StudentID, CourseID -> Grade`

- Transitivity Example: `CourseID -> ProfessorID, ProfessorID -> ProfessorName`
	- therefore: `CourseID => ProfessorName` by transitivity
- Augmentation:
	- `StudentID -> StudentName` from FD list
	- By augmentation, `StudentID, CourseID -> StudentName, CourseName`
#### Why Identify Functional Dependencies
- Identifying Functional Dependencies help normalize the data
	- FDs are used to remove redundancy (exclude irrelevant information)
	- FDs also help achieve first, second, and third normal forms

## Boyce-Codd Normal Form (BCNF)
- Boyce-Codd Normal Form: every determinant is a candidate key
	- determinant: any attribute that functionally determines another attribute
#### Rules for BCNF
1. The table should be in 3rd Normal Form
2. X should be a superkey for every functional dependency (FD) X -> Y in a given relation
