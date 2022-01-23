Hey **Interns** @cohort-05, this is a summary of what you will be working on during your 1 month internship in Codi.Tech - department of PHP.

> During your internship you will be learning about PHP while creating a financial app that will be developed in PHP as backend for the rest API plus with a PWA as front end ( You can use either React.js, VueJs or Angular ( ! AngularJS :) ).

> In the PHP department we have a communication policy, the policy contain the following rules:
a) - From 8:45 am to 3:00 pm : Interns can only communicate with employees using a digital channel (discord) which mean that communication with employee using a direct channel ( face to face ) is not allowed.
b) - From 3:01 pm to 5:00 pm : Interns can communicate with employees using direct channel (face to face) or using a digital channel (discord)
c) - Exceptions can be applied, Intern can request a consultation request on the `#php-consult` channel by just sending a message containing the problem after that an employee would check the message and set a time for the consulting session.

> In the first week, all the questions related to Apache / Nginx / Mysql will not be answered unless there was time. 
During the first week you **JUST** **JUST** **JUST** need php in the terminal so please don't install XAMP/LAMP/AMPPS or any alternative.

> If you already have the above its ok if they are running other wise please format your laptops: ** YES Format ** Not time to solve configuration errors.

## Project Specifications

### Backend

For the backend you will be developing 2 version:

- The first version will use php scripting without using a framework ( sort like express  but not 100% ) 
- The second version will be using Laravel

### Frontend

For the frontend you can use any PWA that you are familiar with.
PWA: Progressive Web App exp: React, Angular, VueJs, Electron, Flutter ...

Note: We will be using React.

### DB Schema

We will use mysql with an online and free service from [Remote MySQL](https://remotemysql.com/)

You are free to download mysql/mariadb on your local environment but we will not be responsible if errors happened !!!.

### Users stories

User stories should be created from the client brief hosted on [Codi GitBook Financial Tracker](https://codi.gitbook.io/docs/04_challenges/financialtracker)

### Wire framing

Digital wire framing aren't accepted, only use papers and pen

## Backend

### Backend Version 1

The first version of the backend will consist of the following methodology

- The project should follow the MVC pattern
  - A model (M) file for each table to just communicate with the DB
  - A controller (C) file for each feature/table to handle the communication between the routes and the database
  - A route system (V) 
 

## Schedule

- Before Starting
  - Watching / Reading online tutorial on PHP
- First week of intensive PHP and it will be like prairie where you will be using keys, will talk on the keys system in a next step
  - PHP Basic 0
  - PHP Basic 1
  - PHP Basic 2
  - PHP Basic 3
  - Introducing the financial application
  - Building a **Relational Database Schema** per team
  - Introducing the RESTFull
    - [Rest API Heavy docs](https://restdb.io/docs/rest-api)
    - [Rest API Tips](https://www.kennethlange.com/7-tips-for-designing-a-better-rest-api/)

- Second week
  - Building the DB Models using PDO
  - Building the Controllers
  - Building the Middleware ( Authentication )
  - Using PHP built in routing, one php file for each API routes

- Third week
  - Introducing composer
  - Changing the routing system to follow the RESTFULL way
  - Going on Laravel structure
  - Introducing PHP artisan in Laravel
  - Creating a small TODO app using Laravel
  - Documentation using Laravel
- Last week
  - Transferring the financial app into Laravel
  - Creating the Financial app database using Laravel way (building migration)
  - Creating the DB models
  - Creating the controllers under Laravel
  - Building the authentication system using Laravel
