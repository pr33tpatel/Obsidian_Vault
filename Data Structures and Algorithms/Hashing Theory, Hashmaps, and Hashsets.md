Preet Patel
Topic: Hashing Theory, Hashmaps, and Hashsets
08-12-2024, 12:51 PM
Self-Study: 7
#algorithm 
[[Computer Science]]

## Hashing Theory
- pre-storing and fetching
- prevents from $O(N)$ or larger time complexities
- due to the pre-calculations, hashing gives a $O(1)$ time complexity

#### Hashmaps
- using `map` gives time complexity of $O(log \text{ }N)$
- using `unordered_map` gives time complexity of $O(1)$

``` c++
#include <iostream>
#include <map>
using namespace std;
int main() {
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
    const int n = 7;
    int arr[n];
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    //pre-compute
    map<int, int> mp;
    for(int i = 0; i < n; i++) {
        mp[arr[i]]++;
    }

    //iterate in the map
    for (auto it : mp) {
        cout << it.first << "->" << it.second << endl;
    }

    int query;
    cin >> query;
    while (query--) {
        int number;
        cin >> number;
        cout << mp[number] << endl;
    }

    return 0;
}
```