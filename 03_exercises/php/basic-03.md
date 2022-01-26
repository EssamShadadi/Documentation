# Basics-03

* Get to your submission folder under exercises/php-basics-01
* You should create a PHP file for each step with the name of the step.

  > e.g : Step\_1.php

* COMMIT AFTER EACH STEP, call each commit by the name of the step

## References

* [https://www.codecademy.com/courses/learn-php](https://www.codecademy.com/courses/learn-php)
* [https://phptherightway.com/](https://phptherightway.com/)
* [https://www.sololearn.com/Course/PHP/](https://www.sololearn.com/Course/PHP/)

## Goals:

* Learn general basic programming syntax as applied to PHP
* **Competencies**: 
  * While loop
  * For loop
  * Functions
  * Variables
  * PHP Built in functions

## While loop

Suppose you want to calculate gross salaries of 20 different persons or take a list of maximum and minimum temperatures of a certain month or a year, the while loop is ideal to solve these types of cases.

The while statement is simple, it executes the statement\(s\) repeatedly as long as the condition is true. The condition is checked every time at the beginning of the loop.

> Flowchart

![While Loop flowchart](../../.gitbook/assets/while-loop.jpg)

### Syntax

```text
while ( condition is true )
execute this statement ;
The general form of while statement :
        initialize loop counter;
while (test loop counter using condition)
{
execute the statement
....... 
.......
.......
increment loop counter
}
```

### Example

The following example print "Increment Number" with $x1 value as well as "Hello world" five times.

> Code

```php
<?php
$x1=1;
while ($x1<=5)
{
echo "Increment Number : $x1 \n";
echo "Hello World \n";
$x1=$x1+1;
}
```

> Output

```text
Increment Number : 1 
Hello World 
Increment Number : 2 
Hello World 
Increment Number : 3 
Hello World 
Increment Number : 4 
Hello World
Increment Number : 5 
Hello World
```

### Ex 1

Write a Program to create given pattern with \* using while loop

> Expected Output

```text
*
**
***
****
*****
******
*******
********
```

### Ex 2

Write a program to calculate factorial of a number using while loop in php.

> Input: 3 // 3  _2_  1 Output: 6
>
> Input: 6 // 6  _5_  4  _3_  2 \* 1 Output: 720

### Ex 3

Using while loop write a programme that count number of times a word present in a sentence.

The programme should take as argument the `text` and the `word` to be searched for

> Hint use \`explode\(" ", $text\); // explode function looks for " " and creates an array, where each word is an element of the array
>
> Hint use `count` function to get the number of **iterations/repetitions**

## For

The PHP for loop allows the user to put all the loop-related statements \(i.e. INITIALIZER; CONDITION; INCREMENTOR or DECREMENTOR\) in one place. The structure is similar to JS language.

> Flowchart

![For Loop flowchart](../../.gitbook/assets/for-loop.jpg)

### Syntax

```text
for ( initialize counter ; test counter ; increment counter)
{
execute the statement;
}
```

* initialize counter : Initialize the loop counter value.
* test counter : Verify the loop counter whether the condition is true.
* increment counter : Increasing the loop counter value.
* execute the statement : Execute php statements.

Alternatively, you can write for loop statement using the following syntax also.

```text
for (expr1; expr2; expr3):
statement
...
endfor;
```

### Example

> The following example displays the numbers between 0 to 5.

```php
<?php
for ($xint=0; $xint<=5; $xint++)
{
echo "Number is : $xint \n";
}
?>
```

> > Output

```text
Number is : 0 
Number is : 1 
Number is : 2 
Number is : 3 
Number is : 4
Number is : 5
```

> Counting number of times a word present in a sentence.

```php
<?php
$text="The quick brown Fox jumps over the lazy Dog";
$words = explode(" ", $text); // explode function looks for " " and creates an array, where each word is an element of the array
$now = count($words);
$j = 0;
for($i=0; $i<$now; $i++)
{
if ($words[$i] == "the" or $words[$i] == "The")
{
$j =  $j+1;
}
}
echo $j;
?>
```

> > Output

```text
2
```

### Ex 1

Write a PHP program to compute the sum of the digits of a number.

> Hint: strlen fn to get the length of a string
>
> Hint: $word= "hello world"; $word\[0\] // h, $word\[strlen\($word\) - 1\]; // d
>
> Extra Hint [Click me if you get stuck](https://github.com/coditech/Documentation/tree/48c0bf3a27cfe19e399a3c6936cebcd010d7f58e/03_Exercises/06_PHP/images/php-basic-exercise-flowchart-for-1.png)

**Example Input:** 12345 **Example Output:** 15

**Example Input:** 9999 **Example Output:** 36

### Ex 2 \(Optional bit advanced\)

Write a PHP program which reads the two adjoined sides and the diagonal of a parallelogram and check whether the parallelogram is a rectangle or a rhombus.

According to Wikipedia-parallelograms: In Euclidean geometry, a parallelogram is a simple \(non-self-intersecting\) quadrilateral with two pairs of parallel sides. The opposite or facing sides of a parallelogram are of equal length and the opposite angles of a parallelogram are of equal measure. rectangles: In Euclidean plane geometry, a rectangle is a quadrilateral with four right angles. It can also be defined as an equiangular quadrilateral, since equiangular means that all of its angles are equal \(360°/4 = 90°\). It can also be defined as a parallelogram containing a right angle. rhombus: In plane Euclidean geometry, a rhombus \(plural rhombi or rhombuses\) is a simple \(non-self-intersecting\) quadrilateral whose four sides all have the same length. Another name is equilateral quadrilateral, since equilateral means that all of its sides are equal in length. The rhombus is often called a diamond, after the diamonds suit in playing cards which resembles the projection of an octahedral diamond, or a lozenge, though the former sometimes refers specifically to a rhombus with a 60° angle \(see Polyiamond\), and the latter sometimes refers specifically to a rhombus with a 45° angle.

~~_OK I got you read the flowchart and apply it_~~ ![PHP For Ex 2 flowchart](../../.gitbook/assets/php-basic-exercise-flowchart-for-2.png)

### Ex 3

Create a script to construct the following pattern, using a nested for loop.

```text
* 
* * 
* * * 
* * * * 
* * * * * 
* * * * * 
* * * * 
* * * 
* * 
*
```

> Hint there is an repetition in the above exercise, check the middle and what is the difference between the mid upper and mid lower
>
> Hint 2: if you are stuck check this flowchart here but remember you already made something similar in one of the above exercises
>
> Hint 3: Don't forget to output the space and for new line use `echo PHP_EOL;`

[Click me if you are stuck](https://github.com/coditech/Documentation/tree/48c0bf3a27cfe19e399a3c6936cebcd010d7f58e/03_Exercises/06_PHP/images/php-basic-exercise-flowchart-for-3.png)

### Ex 4

Write a PHP program to print alphabet pattern 'Z'. Go to the editor Expected Output:

```text
*******                                                     
 *                                                      
  *                                                       
   *                                                        
    *                                                         
     *                                                          
*******
```

> HINT: The lucky 7 hint, the figure contains 7 lines and first and last line have 7 starts
>
> HINT: You will be writing 2 nested loop, each have a counter that would go from 0 to 6
>
> HINT: Don't forget to output the space and for new line use `echo PHP_EOL;`
>
> ### Ex 5

Using a for loop write a PHP programme to reverse a sentence. Without using built in functions

## For Each

PHP 4 introduced "foreach" construct, it works only on arrays. The foreach looping is the best way to access each key/value pair from an array.

### Syntax

```text
foreach (array_expr as $value)
{
statement
}
```

**array\_expr** is an array. In every loop the value of the current element of the array is assigned to $value and the internal array pointer is advanced by one and the process continue to reach the last array element.

```text
foreach (array_expr as $key => $value)
{

statement

}
```

**array\_expr** is an array.  In **every loop** the current **element's key** is assigned to **$key** and the internal array pointer is advanced by one and the process continue to reach the last array element.

### Example -1

In the following example, we define an array with five elements and later we use foreach to access array element's value.

```php
<?php
$fruits = array ("Orange", "Apple", "Banana",  "Cherry", " Mango");
foreach ( $fruits as $value )
{
echo  "$value\n";
} 
?>
```

> Output

```text
Orange
Apple
Banana
Cherry
Mango
```

### Example -2

In the following example, both the **keys** and **values** of an array have accessed \(see the second syntax of the foreach statement\).

```php
<?php
$personal_details=array("name" => "Rajesh Rao", "occupation" => "Engineer", age => 39, "country" => "India");
foreach ( $personal_details as $key => $value )
{
echo "$key=$value\n";
}
?>
```

> Output
>
> ```text
> name=Rajesh Rao
> occupation=Engineer
> age=39
> country=India
> ```

### Ex 1

You have an array of transactions, each of which has a debit and credit amount. Find the absolute value of the transaction amount \(i.e. abs\( debit - credit \)\) and output the transaction amount

Data

```php
<?php

$transactions = array(
    array(
        "id" => 1,
        "debit"=>2,
        "credit"=>3
    ),
    array(
        "id" => 2,
        "debit"=>15,
        "credit"=>10
    )
);
```

Simple Output

```text
ID: 1 => amount: 1
ID: 2 => amount: 5
```

### Ex 1

You have an array of users, each of which has a name, email and and id. On each row, Output the data available in the array

Data

```php
<?php

$transactions = array(
    array(
        "id" => 1,
        "name"=> "Gaby",
        "email"=> "gaby@codi.tech"
    ),
    array(
       "id" => 3,
       "name"=> "Omar",
       "email"=> "omar@codi.tech"
    )
);
```

Simple Output

```text
id: 1, name: Gaby, email: gaby@codi.tech
id: 2, name: Omar, email: omar@codi.tech
```

## PHP Functions

A function is a self-contained block of code that performs a specific task.

PHP has a huge collection of internal or built-in functions that you can call directly within your PHP scripts to perform a specific task, like `gettype()`, `print_r()`, \`var\_dump, etc.

### PHP User-Defined Functions

In addition to the built-in functions, PHP also allows you to define your own functions. It is a way to create reusable code packages that perform specific tasks and can be kept and maintained separately form main program. Here are some advantages of using functions:

* Functions reduces the repetition of code within a program
* Functions makes the code much easier to maintain
* Functions makes it easier to eliminate the errors 
* Functions can be reused in other application

### Creating and Invoking Functions

The basic syntax of creating a custom function can be give with:

```php
<?php
function functionName(){
    // Code to be executed
}
```

> The declaration of a user-defined `function` start with the word function, followed by the name of the function you want to create followed by parentheses i.e. `()` and finally place your function's code between curly brackets `{}`.
>
> > Example:
> >
> > ```php
> > <?php
> > // Defining function
> > function whatIsToday(){
> >     echo "Today is " . date('l', time());
> > }
> > // Calling function
> > whatIsToday(); // Today is Monday
> > ?>
> > ```

### Functions with Parameters

You can specify parameters when you define your function to accept input values at run time. The parameters work like placeholder variables within a function; they're replaced at run time by the values \(known as argument\) provided to the function at the time of invocation.

```php
<?php
function myFunc($oneParameter, $anotherParameter){
    // Code to be executed
}
```

You can define as many parameters as you like. However for each parameter you specify, a corresponding argument needs to be passed to the function when it is called.

The `getSum()` function in following example takes two integer values as arguments, simply add them together and then display the result in the browser.

```php
<?php
// Defining function
function getSum($num1, $num2){
  $sum = $num1 + $num2;
  echo "Sum of the two numbers $num1 and $num2 is : $sum";
}

// Calling function
getSum(10, 20);
?>
```

### Functions with Optional Parameters and Default Values

You can also create functions with optional parameters — just insert the parameter name, followed by an equals `=` sign, followed by a default value, like this.

```php
<?php
// Defining function
function customFont($font, $size=1.5){
    echo "<p style=\"font-family: $font; font-size: {$size}em;\">Hello, world!</p>";
}

// Calling function
customFont("Arial", 2);
customFont("Times", 3);
customFont("Courier");
?>
```

As you can see the third call to `customFont()` doesn't include the second argument. This causes PHP engine to use the default value for the $size parameter which is 1.5.

### Returning Values from a Function

A function can return a value back to the script that called the function using the return statement. The value may be of any type, including arrays and objects.

```php
<?php
// Defining function
function getSum($num1, $num2){
    $total = $num1 + $num2;
    return $total;
}

// Printing returned value
echo getSum(5, 10); // Outputs: 15
?>
```

> A function can not return multiple values. However, you can obtain similar results by returning an array, as demonstrated in the following example.

```php
<?php
// Defining function
function divideNumbers($dividend, $divisor){
    $quotient = $dividend / $divisor;
    $array = array($dividend, $divisor, $quotient);
    return $array;
}

// Assign variables as if they were an array
list($dividend, $divisor, $quotient) = divideNumbers(10, 2);
echo $dividend;  // Outputs: 10
echo $divisor;   // Outputs: 2
echo $quotient;  // Outputs: 5
?>
```

### Understanding the Variable Scope

However, you can declare the variables anywhere in a PHP script. But, the location of the declaration determines the extent of a variable's visibility within the PHP program i.e. where the variable can be used or accessed. This accessibility is known as variable scope.

By default, variables declared within a function are local and they cannot be viewed or manipulated from outside of that function, as demonstrated in the example below:

```php
<?php
// Defining function
function test(){
    $greet = "Hello World!";
    echo $greet;
}

test(); // Outputs: Hello World!

echo $greet; // Generate undefined variable error
?>
```

> Similarly, if you try to access or import an outside variable inside the function, you'll get an undefined variable error, as shown in the following example:

```php
<?php
$greet = "Hello World!";

// Defining function
function test(){
    echo $greet;
}

test();  // Generate undefined variable error

echo $greet; // Outputs: Hello World!
?>
```

> As you can see in the above examples the variable declared inside the function is not accessible from outside, likewise the variable declared outside of the function is not accessible inside of the function. This separation reduces the chances of variables within a function getting affected by the variables in the main program.

### Exercises

## Exercise 1

Change the following code to take the `$personal_details` as a function argument, and we should have the same output as before.

```php
<?php
$personal_details=array("name" => "Rajesh Rao", "occupation" => "Engineer", age => 39, "country" => "India");
foreach ( $personal_details as $key => $value )
{
echo "$key=$value\n";
}
```

## Extra to read about

* [Differences between break & continue in loops](https://www.geeksforgeeks.org/difference-between-break-and-continue-in-php/)

## References

[https://www.tutorialrepublic.com/php-tutorial/php-functions.php](https://www.tutorialrepublic.com/php-tutorial/php-functions.php)

