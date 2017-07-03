# Summer of Tech Notes - SQL 101
SQL 101 - 01/06/2017

These are Kevin Cartwright's Notes

# SQLLite 101.
From Summer of Tech SQL 101, and Lynda.com 'SQL Essential Training.'

## SELECT Statement:
SELECT * FROM (statement);
  - Select all entities from a given table or set.

SELECT * FROM (statement) ORDER BY (column);
  - Select all entities, order by column alphabetically;

SELECT (Columns, columns...) AS (Specify display name of column) FROM ...
  - Select specific columns.
  - Specify display names with AS.

SELECT (Expression);
  - You don't neet to actually specify a source, and can do queries on expressions.
  - i.e. SELECT 1 + 2; -> 1 + 2, 3.

SELECT COUNT( selector, like * ) FROM Country;
  - Return number of entities that match a given selector.

## INSERT Statement:
INSERT
  - Add data to a given table or set of entities.

## UPDATE Statement:
UPDATE
  - Change data for a given table or set of entities.

## DELETE Statement:
DELETE
  - Delete data from a given table or set of entities.
