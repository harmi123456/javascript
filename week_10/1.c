#include <stdio.h>

int main() {
    int arr[100];
    int size;
    int sum=0;
    
    
    printf("Enter array size : ");
    scanf("%d",&size);
    
    for(int i=0; i<=size; i++){
        printf("a[%d] = ",i);
        scanf("%d",&arr[i]);
    }
    
    for(int i=0; i<=size; i++){
        sum += arr[i];
       
    }  printf("sum of all elements :%d",sum);

    return 0;
}