#include <cs50.h>
#include <stdio.h>

int main()
{
    int isRun = 1;
    int Height = 0;
    while (isRun == 1)
    {
        if (Height >= 1 && Height <= 8)
        {
            isRun = 0;
            for (int i = 0; i < Height; i++)
            {
                for (int j = 0; j < Height; j++)
                {
                    if (j < (Height - i - 1))
                    {
                        printf(" ");
                    }
                    else
                        printf("#");
                }
                printf("  ");
                for (int j = 0; j < Height; j++)
                {
                    if (j <= i)
                    {
                        printf("#");
                    }
                }
                printf("\n");
            }
        }
        else
            Height = get_int("Height: ");
    }
}
