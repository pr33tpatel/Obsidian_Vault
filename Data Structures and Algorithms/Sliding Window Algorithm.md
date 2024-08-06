Preet Patel
6/22/2024 - 4:08 PM
#algorithm
Data Structures and Algorithms]]
[[Computer Science]]

- Works on continuous elements of an array
- A "window" is a sub-array on continuous elements

[12, 9, 23, 18, 10 , 1923, 152, 98, 02, 10, ,192, 952, 852, 54, 19, 02]
|           WINDOW         |

This is a window of 6 elements from indices 0 : 5

### Leetcode 219: Contains Duplicate II

<u>Question</u>
 Given an integer array `nums` and an integer `k`, return `true` _if there are two **distinct indices**_ `i` _and_ `j` _in the array such that_ `nums[i] == nums[j]` _and_ `abs(i - j) <= k`.

____________
- The size of the window is calculated by subtracting the two bounds of the array. 
	- Let k = 3
	- [1, 2, 3, 1]
	- |Window|
	- Size: $3 - 0 = 3$ 
	- This is valid window because it contains a duplicate and it is <= k

- To find windows, you can brute force every combination of windows. However, you can use sliding window for the optimal solution
- To find duplicates, you can use a hashing technique

Time Complexity: O(n)
Memory Complexity: O(k)

``` python
class Solution:
	def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
		window = set() #hashset for duplicates
		L = 0 #left pointer

		for R in range(len(nums)):


			#first checks if the window is the correct size:
			
			if R - L > k: #checks if window larger than k
				window.remove(nums[L]) #removes the left most value
				L += 1 #increments the left pointer by one
	
			
			#then, checks if there is a duplicate element in the set
			
			if nums[R] in window: 
				return True #true if another R exists in window


			#addes the Rth element to the set
			window.add(nums[R])
			
		return False
```
