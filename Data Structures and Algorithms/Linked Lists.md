Preet Patel
Topic: Linked Lists
07-31-2024, 5:48 PM
Self-Study 2:
#algorithm 
[[Computer Science]]
[[Data Structures and Algorithms]]

## Linked Lists
- Linked lists consists of nodes
- nodes store values such as ints, doubles, strings, etc.
- nodes connect to other nodes; this is called "*linking*"
- the nodes do not have to be continuous in memory because they are connected by the links
- the **head** node is the first node and the last node is usually **null**
- a linked list is used to implement a stack or queue

#### Insertion and Deletion
- the advantage of linked lists is that you insert elements in constant O(1) time.
- Insertions are done by connecting the previous node to and the next node to the element to be inserted.
	- compared to an array or vector structure were all the elements would have be shifted when inserting an element.
- Deletions can be by connecting one node to another node while "skipping" over another node. The node skipped over is not linked to any node and then it not a part of the linked list

## Implementation
#### Node class
``` c++
/* Contact.h header file */
using namespace std;
class Contact
{
	friend ostream& operator<<(ostream& os, const Contact& c);
	friend ContactList class;

	public: 
		//Constructor
		Contact(string name = "none"); //"none" is default value for contacts
	private:
		string name;
		Contact* next;
		
}
```

``` c++
/* Contact.cpp source file */

#include "Contact.h"

using namespace std;

//constructor which initializes name to "n" and next to "NULL"
Contact::Contact(string n): name(n), next(NULL) {}

//overloading the "<<" operator
ostream& operator <<(ostream& os, const Contact& c) { 
	return os << "Name: " << c.name;
}
```

#### List class
``` c++
/* ContactList.h header file */

#include "Contact.h"

class ContactList {
	public:
		ContactList();
		void addToHead(const std::string&); //using reference b/c not changing info

	private:
		Contact* head;
		int size;
};
```

``` c++
/* ContactList.cpp source file */

#include "ContactList.h"
using namespace std;

//Constructor and initilize head to "NULL" and size to "0"
ContactList::ContactList(): head(NULL), size(0) {}

void ContactList::addtoHead(const string& name)
{
	Contact* newOne = new Contact(name);
	if (head == NULL) {
		head = newOne;
	} else {
		newOne ->next = head;
		head = newOne;
	}

	size++;
}
```

``` c++
/* ContactListApplication.cpp source file */

#include "ContactList.h"
using namespace std;

int main() {
	ContactList* cl1 = new ContactList();
	string name;

	while(true) {
		cout << "Enter the name of contact or q to quit";
		cin >> name;
		if (name == "q") { break; } 
		else { cl1 -> addToHead(name); }
	}
}
```
