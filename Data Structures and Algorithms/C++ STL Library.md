Preet Patel
Topic: C++ STL Library
08-10-2024, 6:07 PM
Self-Study: 6
#algorithm 
[[Computer Science]]

``` c++
#include<iostream>
#include <vector>
#include <list>
#include <deque>
#include <stack>
#include <queue>
#include <set>
#include <unordered_set>
#include <map>
#include <unordered_map>
#include <algorithm>

using namespace std;
void explainPair();
void explainVector();
void explainVector2();
void eraseVectorElements();
void insertVectorElements();
void explainList();
void explainDeque();
void explainStack();
void explainQueue();
void explainPriorityQueue();
void explainSet();
void explainMultiSet();
void explainUnorderedSet();
void explainMap();
void explainMultimap();
void explainUnorderedMap();
void explainSort();

int main() {
    explainPair();
    explainVector();
    explainVector2();
    eraseVectorElements();
    insertVectorElements();
    explainList();
    explainDeque();
    explainStack();
    explainQueue();
    explainPriorityQueue();
    explainSet();
    explainMultiSet();
    explainUnorderedSet();
    explainMap();
    explainMultimap();
    explainUnorderedMap();
    explainSort();

    return 0;
}

void explainPair() {
    cout << "--PAIR--" << endl;
    std::pair<int, int>p = {1, 3};

    cout << "First element: " << p.first << ", Second element: " << p.second << endl;

    pair<int, int> arr[] = {{1,2}, {2,5}, {5,1}}; //pair {2,5} is at index 1

    cout << arr[1].second << endl; //second element of pair at index 1
    cout << endl;

    
}

void explainVector()  {
    cout << "--VECTOR--" << endl;
    std::vector<int> v; //a dynamic array which can be resized as needed

    v.push_back(1);     //{1} -> inserts "1" at the back of vector
    v.emplace_back(1);  //{1,2} -> dynamically increases size at puts 2 in the back
    /* push_back vs. emplace_back:
    generally emplace is faster than push_back. 
    the difference is that emplace_back will construct the object in the argument
    while push_back can only take pre-constructed objects.
    See the example of pairs below
    */

    vector<pair<int, int>> vec_pair;
    vec_pair.push_back({1,2}); //the vector must be pre-constructed for push_back
    vec_pair.emplace_back(1,2); //emplace_back constructs the vector for us based on given args

    vector<int> v0(5, 100); //{100, 100, 100, 100, 100} -> container contains 5 instaces of "100"

    vector<int> v1(5); //{0, 0, 0, 0, 0} -> container of 5 instaces of "0" or "NULL" based on compiler
    
    vector<int> v2(5,20); //{20, 20, 20, 20, 20};
    vector<int> v3(v2); //{20, 20, 20, 20, 20} ->a copy of v1 but not the same vector, different memory

    v2.push_back(1);
    cout << endl;
}

void explainVector2() {
    cout << "--VECTOR (CONTINUED)--" << endl;
    vector<int> v = {10, 20, 30, 40, 50};
    vector<int>::iterator it = v.begin(); //iterator "it" is a pointer which points to the memory address
    
    it++;
    cout << *it << endl; //print the value of what it is pointing at 

    it = it + 2;
    vector<int>::iterator it_end = v.end(); //sets it at end
    vector<int>::reverse_iterator it_rend = v.rend();  //reverse end -- NEVER USED
    vector<int>::reverse_iterator it_rbegin = v.rbegin(); //reverse begin - NEVER USED

    cout << "2 ways to print first element of vector: " << v[0] << " " << v.at(0) << endl;
    cout << "Last element of vector: " << v.back() << " " << endl;

    /* TRAVERSING A VECTOR */
    cout << "Normal: ";
    for (vector<int>::iterator it = v.begin(); it != v.end(); it++) {
        cout << *it << ", "; //prints the value which it is pointing at
        /* prints: "10, 20, 30, 40, 50"*/
    }
    cout << endl;

    /* SHORTCUT FOR TRAVERSING VECTOR */
    cout << "Faster: using auto loop: ";
    for (auto it = v.begin(); it != v.end(); it++) { //uses "auto" to automatically assign data type
        cout << *it << ", ";
    }
    cout << endl;

    /* FASTEST WAY TO TRAVERSE A VECTOR */
    cout << "Using auto and for each loop: ";
    for (auto x : v) { //the vector contains ints
        cout << x << " "; //no need to dereference pointer becauase data type of x is int because of vector<int>
    }
    cout << endl;
    cout << endl;
}

void eraseVectorElements() {
    cout << "--ERASE--"<< endl;
    vector<int> v = {10, 20, 30, 40, 50};
    // v = {10, 20, 30, 40, 50}
    /* ERASE SINGLE ELEMENT */
    v.erase(v.begin() + 1); // v = {10, 30, 40, 50} -> erases "20", the second element

    /* ERASE RANGE OF ELEMENTS */
    v.erase(v.begin() + 1, v.begin() + 3); // v = {10} -> erases "30", "40", "50", range is [1:3]
    cout << endl;

}

void insertVectorElements() {
    cout << "--INSERT--"<< endl;
    vector<int>v(2,100); //v = {100, 100} -> two instances of "100"
    v.insert(v.begin(), 300); // v = {300, 100, 100}
    v.insert(v.begin() + 1, 2, 10); // v = {300, 10, 10, 100, 100} -> inserts two instaces of "10" starting at index 1

    /* INSERT A VECTOR INTO ANOTHER VECTOR */
    vector<int> copy(2, 50);
    v.insert(v.begin(), copy.begin(), copy.end()); //insert from begin to end of vector copy into vector v
    cout << endl;
}

void explainList() {
    //doubly linked list
    //very cheap to insert and remove elements
    cout << "--LIST--" << endl;
    list<int> ls;
    
    ls.push_back(2); // ls = {2}
    ls.emplace_back(4); // ls = {2, 4}

    ls.push_front(5); // ls = {5, 2, 4}
    ls.emplace_front(7);
    
    cout << "List: ";
    for (auto x : ls) {
        cout << x << ", ";
    }
    cout << endl;
    cout << endl;
}

void explainDeque() {
    cout << "--DEQUE--"<< endl;
    deque<int>dq;
    dq.push_back(1); // dq = {1}
    dq.push_front(4); // dq = {4, 1}

    for (int i = 4; i >= 0; i--) {
        dq.push_front(i); //pushes in order of 4, 3, 2, 1, 0 so 0 is the first element of deque
    }
    // dq = {0, 1, 2, 3, 4, 4, 1}
    dq.pop_back(); // dq = {0, 1, 2, 3, 4, 4}
    dq.pop_front(); // dq = {1, 2, 3, 4, 4}

    int last_element = dq.back(); // returns "4", the last element
    int first_element = dq.front(); //returns "1", the first element

    cout << "Deque: ";
    for (auto x : dq) {
        cout << x << ", ";
    }
    cout << endl;
    cout << endl;
}

void explainStack() {
    // LIFO - "Last in, first out"
    cout << "--STACK--" << endl;
    stack<int> st;
    for (int i = 1; i <= 5; i++) {
        st.push(i); //pushes in order of 1, 2, 3, 4, 5
    }
    // st = {1, 2, 3, 4, 5}
    cout << "Top element of stack: " << st.top() << endl; // prints 5
    st.pop(); // st = {1, 2, 3, 4} -> deletes top element "5"

    cout << "Stack size: " << st.size() << endl;
    cout << "Is stack empty?" << st.empty() << endl;
    cout << endl;
}

void explainQueue() {
    //FIFO - "First in, first out"
    cout << "--QUEUE--" << endl;
    queue<int> q;
    for (int i = 1; i <= 5; i++) {
        q.push(i);
    }
    // q = {1, 2, 3, 4, 5}
    int back_element = q.back();
    int front_element = q.front();
    cout << "Last element: " << back_element << endl;
    cout << "First element: " << front_element << endl;

    q.pop();
    cout << endl;
}

void explainPriorityQueue() {
    // Priority Queue - largest element has priority
    //not a linear data structure, instead it holds a tree structure to keep track of largest element
    // Time Complexity:
    // Push: O(log n), Pop(log n), Top: O(1)
    cout << "--PRIORITY QUEUE--" << endl;
    priority_queue<int> pq;
    pq.push(5);
    pq.push(2);
    pq.push(8);
    pq.push(10);
    pq.push(3);
    pq.push(1);

    cout << "Priority Queue Top Element: " << pq.top() << endl; //prints "10" even though 1 was added more recently
    pq.pop();
    cout << "Top Element after pop: " << pq.top() << endl; //prints "8" as it is the new largest element

    /* MINIMUM HEAP */
    priority_queue<int, vector<int>, greater<int>> min_heap; // stores the smallest elementa the top
    pq.push(5);
    pq.push(2);
    pq.push(8);
    pq.push(10);

    cout << "Minimum Heap Top Element: " << pq.top() << endl;
    cout << endl;
}

void explainSet() {
    // Set: Store unique elements in a stored order
    // Time Complexity: Everythign happens in O(log n)
    cout << "--SET--" << endl;
    set<int> st;
    st.insert(1);
    st.insert(2);
    st.insert(2); // does not store 2 again because it is not unique
    st.insert(4);
    st.insert(3); // 3 comes before 4 becaue of sorted order
    st.insert(5);
    cout << "Set: ";
    for (auto it : st) {
        cout << it << ", ";
    }
    cout << endl;
    // st = {1, 2, 3, 4, 5}

    auto it = st.find(3); // iterator "it" is a pointer which points to the memory address of find argument
    auto it1 = st.find(6); // element does not exist in set so iterator is pointing to set.end()

    st.erase(2); // erases "2" from the set and maintains the sorted order
    cout << "Set after removing \"2\": ";
    for (auto it : st) {
        cout << it << ", ";
    }
    cout << endl;
    st.insert(2);

    int count = st.count(1);

    auto it2 = st.find(3);
    st.erase(it2); // can pass iterators as erase arguments to erase the value which iterator is pointing to

    auto it3 = st.find(2); //inclusive lower bound
    auto it4 = st.find(4); //exclusive upper bound
    st.erase(it3, it4); // st = {1,5} -> erase elements within the range [2:4)
    cout << "Set after erasing range [2:4): ";
    for (auto it : st) {
        cout << it << ", ";
    }
    cout << endl;
    cout << endl;
}

void explainMultiSet() {
    // Multiset: Similar to set but stores duplicates elements
    cout <<"--MULTISET--" << endl;
    multiset<int> ms;
    multiset<int> ms2;
    ms.insert(1);
    ms.insert(1);
    ms.insert(1);
    // ms = {1, 1, 1}
    ms2 = ms; // ms2 = {1, 1, 1} -> copies elements of ms into ms2
    cout << "multiset 1 and 2: ";
    for (auto it : ms) {
        cout << it << ", ";
    }
    cout << endl;

    /* ERASE ALL INSTANCES */
    ms.erase(1); // ms = {} -> erases all instances of "1"
    cout << "multiset 1 after erasing all instances: ";
    for (auto it : ms) {
        cout << it << ", ";
    }
    cout << endl;

    /* ERASE ONE INSTANCE */
    ms2.erase(ms2.find(1)); // ms2 = {1, 1} -> erases only one instance of "1"
    cout << "multiset 2 after erasing one instance: ";
    for (auto it : ms2) {
        cout << it << ", ";
    }
    cout << endl;

    /* ERASE MULTIPLE INSTANCES */
    auto it1 = ms2.find(1); //
    auto it2 = std::next(it1, 2); // moves it1 by two positions so now points at ms2.end()
    // ms2 = {1,         1}      ms2.end()
    // it2 = it  -(1)-> it -(2)-> it , it2 equals it1 after it moves 2 positions, so it2 points at ms2.end()

    ms2.erase(it1,it2); // erase in range [it1,it2), including elements from it1 but not including it2
    // because [it1, it2) and it2 is pointing at ms2.end(), it removes two instances of "1" and does not remove what it2 is pointing at
    // ms2 = {}
    cout << "multiset 2 after erasing 2 instances: ";
    for (auto it : ms2) {
        cout << it << ", ";
    }
    cout << endl;
    cout << endl;
}

void explainUnorderedSet() {
    // Unorderd Set: Similar to set, stores unique elements but in unsorted order, randomized order
    // Time Complexity: O(1) on all operations
    // Does not have lower or upper bound operations like set
    cout << "--UNORDERED SET--" << endl;
    unordered_set<int>u_st;
    cout << endl;
}

void explainMap() {
    // Map: stores elements in key-value pairs in sorted order
    // keys are sorted in order
    // keys are unique, but duplicate values can exist
    cout << "--MAP--" << endl;

    map<int, int> mp; //key = int, value = int
    map<int, pair<int,int>> mp2; // key = int, value = pair of ints
    map<pair<int, int>, int> mp3; // key = pair of ints, value = ints
    
    mp[1] = 2; // key 1, value 2
    mp.emplace(3,1);  // key 3, value 1
    mp.insert({2, 4}); // key 2, value 4
    mp3[{2,3}] = 10;

    /* PRINT MAP */
    cout << "Map (sorted order, Time Complexity O(log n)): " << endl;
    for (auto it : mp) {
        cout << "{" <<it.first << ", " << it.second << "}" << endl;
    }

    /* ACCESS VALUE */
    cout << "Value at key \"1\": " << mp[1] << endl;
    cout << "Value at key \"5\": " << mp[5] << " <- does not exist"<< endl;
    
    /* ACCESS VALUE USING ITERATOR */
    auto it = mp.find(3);
    cout << "Value at key \"3\": " << (*it).second << endl; // "it->seocnd" also works because "it" is a pointer which needs to be dereferenced

    auto it2 = mp.lower_bound(2);
    auto it3 = mp.upper_bound(3);
    cout << endl;
}

void explainMultimap() {
    // Multimap: Similar to map, except it can store multiple keys
    // duplicate keys are allowed
    cout << "--MULTIMAP--" << endl;
    multimap<int,int> multi_mp;
    multi_mp.insert({1,2});
    multi_mp.insert({1,3});
    multi_mp.insert({1,4});

    cout << "Multimap (duplicate keys allowed): " << endl;
    for (auto it : multi_mp) {
        cout << "{" << it.first << ", " << it.second << "}" << endl;
    }
    cout << endl;
}

void explainUnorderedMap() {
    // Unordered Map: Similar to map, except will store in unsorted order

    cout << "--UNORDRED MAP--" << endl;
    unordered_map<int, int> u_mp;
    u_mp.insert({1,3});
    u_mp.insert({3,5});
    u_mp.insert({2,3});

    cout << "Unorderd Map (unsorted order, Time Complexity O(1)): " << endl;
    for (auto it : u_mp) {
        cout << "{" << it.first << ", " << it.second << "}" << endl;
    }
    cout << endl;
}

bool custom_comparator(pair<int, int> p1, pair<int,int> p2) {
    if (p1.second < p2.second) return true; // sort by second element
    if (p1.second > p2.second) return false; // if second elements are not equal, not need to check further
    return p1.first > p2.first; // if second elements are equal, sort in decsending order for first elements
    
}
void explainSort() {
    // Sort(): built-in function which sorts a container
    cout << "--SORT--" << endl;
    vector<int> v = {1, 5, 2, 6, 10, 9, 7};
    vector<int> v2 = v;
    cout << "Vector before sorting: " << endl;
    for (auto it : v) {
        cout << it << ", ";
    }
    cout << endl;

    sort(v.begin(), v.begin() + 4);

    cout << "Vector after sorting first 4 elements: " << endl;
    for (auto it : v) {
        cout << it << ", ";
    }
    cout << endl;

    sort(v.begin(), v.end());

    cout << "Vector after sorting all elements: " << endl;
    for (auto it : v) {
        cout << it << ", ";
    }
    cout << endl;

    sort(v.begin(), v.end(), greater<int>()); // greater<int>() sorts in reverse order
    cout << "Vector sorted in descending order: " << endl;
    for (auto it : v) {
        cout << it << ", ";
    }
    cout << endl;

    pair<int,int> a[] = {{1,2}, {2,1}, {4,1}};
    // condition 1: sort according to second element
    // condition 2: if second element is the same, then sort in decreasing order of first element

    cout << "Pair Array: " << endl;
    for (int i = 0; i < 3; i++) {
        cout << "{" << a[i].first << ", " << a[i].second << "}" << endl;
    }
    sort(a, a+3, custom_comparator);
    cout << "Sorted Pair Array: " << endl;
    for (int i = 0; i < 3; i++) {
        cout << "{" << a[i].first << ", " << a[i].second << "}" << endl;
    }
    cout << endl;
}


```



