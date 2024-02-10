#include <iostream>
#include <string>
using namespace std;

class A
{
public:
    int c;

    // Overloaded + operator
    A operator+(const A &obj)
    {
        A result;
        result.c = c + obj.c;
        return result;
    }
    A operator*(const A &obj)
    {
        A result;
        result.c = c * obj.c;
        return result;
    }

    // Overloaded prefix -- operator
    A &operator--()
    {
        --c;          // Decrement the value of 'c' in the current object
        return *this; // Return a reference to the modified object
    }
};

int main()
{
    A obj;
    obj.c = 10;

    A obj1;
    obj1.c = 21;

    A obj2 = obj + obj1; // Use the overloaded + operator to add obj and obj1
    A obj3 = --obj;      // Use the overloaded -- operator to decrement obj
    A obj4 = obj2 * obj3;
    A obj5 = obj4 + obj3;
    cout << "Value of obj2.c: " << obj2.c << endl;
    cout << "Value of obj3.c: " << obj3.c << endl;
    cout << "Value of obj4.c: " << obj4.c << endl;
    cout << "Value of obj5.c: " << obj5.c << endl;

    return 0;
}
