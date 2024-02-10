#include <iostream>
#include <string>
#include "namespace.h"
#include "name.h"

int main()
{
    page1::A obj;
    obj.fun();
    page2::A obj1;
    obj1.fun();
    return 0;
}
