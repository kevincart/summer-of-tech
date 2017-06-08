How to Update Windows Unix Subsystem:

   $ xupdate
   $ sudo apt-get install libxml-xupdate-libxml-perl


===============
SoT UNIX 101 Notes:

Set of small programs which do one thing well, use plain-text, can be easily wired together, turns into a super useful toolkit.

Unix tools have one input stream (stdin), and two output streams:
Stdout - normal output gets sent here
Stderr - error output

The Output of one tool can be connected to the input of another tool via piping

Example: $ who | sort | lpr…

Unix takes care of ‘backpressure’ from differences of dataflow

Editing Text:
	Nano, vim, emacs, ed…

History:
	1985 GNU: Richard Stallman rewrote Unix to create an unlicensed version.
	1991 Gnu + Linux.

Mac OS X - BSD branch of Unix.
	Linux - System V branch of Unix.

	Commercial Unix no longer a thing.

iTerm2.. (Eoin’s Unix CLI client)

-----------

!UNIX Commands:

SED - http://www.grymoire.com/Unix/Sed.html#uh-0 (Special editor for modifying files)
AWK - https://www.tutorialspoint.com/awk/awk_overview.htm (Interpreted programming lang)

GREP - file pattern searcher. Give it a pattern, it will produce outputs.
	-v Things that don’t match

curl [URL] - prints state of web server
jq - JSON parsing
history - displays all of your command history
head - display first lines of file
	head -n [number] - display specific number of lines
tail - display last lines of a file
	tail -n [number] - display specific number of lines
	tail -f - follow a file live as it’s created..
time - how long a process takes
wc - word count of file
uniq - omit duplicate lines
cut -separate on given characters
	cut -d [DELIMITERS]
> - output to file
	[cmd] > [filename] - save a screenshot
file - determine file type
cat [filename] - print file contents (Pipeable!!!)
open [filename] - simple text editor
ls - print directory
-l . - Print directory with info about the files (‘h’ formats file sizes)
WHICH [cmd] - Prints library location to screen
man [cmd] - Manual
pwd - print working directory

PIPING ||| -
	Example: $ cat output.log | grep  -v “Hotel” | grep “Archery” > archery_but_not_hotel.txt

SHELL SCRIPTING -
#!bin/bash (?)
	[filename].sh
	Bash scripting for Unix.
