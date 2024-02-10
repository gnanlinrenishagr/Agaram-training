#include <iostream>
#include <string>
using namespace std;

int main() {
    string day = "Saturday";

    if (day == "Sunday") {
        cout << "Holiday";
    } else if (day == "Saturday") {
        cout << "Maybe holiday";
    } else {
        cout << "Working day";
    }

    return 0;
}
