#include <stdio.h>
#include <stdlib.h>

// Structure definition
struct Student {
    char name[50];
    int age;
};

int main() {
    // Predefined data types
    int integerVar = 10;
    float floatVar = 3.14;
    char charVar = 'A';

    // Pointer example
    int *intPointer = &integerVar;

    // Reference (using pointers)
    int &intReference = *intPointer;

    // Array example
    int intArray[5] = {1, 2, 3, 4, 5};

    // Structure example
    struct Student student1;
    strcpy(student1.name, "John");
    student1.age = 20;

    // Stack allocation
    int stackVar = 42;

    // Dynamic allocation (Heap)
    int *dynamicInt = (int*)malloc(sizeof(int));
    *dynamicInt = 100;

    // Type casting
    float result = (float)integerVar / 2;

    // Condition
    if (integerVar > 5) {
        printf("Integer is greater than 5.\n");
    } else {
        printf("Integer is not greater than 5.\n");
    }

    // Printing values
    printf("Integer: %d\n", integerVar);
    printf("Float: %.2f\n", floatVar);
    printf("Char: %c\n", charVar);

    printf("Pointer Value: %d\n", *intPointer);
    printf("Reference Value: %d\n", intReference);

    printf("Array Values: ");
    for (int i = 0; i < 5; i++) {
        printf("%d ", intArray[i]);
    }
    printf("\n");

    printf("Student Name: %s, Age: %d\n", student1.name, student1.age);

    printf("Stack Variable: %d\n", stackVar);
    printf("Dynamic Allocation (Heap): %d\n", *dynamicInt);

    printf("Type Casting Result: %.2f\n", result);

    // Free dynamically allocated memory
    free(dynamicInt);

    return 0;
}
