# Grocery store checkout counter - Coding Challenge

Implement a program that calculates the total price of a group of products scanned at the checkout counter of a grocery store. Following the agile development methodology, implement user stories one-by-one as detailed below.
No user interface required, only automated functional tests, which can be implemented for example using mocha & chai. There’s no need to store the data in any persistent storage, we’re only interested in the program logic and structure.

## TODO

1 - Calculate price of products sold by piece


Some products are sold by piece, for example a bag of chips costs 35 pesos. Here’s the user story:

As a seller
I want to scan a product sold by piece
So that the total price is updated

Given I have started the checkout counter \
When I add a $product \
Then $totalPrice is updated


2 - Calculate price of products sold in bulk

Other products are sold in bulk, for example 1 kg of rice costs 45 pesos and the customer can put an arbitrary amount in a bag that will be weighed at the checkout counter.

As a seller
I want to scan a product sold in bulk
So that the total price is updated

Given I have started the checkout counter \
When I add a $product with a $weight \
Then $totalPrice is updated

3 - Calculate price of products on sale

In addition, some products might be on special sales promotions of the type “buy one, get one free” or “buy two, get one free”.

As a seller I want to scan a product on sale so that the total price is updated

Given I have started the checkout counter with a list of $salesPromotions \
When I add a $product \
Then $totalPrice is updated

4 - Print receipt

The program should accept products in any order. \
A receipt should be “printed” for the customer. Simple text format will do, just display it on the screen.

As a seller \
I want to scan a group of products \
So that the total price is calculated

## Testing Project

    $ npm run test


## Testing Result

```
1. Calculate price of products sold by piece  
- Add one "A" Product(piece)
****************      Receipt     ****************

Name    Price     Count     Total                 
A       30        1          30

Total Price:  30

*****************     End     ********************

- Add one "A" Product(piece)
- Add two "B" Product(piece)
****************      Receipt     ****************

Name    Price     Count     Total                 
A       30        1          30                   
B       20        2          40

Total Price:  70

*****************     End     ********************

2. Calculate price of products sold in bulk   

- Add 1.5 "C" Product(bulk)
****************      Receipt     ****************

Name    Price     Count     Total
C       20        1.5          30

Total Price:  30

*****************     End     ********************

- Add 1.5 "C" Product(bulk)
- Add 2.5 "D" Product(bulk)
****************      Receipt     ****************

Name    Price     Count     Total
C       20        1.5          30
D       10        2.5          25

Total Price:  55

*****************     End     ********************

3. Calculate price of products on sale

- Add 4 "E" Product(buy one, get one free)
****************      Receipt     ****************

Name    Price     Count     Total
E       20        4(free: 2) 40

Total Price:  40

*****************     End     ********************

- Add 4 "E" Product(buy one, get one free)
- Add 4 "F" Product(buy two, get one free)
****************      Receipt     ****************

Name    Price     Count     Total
E       20        4(free: 2) 40
F       10        4(free: 1) 30

Total Price:  70

*****************     End     ********************

4. Calculate price of products on any order
- Add 5 "E" Product(buy one, get one free)
- Add 2 "B" Product(piece)
- Add 7 "F" Product(buy two, get one free)
- Add 1.2 "D" Product(bulk)

****************      Receipt     ****************

Name    Price     Count     Total
E       20        5(free: 2) 60
B       20        2          40
F       10        7(free: 2) 50
D       10        1.2          12

Total Price:  162

*****************     End     ********************
```
