# OOP in PHP

Object-oriented programming is an approach to programming where objects and classes are used. Now-a-days Java and C++ are mostly used for object-oriented programming. There was limited scope of object-oriented programming in PHP 4, but in PHP 5, the object model was rewritten for better performance and more features. Now PHP 5 has a full object model.

## What is an object?

The fundamental idea behind an object-oriented language is to enclose a bundle of variables and functions into a single unit and keep both variables and functions safe from outside interference and misuse. Such a unit is called object which acts on data. The mechanism that binds together data and functions are called encapsulation. This feature makes it easy to reuse code in various projects. The functions declared in an object provides the way to access the data. The functions of an object are called methods and all the methods of an object have access to variables called properties.

## Class

In object-oriented programming, a class is a construct or prototype from which objects are created. A class defines constituent members which enable class instances to have state and behavior. Data field members enable a class object to maintain state and methods enable a class object's behavior. The following picture shows the components of a class

## PHP: Creating classes and Instantiation

- The class definition starts with the keyword class followed by a class name, then followed by a set of curly braces ({}) which enclose constants, variables (called "properties"), and functions (called "methods") belonging to the class.
- A valid class name (excluding the reserved words) starts with a letter or underscore, followed by any number of letters, numbers, or underscores.
- Class names usually begin with an uppercase letter to distinguish them from other identifiers.
- An instance is an object that has been created from an existing class.
- Creating an object from an existing class is called instantiating the object.
- To create an object out of a class, the new keyword must be used.
Classes should be defined prior to instantiation.

## Example

```php
<?php
class Myclass
{
 // Add property statements here
 // Add the methods here
}
?>
```

> In the following example keyword new is used to instantiate an object. Here $myobj represents an object of the class Myclass.

```php
<?php
$myobj = new MyClass;

?>
```

> Let see the contents of the class Myclass using var_dump() function (display structured information (type and value) about one or more variables):

```php
<?php
class Myclass
{
 // Add property statements here
 // Add the methods here
}
$myobj = new MyClass();
var_dump($myobj);
```

**Output**

>> object(Myclass)#1 (0) { }

>> [View example in the browser](https://www.w3resource.com/php/classes-objects/simple-php-class.php)

## PHP Constructor methods

- The constructor is a special built-in method, added with PHP 5, allows developers to declare for classes.
- Constructors allow to initializing object properties ( i.e. the values of properties) when an object is created.
- Classes which have a constructor method execute automatically when an object is created.
- The 'construct' method starts with two underscores (__).
- The constructor is not required if you don't want to pass any property values or perform any actions when the object is created.
- PHP only ever calls one constructor.

```php
<?php
// Define a class
 class Myclass
 {
    // Declaring three private varaibles
    private $font_size;
    private $font_color;
    private $string_value;

    // Declarte construct method which accepts three parameters
    function __construct($font_size,$font_color,$string_value)
    {
        $this->font_size = $font_size;
        $this->font_color = $font_color;
        $this->string_value = $string_value;
    }

    // Declare a method for customize print
    function customize_print()
    {
        echo "<p style=font-size:".$this->font_size.";color:".$this->font_color.";>".$this->string_value."</p>";
    }
 }

// Create a new object and passes three parameters
 $f = new MyClass('20px','red','Object Oriented Programming');

// Call the method to display the string
 echo $f->customize_print();
 ?>
```


## Exercise 1

> Write a simple PHP class which displays the following string.

>> 'MyClass class has initialized !'

>> Hint use `__construct` method

![flowchart](/03_Exercises/06_PHP/images/php-class-exercise-1.png)

## Exercise 2

> Write a simple PHP class which displays an introductory message like "Hello All, I am Scott", where "Scott" is an argument value of the method within the class.

![flowchart](/03_Exercises/06_PHP/images/php-class-exercise-2.png)

## Exercise 3

> Write a PHP calculator class which will accept two values as arguments, then add them, subtract them, multiply them together, or divide them on request.

>> For example:

```php
$mycalc = new MyCalculator( 12, 6 );
echo $mycalc->multiply(); // 72
echo $mycalc->add(); // 18
```
