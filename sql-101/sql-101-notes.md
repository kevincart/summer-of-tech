# Summer of Tech Notes - SQL 101
SQL 101 - 01/06/2017

These are Kevin Cartwright's Notes

# SQLLite 101.
From Summer of Tech SQL 101, and Lynda.com 'SQL Essential Training.'

## SELECT Statement:
`SELECT * FROM (statement);`
  - Select all entities from a given table or set.

`SELECT * FROM (statement) ORDER BY (column);`
  - Select all entities, order by column alphabetically;

`SELECT (Columns, columns...) AS (Specify display name of column) FROM ...`
  - Select specific columns.
  - Specify display names with AS.

`SELECT (Expression);`
  - You don't need to actually specify a source, and can do queries on expressions.
  - i.e. SELECT 1 + 2; -> 1 + 2, 3.

`SELECT COUNT( selector, like * ) FROM Country;`
  - Return number of entities that match a given selector.

### INSERT Statement:
`INSERT`
  - Add data to a given table or set of entities.

### UPDATE Statement:
`UPDATE`
  - Change data for a given table or set of entities.

### DELETE Statement:
`DELETE`
  - Delete data from a given table or set of entities.

## Selecting Rows:
`SELECT Name, Continent, Region FROM Country;`
  - Returns many rows, so to refine this we use:

`SELECT Name, Continent, Region FROM Country WHERE Continent = 'Europe';`
  - Greater Specificity

### WHERE Clause:
Uses condition to determine which rows to return.
= is equivalence condition.

### LIMIT Clause:
Gives a limit on number of rows to be returned:
`SELECT Name, Continent, Region FROM Country WHERE Continent = 'Europe'` LIMIT 5;

## Selecting Columns
`SELECT * FROM Country ORDER BY Code LIMIT 5;` (All columns)
`SELECT Name, Code, Region, Population FROM Country ORDER BY Code LIMIT 5;`
`SELECT Name AS Country, Code AS ISO, Region, Population AS Pop FROM;` `Country ORDER BY Code LIMIT 5;` (Rename given columns) [AS is optional...]

## Counting Rows
`SELECT COUNT(*) FROM Country;` [239]
`SELECT COUNT(*) FROM Country WHERE Population > 1000000;` [154]
`SELECT COUNT(*) FROM Country WHERE Population > 100000000 AND Continent = 'Europe';` [1]

## Inserting Data
`INSERT INTO Customer ( name, address, city, state, zip ) VALUES ( 'Fred Flintstone', '123 Cobblestone Way', 'Bedrock', 'CA', '91234' );`
`SELECT * FROM Customer;`
This adds a new row with the specified information. In this case, it receives a new ID, and the select statement returns all the rows from the table in order of ID.
`INSERT INTO Customer ( name, city, state ) VALUES ( 'Jimi Hendrix', 'Renton', 'WA' );`
`SELECT * FROM Customer;`
This adds a new row of information, but address and zip are returned on select as NULL.

## NULL
Special value in SQL. Lack of data (not a string or value).
Can be prevented by creating default values in a table.

## Updating Data
`UPDATE Customer SET Address = '2603 Washington St', Zip = '98056' WHERE id = 5;`
`SELECT * FROM Customer;`
Updates the specified column/row combinations with data.
Also possible to update a value with NULL. (No quotes).

## Deleting Data
`SELECT * FROM Customer WHERE id = 4;`
Good practice to select values before deleting them.
`DELETE FROM Customer WHERE id = 4;`
`SELECT * FROM Customer;`
