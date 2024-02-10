#include <iostream>
#include <string>
using namespace std;

class Flowers{
    public :
    
    string Flower="Rose";
    void smell(){
        cout <<"Smells good" << "\n";
    }
    
    protected:
    void need(){
        cout <<"water to live" << "\n";
    }
};

class Color :public Flowers{
    public:
    
    string color_flower ="red";
    void all(){
        need();
        cout <<"need  all this" << "\n";
    }
    
};

int main (){
    Color obj;
    cout<< obj.Flower<<"\n"<< obj.color_flower<<"\n";
    obj.smell();
    obj.all();
}