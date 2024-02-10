#include <iostream>
#include <string>
using namespace std;

class A
{
public:
    int c;

    void operator=(const A &obj)
    {
    //   this->c=obj.c;
      c=obj.c;
    }
};

int main()
{
    A obj;
    obj.c = 145;

    A obj1;
    obj1.c = 21;

    obj1 = obj;
    cout<<obj1.c<<"\n";

        return 0;
}
