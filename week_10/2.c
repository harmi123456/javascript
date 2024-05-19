#include<stdio.h>
    int str_length(char str[])
    {
	int count_str=0;
	for(int i=0; str[i]; i++)
    {
        count_str++;
    }
    return count_str;
    }  

    int main()
    {
    char str[100];
    printf("Enter Any String : ");
    scanf("%s",&str);
    printf("The Length Of String is : %d",str_length(str));

    return 0;
} 