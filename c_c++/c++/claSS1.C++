#include <iostream>
#include <string>
using namespace std;

class Car {
  public:
    Car() {     // Constructor
      cout << "This is a car!"<<"\n";
    };
    string brand;
    string model;
    int year;
    void myMethod( );
    // Setter
    void setSalary(int s) {
      salary = s;
    }
    // Getter
    int getSalary() {
      return salary;
    }
    
 private:   // Private access specifier not allowed to use outside
    int salary;
};
void Car::myMethod() { //function created outside class
  cout << "Hello Welcome to car World!"<<"\n";
}
int main() {
  Car carObj1;
  carObj1.brand = "BMW";
  carObj1.model = "X5";
  carObj1.year = 1999;

  cout << carObj1.brand << " " << carObj1.model << " " << carObj1.year << "\n";

  carObj1.myMethod();
  
  carObj1.setSalary(50000);
  cout << carObj1.getSalary()<<"\n";
  return 0;
}