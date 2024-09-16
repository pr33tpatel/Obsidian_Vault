Preet Patel
Course: CSE 335 - Database
09-16-2024, 11:03 AM
Lecture 9: Web and Database Integration
#database 
[[Computer Science]]

## Applications
#### Components
- Database Gateway: a combination of one for more of the first three layers of architecture: browser, application logic, and database connection
- 4 components:
	- Browser Layer 
	- Application Logic Layer
	- Database Connection Layer
	- Database Layer


#### Traditional vs Web Based

| **Platform Dependent**                        | **Platform-Independent**               |
| --------------------------------------------- | -------------------------------------- |
| Client is natively compiled and executes fast | Client is an interpreter and is slower |
|                                               |                                        |
#### CGI Protocol
- Common Gateway Interface (CGI): protocol which allows web servers to interact with external programs and scripts
- Methods for Passing Data:
	- Hidden Fields
		- `<input type = hidden name="sessionID" value = "jwsr438kowkmgl"`
		- Volatile (the information will go away if the client leaves the webpage, session based)
	- Hidden URLs
	- Cookies
		- Non-volatile (the information kept until the client "clears cookies", non-session based)
	- JavaScript

#### Resource Allocation Model
- Certain algorithms help balance load and strain the database
	- Round Robin Load Balancing Algorithm

#### AWS Hosting Services
- AWS helps you host web technologies
- Cloud Computing