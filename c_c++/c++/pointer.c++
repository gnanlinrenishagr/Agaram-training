#include <iostream>
#include <string>
using namespace std;

void name_change(string *ptr){
    *ptr="Gnanlin Renisha";
}
int main() {
    string myName="Gnanlin";
    name_change(&myName);
    cout << myName;

    return 0;
}