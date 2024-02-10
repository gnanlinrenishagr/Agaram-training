#include <iostream>
#include <string>
using namespace std;

class A {
    public:
    int a;        // Non-static member variable 'a' (private by default)
    static int k; // Static member variable 'k'

    void fun() {
        // Member function 'fun' to print the value of 'k'
        cout << "Value of k inside fun(): " << k << "\n";
    }
};

// Initiation of the static member variable 'k'
int A::k = 0;

int main() {
    A obj;
    obj.a = 10; // Assigning a value to the non-static member variable 'a'
    
    obj.fun();  // Calling the member function 'fun()' to print the value of 'k' inside 'fun()'

    A obj1;
    obj1.a = 23; // Assigning a value to the non-static member variable 'a' in another instance

    A::k = 20;   // Modifying the value of the static member variable 'k'

    // Printing the values of 'a' and 'k' from both instances
    cout << "Value of obj.a: " << obj.a << ", Value of A::k: " << A::k << "\n";
    cout << "Value of obj1.a: " << obj1.a << ", Value of A::k: " << A::k << "\n";

    return 0;
}

