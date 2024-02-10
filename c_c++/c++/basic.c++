#include <iostream>
#include <cstring>
struct Student {
    char name[50];
    int age;
};
int main() {
    int a=3;
    float b=5;
    b=a;
    printf("%f\n",b);
    
    struct Student student1;
    strcpy(student1.name, "John");
    student1.age = 20;
    printf("%d",student1.age);
    
    int integerVar = 10;
    int *intPointer = &integerVar;
    *intPointer=25;
    printf("Pointer Value: %d\n", *intPointer);
    printf("Reference Value: %d\n", integerVar);
    
    int intArray[5] = {1, 2, 3, 4, 5};
    if (integerVar > 5) {
        printf("Integer is greater than 5.\n");
    } else {
        printf("Integer is not greater than 5.\n");
    }
    
    
    printf("Array Values: ");
    for (int i = 0; i < 5; i++) {
        printf("%d\n ", intArray[i]);
    }}