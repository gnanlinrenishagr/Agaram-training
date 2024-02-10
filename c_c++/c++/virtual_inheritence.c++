#include <iostream>
#include <string>
using namespace std;

class A {
    public:
    A(int a=3,int b =5){
        cout<<"CONSTRUCTOR A"<<"\n"<<a<<" "<<b<<"";
    };
    void dfun ( ){
        cout<<"Func A"<<"\n";
    };
    ~A(){
        cout<<"DESTRUCTOR A"<<"\n";
    };
    
};

class B:virtual public A
{

public:
    B(){
        cout<<"CONSTRUCTOR B"<<"\n";

    };
    ~B(){
        cout<<"DESTRUCTOR B"<<"\n";

    };
};

class C :virtual public A
{
public:
    C(){
        cout<<"CONSTRUCTOR C"<<"\n";

    };
    ~C(){
        cout<<"DESTRUCTOR C"<<"\n";

    };
};

class D :public B,public C
{
public:
    D(){
        cout<<"CONSTRUCTOR D"<<"\n";

    };
    ~D(){
        cout<<"DESTRUCTOR D"<<"\n";

    };
};



int main() {
    D Z;
    Z.dfun();

    return 0;
}