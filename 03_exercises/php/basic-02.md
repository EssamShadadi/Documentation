# Basics-02

* Get to your submission folder under exercises/php-basics-01
* You should create a PHP file for each step with the name of the step.

> e.g : Step\_1.php

* COMMIT AFTER EACH STEP, call each commit by the name of the step

## References

* [https://www.codecademy.com/courses/learn-php](https://www.codecademy.com/courses/learn-php)
* [https://phptherightway.com/](https://phptherightway.com/)
* [https://www.sololearn.com/Course/PHP/](https://www.sololearn.com/Course/PHP/)

## Goals

* Learn general basic programming syntax as applied to PHP
* **Competencies**:
  * Echo
  * Functions
  * Variables
  * PHP Built in functions

## Step 1

> Write a PHP script to display the following strings.
>
> **You can only use Echo or Print.**

Expected Output :

```text
Tomorrow I 'll learn PHP global variables.
This is a bad command: sudo rm -rf /
```

> > ...

## Step 2

> Write a PHP function to test whether a number is greater than 30, 20 or 10

**Sample:**

```php
<?php

function greaterFn($num){
  // ...
  return 'string';
}
greaterFn(40); // 40 is greater than 30
greaterFn(21); // 21 is greater than 20
greaterFn(12); // 12 is greater than 10
greaterFn(8);  // 8 is less than 10
```

> >

## Step 3

> Write a PHP program to swap two variables.

Example:

```php
$var1 = 32;
$var2 = 45;
```

...

```php
$var1; // 45
$var2; // 32
```

> > ...

## Step 4

> Write a PHP program to check whether a number is an Armstrong number or not. Return true if the number is Armstrong otherwise return false.

In PHP a double star \(  **\) is an** Exponentiation **operator, 2 ^ 5 === 2**  5 \| 2 ^ 2 === 2 \*\* 2

> Note: An Armstrong number of three digits is an integer so that the sum of the cubes of its digits is equal to the number itself.
>
> For example, 153 is an Armstrong number since 1  **3 + 5**  3 + 3 \*\* 3 = 153
>
> > ...

## Step 5

> Write a PHP program\(function\) to convert word to digit. Use switch case.

```text
Input: zero
Output: 0

Input one
Output 1

Input: five
Output: 5
```

> > ...

## Step 6

> Write a PHP program to compute the sum of the digits of a number.
>
> Hint: Input $num = '54321'; $num\[0\]; // 5, $num\[3\] // 2
>
> Use `strlen($num)` to get the length of the string
>
> > ...

## Step 7

> Write a PHP program to replace a string "Python" with "PHP" and "Python" with " PHP" in a given string.
>
> Input: English letters \(including single byte alphanumeric characters, blanks, symbols\) are given on one line. The length of the input character string is 1000 or less.
>
> Use [`str_replace`](https://www.php.net/manual/en/function.str-replace.php)
>
> > ...

## Step 8

> Write a PHP program to check whether a given positive integer is a power of two.
>
> Input : 4
>
> Output :4 is power of 2
>
> >

## Step 9

> Write a PHP program to compute and return the square root of a given number.

![Flowchart](../../.gitbook/assets/php-challenges-1-exercise-1.png)

```text
Input: 16
Output: 4
```

> > ...

## Step 10

Write a PHP function that checks whether a passed string is a palindrome or not?

A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run. ![Flowchart](../../.gitbook/assets/php-function-exercise-6.png)

> > Hint use strrev. `strrev("Hello"); // olleH` ...

## Step 11

> Write a function to check whether a number is prime or not.
>
> > Note: A prime number \(or a prime\) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

![flowchart](../../.gitbook/assets/php-function-exercise-2.png)

> > ...

## Hints

* Writing a programme mean that you need to create a function
* Writing a script mean that you aren't required to write a function

