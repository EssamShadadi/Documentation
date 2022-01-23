SELECT Name FROM students;
SELECT * FROM students WHERE age >30;
SELECT Name FROM students WHERE age=30 AND Gender = "F";
SELECT Points FROM students WHERE Name = "Alex";
INSERT INTO students VALUES (7,"Essam",33, "M",500);
UPDATE students set Points = Points+100 WHERE Name = "Basma";
UPDATE students set Points = Points-100 WHERE Name = "Alex";
CREATE TABLE graduates (
ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
Name TEXT NOT NULL UNIQUE,
Age INTEGER,
Gender TEXT,
Points INTEGER,
Graduation TEXT);
INSERT INTO graduates (ID, Name, Age, Gender, Points) SELECT * FROM students Where Name = "Layal";
UPDATE graduates SET Graduation = "08/09/2018" Where Name = "Layal";
DELETE FROM students WHERE Name = "Layal";
CREATE TEMP TABLE employeeCompanies AS
 SELECT
	 employees.Name AS EmpName, 
	 companies.Name AS Company, 
	 companies.Date AS Date 
 FROM employees
JOIN  companies on companies.Name = employees.Company;
SELECT EmpName FROM employeeCompanies WHERE date< 2000;
SELECT Company FROM employees WHERE Role = "Graphic Designer";
SELECT Name from students WHERE Points =( SELECT MAX(Points) FROM students);
SELECT AVG(Points) FROM students;
SELECT COUNT(*) FROM students WHERE Points= 500;
SELECT Name from students where Name LIKE '%s%';
SELECT * from students ORDER BY Points DESC;
