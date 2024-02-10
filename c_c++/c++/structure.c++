#include <iostream>
#include <string>
using namespace std;
int main() {
    struct list {
        int a;
        int b[5];
        char c[4];
        
    };
    list z;
    z.a=1;
    z.b[2]=9;
    z.c[2]='a';
    
    cout<<z.a;
    return 0;
    
}



#include <iostream>
#include <string>
using namespace std;
int main() {
    struct list {
        int a;
        int b[5];
        char c[4];
        
    };
    list *z = new list;

    z->a = 1;
    z->b[2] = 9;
    z->c[2] = 'a';

    cout << z->a << "\n";

    delete z;
    return 0;
    
}