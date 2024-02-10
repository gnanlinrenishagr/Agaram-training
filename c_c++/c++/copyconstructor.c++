#include <iostream>
#include <string>
using namespace std;

class A
{
public:
    int *ptr;

    A()
    {
        // Constructor: Allocate memory for the integer pointed to by ptr
        ptr = new int();
    }

    A(const A &obj)
    {
        // Copy constructor: Allocate new memory for the copied object
        ptr = new int();
        // Copy the value from the original object's pointer
        *ptr = *obj.ptr;
    }
    void fun()
    {
        cout << "hi"
             << "\n";
    }
};

int main()
{
    // Create an object of class A
    A obj;

    // Initialize the value pointed to by obj.ptr
    *obj.ptr = 42;
    cout << "Value of *obj.ptr before delete: " << *obj.ptr << endl;

    // Create another object obj1 and copy the contents of obj
    A obj1 = obj;

        // Print the value pointed to by obj1.ptr
        cout
        << "Value of *obj1.ptr before delete: " << *obj1.ptr << endl;

    // Delete the memory pointed to by obj.ptr
    delete obj.ptr;

    // Set obj.ptr to NULL after deletion (Note: This is not recommended and can lead to issues)
    *obj.ptr = NULL;

    // Accessing *obj.ptr after delete results in undefined behavior
    cout << "Value of *obj.ptr after delete: " << *obj.ptr << endl;

    // obj1.ptr should still have its own valid value
    cout << "Value of *obj1.ptr after delete: " << *obj1.ptr << endl;

    // Print the addresses of obj.ptr and obj1.ptr
    cout << "Address of obj.ptr: " << obj.ptr << endl;
    cout << "Address of obj1.ptr: " << obj1.ptr << endl;

    return 0;
}
