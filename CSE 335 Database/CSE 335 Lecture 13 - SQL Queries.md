Preet Patel
Course: CSE 335 - Database 
10-07-2024, 11:07 AM
Lecture: 13
#database 
[[Computer Science]]

## SQL Queries
#### SQL Retrieval Queries
- There is a difference between `0` and `NULL`
	- `0` is a value which represents no quantity with a potential having a greater quantity
	- `NULL` is the absence of value with no potential of quantity
- `NULL = NULL` comparison is avoided
- Comparisons between `NULL` and `AND`, `OR`, `NOT` logic is allowed
- To check if an attribute is `NULL`, use `IS NULL` or `IS NOT NULL` 
#### Nested Queries
- `=`: `AND` or `IN` or `SOME`
	- Can be combined with `>=`, `<`, `<=`, and `<>`
General form of `ALL`, `ANY`, `SOME`
```sql
SELECT [column_name]
FROM [table_name]
WHERE experession_operator
	{ALL | ANY | SOME} (subquery)
```

- `EXISTS`: checks whether the result of a nested query is empty, boolean functions, return true/false
	- used in conjunction with `NOT EXISTS`
	- useful for debugging and seeing where the code breaks down

#### SQL Joins
- Joined table: permits users to specify a table resulting from join operation in the `FROM` clause
	- The `FROM` clause contains a single joined table, `JOIN` can also be called `INNER JOIN`
