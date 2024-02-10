#include<stdlib.h>
#include<stdio.h>
#include<iostream>

using namespace std;

const int Size = 8;

void merge(int Array[], int Firstindex, int m, int Lastindex); // Function declaration for merging sub-arrays

void merge_sort(int Array[], int Firstindex, int Lastindex)
{
    if (Firstindex < Lastindex)
    {
        // Find the middle index of the array
        int m = Firstindex + (Lastindex - Firstindex) / 2;

        // Recursively call merge_sort on the first and second halves of the array
        merge_sort(Array, Firstindex, m);
        merge_sort(Array, m + 1, Lastindex);

        // Merge the sorted halves
        merge(Array, Firstindex, m, Lastindex);
    }
}

void merge(int Array[], int Firstindex, int m, int Lastindex)
{
    int x, y, z;

    // Calculate sizes of two sub-arrays to be merged
    int subArray1 = m - Firstindex + 1;
    int subArray2 = Lastindex - m;

    // Create two auxiliary arrays to store the sub-arrays
    int *First = new int[subArray1];
    int *Second = new int[subArray2];

    // Copy data to auxiliary arrays
    for (x = 0; x < subArray1; x++)
        First[x] = Array[Firstindex + x];
    for (y = 0; y < subArray2; y++)
        Second[y] = Array[m + 1 + y];

    // Merge the two sub-arrays back into the original array
    x = 0;
    y = 0;
    z = Firstindex;
    while (x < subArray1 && y < subArray2)
    {
        // Compare elements of the two sub-arrays and merge them in ascending order
        if (First[x] <= Second[y])
        {
            Array[z] = First[x];
            x++;
        }
        else
        {
            Array[z] = Second[y];
            y++;
        }
        z++;
    }

    // Copy the remaining elements of First[], if any
    while (x < subArray1)
    {
        Array[z] = First[x];
        x++;
        z++;
    }

    // Copy the remaining elements of Second[], if any
    while (y < subArray2)
    {
        Array[z] = Second[y];
        y++;
        z++;
    }

    // Deallocate memory used for auxiliary arrays
    delete[] First;
    delete[] Second;
}

int main()
{
    // Initialize an array of numbers to be sorted
    int Array[Size] = {2, 8, 5, 3, 9, 4, 1, 7};

    // Call merge_sort to sort the array
    merge_sort(Array, 0, Size - 1);

    // Print the sorted array
    cout << "The Sorted array is : " << endl;
    for (int i = 0; i < Size; i++)
    {
        cout << Array[i] << " ";
    }

    return 0;
}
