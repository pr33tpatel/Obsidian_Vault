Preet Patel
Topic: Linked Lists
07-31-2024, 6:35 PM
Self-Study: 2
#algorithm 


[[Linked Lists]]
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
