#include <cs50.h>
#include <stdio.h>
int main(void)
{
    int change = 0;
    do
    {
        change = get_int("Change owed:");
    }
    while (change <= 0);
    int coin = 0;
    while (change > 0)
    {
        coin += change / 25;
        change %= 25;
        coin += change / 10;
        change %= 10;
        coin += change / 5;
        change %= 5;
        coin += change / 1;
        change %= 1;
    }
    printf("%d\n", coin);
}
