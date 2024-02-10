#include <iostream>
#include <string>
using namespace std;

class A
{
public:
    virtual void sum(int num1, int num2) = 0;
    virtual void sum(int num1, int num2, int num3) = 0;
    virtual void chara(char char1, char char2, char char3, char char4) = 0;
};

class B : public A
{
public:
    virtual void sum(int num1, int num2)
    {
        int add1 = num1 + num2;
        cout << add1 << '\n';
    }
    virtual void sum(int num1, int num2, int num3)
    {
        int add2 = num1 + num2 + num3;
        cout << add2 << '\n';
    }
    virtual void chara(char char1, char char2, char char3, char char4)
    {
        string add3 = string(1, char1) + char2 + char3 + char4;
        cout << char1 << '\n'
             << char2 << '\n'
             << char3 << '\n'
             << char4 << '\n'
             << add3 << '\n';
    }
};
class C : public A
{
public:
    virtual void sum(int num1, int num2)
    {
        int add1 = num1 - num2;
        cout << add1 << '\n';
    }
    virtual void sum(int num1, int num2, int num3)
    {
        int add2 = num1 * num2 * num3;
        cout << add2 << '\n';
    }
    virtual void chara(char char1, char char2, char char3, char char4)
    {
        string add3 = string(1, char1) + char2 + char3 + char4;
        cout << char1 << '\n'
             << char2 << '\n'
             << char3 << '\n'
             << char4 << '\n'
             << add3 << '\n';
    }
};

int main()
{
    A *ptr = NULL;
    int choice;
    cout << "Enter 1 for B, 2 for C: ";
    cin >> choice;

    switch (choice)
    {
    case 1:
        ptr = new B();
        break;
    case 2:
        ptr = new C();
        break;
    default:
        cout << "Invalid choice\n";
        return 1;  // Return an error code
    }

    ptr->sum(51, 89);
    ptr->sum(66, 56, 56);
    ptr->chara('a', 'c', 'd', 'e');


}
