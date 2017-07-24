# SQLLite Further Learning Notes
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

### Additional Notes about SQLLite and SQL in general
"SQLite reads small blobs (for example, thumbnail images) 35% faster¹ than the same blobs can be read from or written to individual files on disk using fread() or fwrite().

Furthermore, a single SQLite database holding 10-kilobyte blobs uses about 20% less disk space than storing the blobs in individual files.

The performance difference arises (we believe) because when working from an SQLite database, the open() and close() system calls are invoked only once, whereas open() and close() are invoked once for each blob when using blobs stored in individual files. It appears that the overhead of calling open() and close() is greater than the overhead of using the database. The size reduction arises from the fact that individual files are padded out to the next multiple of the filesystem block size, whereas the blobs are packed more tightly into an SQLite database.

The measurements in this article were made during the week of 2017-06-05 using a version of SQLite in between 3.19.2 and 3.20.0. You may expect future versions of SQLite to perform even better."
- Intersting tidbit, it would seem that SQL is faster than a similar transfer using a traditional file system...
SOURCE: https://www.sqlite.org/fasterthanfs.html
