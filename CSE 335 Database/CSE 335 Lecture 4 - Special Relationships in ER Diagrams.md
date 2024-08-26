Preet Patel
Course: CSE 335 - Database
08-26-2024, 11:04 AM
Lecture 4: Special Relationships in ER Diagrams
#database 
[[Computer Science]]

## Relational Algebra
#### Relational Query Languages
- Query Languages: Allow manipulation and retrieval of data
	- strong formal foundation based on algebra/logic
	- allows for optimization
- Relational Algebra: More operational, very useful for representing execution 
- Relational Calculus: lets users describe what they using calculus

#### Preliminaries
- A query is applied to relation instances, and the result of a query is also a relation instance
- Schemas of input relations for a query are fixed
- The schema for the result of a given query is fixed
	- basically, the data type stays the same for the entire query (an integer query will return an integer)
	- also, the schema cannot be changed during the query
**Positional vs named-attribute notation:**
- Positional Notation: `Sailor(1,2,3,4)`
- Named-attribute Notation: `Sailor(sid, sname, rating, age)`

#### Algebra
- Algebra operations ($+ , -, *, /$) or boolean algebra
- Every operator takes in one or two relation instances
![[Pasted image 20240826111802.png]]
- **Selection:** Selects a subset of rows from relation if the selection condition is satisfied
- **Projection ($\sigma$):** Deletes unwanted columns from relation
- **Cross-Product ($\pi$):** Allows us to combine two relations
- **Set-Difference($\times$):** Tuples in relation 1, but not in relation 2
- **Union($\cup$):** Tuples in relation 1 and in relation 2
#### Derived Operations
- **Join:** Similar to Cartesian product but the `Join` function has conditions
	- Join can be defined as the Cartesian product followed by selections and projections. 
	- The motivation behind joining tables is to have multiple small tables instead of one really big master table for encapsulation, abstraction, and security. Joining the small tables allows us to compare data.
- **Division:** 

#### Mind Teaser/Example
<u>Question:</u> Imagine you have a database for pet adoption center with the following tables:
- Pets:
	- PetID
	- PetName
	- Species
- Adoptions:
	- PetID
	- AdopterName
You've just learned that all the cats in the center need to be adopted quickly! To help with this, you want to find the names of all pets that are cats and see who had adopted them. How would you use relational algebra to list the names of all cats and their adopters?

- Join two tables and query all the PetName/PetID such that the pets do not have an adopter (AdopterName == NULL)