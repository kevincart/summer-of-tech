# SQL Further Learning Notes
18/07/2017
These are Kevin Cartwright's SQL Notes.
From Lynda.com SQL Essential Training

## Commenting SQL
`SELECT * FROM table --this is an SQL comment`
Standard one-line comment for SQL
`/*
  this is a
  multi-line
  comment
*/`
C-Style multi-line comment, not supported by all SQL systems.

## Multi Clause Statements
`SELECT * FROM Album WHERE Label = 'Columbia';`
FROM specifies Table, WHERE specifies condition for each selected row.

## SQL Functions
Used to perform specific operations on data.
`SELECT COUNT(*) FROM Album WHERE Label = 'Columbia';`
COUNT() function is used to find data matching condition in WHERE clause.

## Expressions
Used in SQL to derive values from data.
`SELECT Name, Population / 1000000 AS PopMM
  FROM Country
  WHERE Population >= 1000000
  ORDER BY Population DESC;`
