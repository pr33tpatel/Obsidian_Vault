Preet Patel
Course: CSE 335 - Database
10-09-2024, 11:04 AM
Lecture 14: SQL Joins and Aggregation
#database 
[[Computer Science]]

## Inner and Outer Joins

![[Pasted image 20241009110626.png]]

- Inner Join: $A \cap B$
- Left Join: $A + A\cap B$
- Right Join: $B + A \cap B$
- Outer Join: $A \cup B$

__________

## Aggregation
- Used to summarize information from multiple tuples into a single-tuple summary
	- summarizes info from multiple rows into one row

#### WITH Clause
- Allows a user to define a table that will only be used in particular query
	- used for convenience to create a temp "View" and user that immediately in a query
- The WITH clause creates a temporary table, which can be more space efficient compared to regular queries because every regular query returns a table.