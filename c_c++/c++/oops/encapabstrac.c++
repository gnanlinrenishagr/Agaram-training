//encapsulation and abstraction
#include <iostream>
#include <string>
using namespace std;

class Flowers{
    public :
    
    string Flower="Rose";
    int tot;
    void smell(){
        cout <<"Smells good" << "\n";
    }
    void total( ){
        need();
        get_no();
        tot_flowers();
        cout << "Total no of flowers:"<<tot<<"\n";
    }
    void get_no(){
        no_of_red_flowers=98;
        no_of_white_flowers=85;
        no_of_yellow_flowers=54;
    }
    private:
    
    int no_of_red_flowers;
    int no_of_white_flowers;
    int no_of_yellow_flowers;
    void tot_flowers(){
        tot=no_of_red_flowers+no_of_white_flowers+no_of_yellow_flowers;
    }
    
    protected:
    void need(){
        cout <<"water to live" << "\n";
    }
};



int main (){
    Flowers obj;
    cout<< obj.Flower<<"\n";
    obj.smell();
    obj.total();
}