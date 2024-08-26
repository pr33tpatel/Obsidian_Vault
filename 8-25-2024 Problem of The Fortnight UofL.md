Preet Patel
Course: Problem of The Fortnight
08-25-2024, 8:11 PM
#math
[[Math]]
[[Computer Science]]
Question: 
$$
\begin{aligned}
&\text{Find the smallest pair of integers } x \text{ and } y \text{ satisfying:} \\
&\hspace{4cm} 3x + 5y = 2024. \\
\\
&\text{The size of a pair is given by:} \\
&\hspace{4cm} ||(x, y)|| = \sqrt{x^2 + y^2}
\end{aligned}
$$

Hello, Dr. Smith-Tone:
My name is Preet Patel and I am studying Computer Science and Engineering and minoring in Mathematics. I think I have solved the Problem of the Fortnight posted on 8/25/2024.

 My approach was to use the Extended Euclidean Algorithm
First, I found $\text{GCD}(3,5)$:
$$
\begin{align*}
5 &= 1 * 3  + 2\\
3 &= 1 * 2  + 1\\
2 &= 2 * 1 + 0
\end{align*}
$$
Then I applied the Extended Euclidean Algorithm:
$$
\begin{align*}
1 &= (1 * 3) + (-1 * 2)\\
&= (-1 * 5) + (2 * 3)
\end{align*}
$$
A particular solution I got is:
$$
\begin{align*}
x_{0}&= 4048\\
y_{0}&= -2024
\end{align*}
$$
Then, the complete solution is:
$$
\begin{align*}
x &= 4048 + 5n\\
y &= -2024 - 3n
\end{align*}
$$
I then hand calculated some values for $n$ and noticed that when $-1000 < n < -500$ was returning the smallest pair size. 

Because I had figured out a lower and upper bound, I was wondering what algorithms or formulas could be applicable. I realized Binary Search would be very well suited for this problem.

I wrote a small C++ file and implemented the algorithm:
``` c++
#include <iostream>
#include <cmath>
#include <limits>

using namespace std;

double computeSize(int x, int y) {
    return sqrt(x*x + y*y);
}

void calculatePair(int n, int &x, int &y) {
    x = 4048 + 5 * n;
    y = -2024 - 3 * n;
}

int main() {
    int low = -1000;
    int high = -500;
    int bestN = low;
    double minSize = numeric_limits<double>::max();

    while (low <= high) {
        int mid = low + (high - low) /2;
        int x, y;
        calculatePair(mid, x ,y);

        double currentSize = computeSize(x,y);
        cout << "temp current size: " << currentSize << endl;
        if (currentSize < minSize) {
            minSize = currentSize;
            bestN = mid;
            cout << "temp min size " << minSize << endl;
        }

        high = mid - 1;
    }
    int bestX, bestY;
    calculatePair(bestN, bestX, bestY);
    cout <<"Best n: " << bestN << endl;
    cout << "x: " << bestX << ", " << "y: " << bestY<< endl;
    cout << "size: " << minSize << endl;
    return 0;
}
```
I have attached a copy of my code (probably a lot of bugs) which you can compile online at https://www.programiz.com/cpp-programming/online-compiler/ if you do not have a local compiler installed.

When I compiled the code, it returned:
$$
\begin{align*}
\text{bestN value} &= -750\\
x &= 298\\
y &= 226\\
\text{size of pair} &= 374.005
\end{align*}
$$
I then checked this by myself and it seems correct.

## So my final answer:
The smallest pair of integers $x$ and $y$ which satisfy
$$
\begin{align*}
3x + 5y &= 2024
\end{align*}
$$
are:
$$
\begin{align*}
\boxed{x = 298} \\
\boxed{y = 226}
\end{align*}
$$

----
also side note:
I had you for MATH 325 (Linear Algebra) during Spring 2024, and it was one of the best math classes I have ever taken. Learned a lot in that class, thank you for being such an awesome teacher.