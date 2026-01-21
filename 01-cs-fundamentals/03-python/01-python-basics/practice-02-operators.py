"""
practice 2 — Operators
Take two numbers from the user. Print: sum, difference, product, division result (2 decimal places), floor division, remainder, and the first number to the power of the second.
"""
a = int(input())
b = int(input())
print("sum:",(a+b)) 
print("difference:",(a-b))
print("product:",(a*b))
print("division:",round((a/b),2))
print("floor:",(a//b))
print("remainder:",(a%b))
print("power:",(a**b))