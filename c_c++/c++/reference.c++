#include <iostream>
#include <string>
using namespace std;


int main() {
    string myName="Gnanlin";
    string &firstName=myName;
    cout << myName<<" "<<firstName;

    return 0;
}
