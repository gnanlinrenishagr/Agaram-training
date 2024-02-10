#include <iostream>
#include <string>
using namespace std;

class Flowers
{
public:
    virtual void sum(int num1, int num2) = 0;
    virtual void sum(int num1, int num2, int num3) = 0;
    virtual void chara(char char1, char char2, char char3, char char4) = 0;
};

class Color : public Flowers
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
        cout << char1 << '\n' << char2 << '\n' << char3 << '\n' << char4<< '\n'<< add3<< '\n';
    }

};

int main()
{

    Color *ptr = new Color;

    ptr->sum(51, 89);
    ptr->sum(66, 56, 56);
    ptr->chara('a','c','d','e');
    delete ptr;
}
