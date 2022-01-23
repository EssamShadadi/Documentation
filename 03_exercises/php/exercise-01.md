# Exercise-01

* Fork the php-exercise-01 to your account.
* Do all exercises and push them.

## Part 1: Registration 25x🔑

We will be creating registration and login process for a website.

1. Create 2 pages:  a. Registration and Login Page. \(home.php\)  b. Logged in Page \(safe.php\) 
2. The first page should be split in half. The left side is where a user registers, whereas the right side is where the user logs in. Go crazy with the design as the really good ones will get bonus keys
3. Registration fields:  a. Full Name  b. Username  c. Password  d. Confirm Password  e. Email  f. Phone  g. Date of Birth  h. Social Security Number 
4. Login Fields:  a. Username  b. Password 
5. On submit all data must be displayed in a nice ordered way. All input must be validated \(For full keys use backend validation\). This might include a validation of whether the user exists.

## Part 2: Income Tax Calculator 35x🔑

In this exercise we will be creating an income tax calculator. Your task will be to provide an interface for an employee to calculate their salary post income tax.

To do so you must have the following:

1. A form containing the following fields:  a. Salary in USD   b. Radio button with 2 options: Yearly or monthly.   c. Tax Free Allowance in USD  
2. The results should be shown in a tabular format and should include:   a. Two columns: monthly and yearly   b. The following rows:
   * Total salary
   * Tax amount
   * Social security fee
   * Salary after tax  

Rules:  
 1. All the fields are required.   
 2. When you choose monthly or yearly the calculation must adjust accordingly   
 3. Tax free allowance must be added to salary after tax. 4. A social security fee worth 4% of the salary is deducted from salary for anyone with salary &gt; 10,000$.  
 5. The site must be extremely user friendly and looks good. You will receive extra keys for your creativity.  
 6. Bonus 5x🔑 if you stay in the same page on submit and maintain the inputs in their respective input fields. 7. There are some salary ranges that will affect the percentage of the tax. Below is the list of yearly salaries and their taxes.

* salary &lt; 10,000$ -&gt; 0% tax
* 10,000$ &lt; salary &lt; 25,000$ -&gt; 11% Tax
* 25,000$ &lt; salary &lt; 50,000$ -&gt; 30% tax
* salary &gt; 50,000$ -&gt; 45% tax

## Part 3: Palindrome 5x🔑

Write a function that takes a string as a parameter and returns true if the string is a palindrome and false otherwise. A string is considered a palindrome if it has the same sequence of letters when reversed \(for example, "radar", "mom", "a", ""\).

* Function input should be from the query string.
* Your function should be case insensitive.

## Part 4: Multidimensional Arrays 10x🔑

You have the following array:

```text
Array ( [musicals] => Array ( [0] => Oklahoma [1] => The Music Man [2] => South Pacific ) [dramas] => Array ( [0] => Lawrence of Arabia [1] => To Kill a Mockingbird [2] => Casablanca ) [mysteries] => Array ( [0] => The Maltese Falcon [1] => Rear Window [2] => North by Northwest ) )
```

Create the multidimensional array from it and then print it out as follows \(exact same\):

```text
MUSICALS
----> 0 = Oklahoma
----> 1 = The Music Man
----> 2 = South Pacific
DRAMAS
----> 0 = Lawrence of Arabia
----> 1 = To Kill a Mockingbird
----> 2 = Casablanca
MYSTERIES
----> 0 = The Maltese Falcon
----> 1 = Rear Window
----> 2 = North by Northwest
```

Once you are done, sort the array in decreasing order by genre.

