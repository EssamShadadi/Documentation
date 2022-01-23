# Basics-04

This is an example of _TDD_ or [Test Driven Development](https://en.wikipedia.org/wiki/Test-driven_development).

Test Driven Development aims to write a _specification_ in the form of tests, **before** writing any code. Once the tests are written, the code is produced in such a way that they conform to the spec.

You will find a series of test which, originally, do not work. The tests are checking functions that are entirely empty, so naturally, the tests fail. Your job is to make each function pass its test, until there are no failures anymore.

3 files are of importance to you:

* `./questions.js`: this is the file containing the functions. You will be working in this file, and this file _only_
* `./questions.spec.js`: this is the testing file. You may open it to read how the tests are written, but do not change it
* `./SpecRunner.html`: this runs the tests in te browser. Open it in Chromium/Firefox to see the tests results.

## Goals:

* Practice a bit of mock-up TDD
* Practice Javascript basics
* **Competencies**: 
  * TDD experience
  * strings manipulation
  * numbers manipulation
  * arrays manipulation

## Instructions

* Get to your submission folder under the folder exercises/javascript-basics-04
* Run `SpecRunner.html` in your browser
* Open `questions.spec.js` in your editor
* Look at the first test in `questions.spec.js`, which begins with `describe('stringSize', () => { ...`. Try to understand what it does
* Open `questions.js`, and look at the first function, `const stringSize = (text) => {...`. Fill the function such as the test passes
* Refresh `specRunner.html` in your browser \(f5 or ctrl+r\)
* You should see the first red mark become a green mark, which means the first test is passing. If it does, congrats! Go to the next test. If it doesn't, keep trying
* Once you get to the `createLanguagesArray` function, commit  
* When you're done, submit a pull request  

