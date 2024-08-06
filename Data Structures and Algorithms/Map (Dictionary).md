Preet Patel
Topic: Map/Dictionary
08-06-2024, 2:56 PM
Self-Study: 4
#algorithm 
[[Computer Science]]
Data Structures and Algorithms]]

## Map / Dictionary
- Called Map in c++, called Dictionary in Python, Java, etc.
- Uses <key, value> pairs
- Similar to a real dictionary
- The key is usually a simpler data type

#### Map Implementation
``` c++
#include <iostream>
#include <map> //already ordered
#include <unordered_map>
#include <string>
using namespace std;

void printOrderedDictionary(map<string, string> input_map) {
    cout << "Ordered Dictionary:" << endl;
    for (auto pair : input_map) {
        cout << pair.first << " - " << pair.second << endl;
    }
    cout << endl;
}

void printUnorderedDictionary(unordered_map<string, string> input_map) {
    cout << endl;
    cout << "Unordered Dictionary: " << endl;
    for (auto pair : input_map) {
        cout << pair.first << " - " << pair.second << endl;
    }
    cout << endl;
}

int main() {
    map<string, string> myOrderedDictionary; //associated string to a string
    myOrderedDictionary.insert(pair<string,string>("strawberry", "die Erdbeere"));
    myOrderedDictionary.insert(pair<string,string>("apple", "der Apfel"));
    myOrderedDictionary.insert(pair<string,string>("banana", "die Banane"));
    myOrderedDictionary.insert(pair<string,string>("orange" , "die Orange or die Apfelsine"));
    
    
    printOrderedDictionary(myOrderedDictionary); 
    /*a map orders elements in increasing order, 
    so for strings, in increasing alphabetical order.
    Therefore, "apple" is the first key even though "strawberry" was added first*/

    
    myOrderedDictionary["strawberry"] = "Die erdbeere"; //changed caps
    cout << "Size of ordered map: " << myOrderedDictionary.size() << endl;
    myOrderedDictionary.clear();
    cout << "Size of ordered map after clearing: " << myOrderedDictionary.size() << endl;


    unordered_map<string, string> myUnorderedDictionary;

    myUnorderedDictionary.insert(pair<string,string>("strawberry", "die Erdbeere"));
    myUnorderedDictionary.insert(pair<string,string>("apple", "der Apfel"));
    myUnorderedDictionary.insert(pair<string,string>("banana", "die Banane"));
    myUnorderedDictionary.insert(pair<string,string>("orange" , "die Orange or die Apfelsine"));

    printUnorderedDictionary(myUnorderedDictionary);

    return 0;
}
```

#### Pokedex Map
``` c++
#include <iostream>
#include <map>
#include <list>
#include <string>
using namespace std;

void printPokedex(map<string, list<string>> pokedex) {
    for (auto pair : pokedex) { 
        cout << pair.first << " - "; 

        for (auto attack : pair.second) { 
            cout << attack << ", ";
        }
        cout << endl;
    }
    cout << endl;
}

int main() {
    map<string, list<string>> pokedex; //key: pokemon, value: attacks of pokemon

    list<string> pikachuAttacks { "thunder shock" , "tail whip", "quick attack"};
    list<string> charamanderAttacks {"flame thrower", "scary face"};
    list<string> squirtleAttacks {"bubble", "water gun", "bite"};

    pokedex.insert(pair<string, list<string>>("Pikachu" , pikachuAttacks));
    pokedex.insert(pair<string, list<string>> ("Charamander", charamanderAttacks));
    pokedex.insert(pair<string, list<string>> ("Squirtle", squirtleAttacks));

    printPokedex(pokedex); // since map is ordered, "charamander" is first element

    return 0;
}
```