# HTML and CSS Notes
Kevin Cartwright

* Selector
http://stackoverflow.com/questions/1204275/what-does-an-asterisk-do-in-a-css-selector
	Grabs all of the elements within that selector..

:before, :after
http://stackoverflow.com/questions/32805670/what-does-before-and-after-do-in-css
	Puts CSS rules BEFORE and AFTER content of a given selector.

Guide to CSS Flexbox
https://css-tricks.com/snippets/css/a-guide-to-flexbox/


## Summer of Tech Notes - HTML & CSS 101
HTML and CSS 101 - 30/05/2017
Jen Zajac (#jenofdoom)

These are Kevin Cartwright's Notes

Regular, Regular Italic, Bold, and Bold Italic. Good font sets need at least these.

## SASS and CSS Pre-processors
Allow us to use new features without worrying about browser standards
Functions, Loops etc.
Requires an extra step to implement (compiling)
Autoprefixer allows you to skip a lot of work..
SCSS, LESS other standards
node-sass *** Check it out!!

## Some nice features of SCSS
Nested selectors
Partial imports (see lesson code for links)
@extend
@mixin

## Mobile First, Responsive Design
Roughly 70% of traffic is mobile now
@media queries are useful for setting breakpoints
'#{}' to use variables in SCSS
Remember also to set a max-with, to prevent overflowing text on larger monitors!

## Advanced selectors
'&:last-child' grabs the last of a selected set of elements
'[data-attribute]' selector, grabs data- attributed elements.
  !Can select [any attribute!]
'::before', '::after' pseudo elements

## Flexbox
Starts out with 'display: flex;'
Starts as inline block, then allows you to adjust the relationships
Flexbox Froggy, game to learn flexbox

## CSS Grid
boston.com a good example of CSS grid
Columns and Rows, with control over how they flow
