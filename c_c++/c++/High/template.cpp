#include <iostream>
#include <string>
using namespace std;

// Class A definition
class A
{
public:
    // Version 1: Takes two parameters of the same type
    template <typename T>
    T fun(T a, T b)
    {
        return a + b;
    };

    // Version 2: Takes parameters of different types
    template <typename T, typename U>
    T fun1(T a, U b)
    {
        return a + b;
    }
};

// Class B definition
template <typename T, typename Y>
class B
{
public:
    T a;
    Y b;

    // Method to add 'a' and 'b' with proper type casting
    T add()
    {
        return a + b;
    };
};

int main()
{
    // Create an instance of class A
    A obj;

    // Example 1: Calling the first version of fun with both parameters of type int
    int result = obj.fun<int>(2, 5);
    cout << "Result 1: " << result << endl;

    // Example 2: Calling the second version of fun with parameters of types int and float
    A obj1;
    float result1 = obj1.fun1<float, int>(2.6, 5);
    cout << "Result 2: " << result1 << endl;

    // Create an instance of class B with template arguments float and int
    B< int, float> obj3;
    obj3.a = 12;
    obj3.b = 56.66;

    // Example 3: Calling the add method from class B
    float result3 = obj3.add();
    cout << "Result 3: " << result3 << endl;

    return 0;
}
