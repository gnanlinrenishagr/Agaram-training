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
    
    void sum(int num1,int num2){
        int add1=num1+num2;
        cout<<add1<<'\n';
    }
    void sum(int num1,int num2,int num3){
        int add2=num1+num2+num3;
        cout<<add2<<'\n';
    }
    void sum(int num1,int num2,int num3,int num4){
        int add3=num1+num2+num3+num4;
        cout<<add3<<'\n';
 
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
    obj.sum(5,89);
    obj.sum(56,56,56);
    obj.sum(59,45,58,96);

}