#include <cs50.h>
#include <stdio.h>
int main()
{
    long Number = get_long("Number:");
    int digit = 0;
    int sum2x = 0;
    int sum1x = 0;
    int totalSum = 0;
    int count = 0;
    int firstTwo = 0;
    while (Number)
    {
        count++;
        digit = Number % 10;
        Number = Number / 10;
        if (count % 2 == 1)
        {
            sum1x += digit;
        }
        else
        {
            digit = digit * 2;
            if (digit >= 10)
            {
                digit = (digit / 10) + (digit % 10);
            }
            sum2x += digit;
        }
        if (Number / 100 == 0 && Number >= 10)
            firstTwo = Number;
    }
    totalSum = sum1x + sum2x;
    if (totalSum % 10 == 0)
    {
        if (count == 15 && (firstTwo == 34 || firstTwo == 37))
        {
            printf("AMEX\n");
        }
        else if (count == 16 && (firstTwo >= 51 && 55 >= firstTwo))
        {
            printf("MASTERCARD\n");
        }
        else if ((count == 13 || count == 16) && (firstTwo / 10) == 4)
        {
            printf("VISA\n");
        }
        else
        {
            printf("INVALID\n");
        }
    }
    else
    {
        printf("INVALID\n");
    }
}
