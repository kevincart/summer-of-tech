# Javascript Notes - Javascript 101
Javascript 101 - 24/07/2017

These notes are from my own personal learning, and are drawn from listed sources.

Kevin can be reached at
- Kevincart@gmail.com
- www.github.com/kevincart

# Code Notes

- Javscript is the programming language of the web
- Many web-enabled applications rely heavily on JS
- Philosophically derived from C / C++, with influences from many other languages.
- Dynamic, Interpreted language.

## Code Examples
~~~~
var hi = "welcome to Javascipt 101";
console.log(hi);
~~~~

## Personal Notes
These are my personal JS notes:

http://www.w3resource.com/javascript-exercises/

Angular CLI, new Angular project: https://github.com/angular/angular-cli

Chrome dev tools NOTES:
	-June 2017 NEW FEATURES:
		-Request Blocking. Allows you to block requests, to simulate resource failures.
		-Coverage: See how much CSS and JS code a particular page is using.
		-Async await step over.
		-http://rion.io/2017/06/21/updated-chrome-debugging-tools-worth-mentioning/

’Break on’ element. Pauses page load and starts debugger on the calling javascript. Good way to diagnose dynamic behavior on the page..

---

Good video about ‘this’ for implicit and explicit bindings, includes primer on .call() , .apply() , and .bind() function methods…
https://youtu.be/zE9iro4r918


---

Closures.
http://stackoverflow.com/questions/111102/how-do-javascript-closures-work
https://en.wikipedia.org/wiki/First-class_function
http://www.crockford.com/javascript/private.html

  `function Container(param) {  
    function dec() {
      if (secret > 0) {
        secret -= 1;
        return true;
      } else {
        return false;
      }
    }

    this.member = param;
    var secret = 3;
    var that = this;

    this.service = function() {
      return dec() ? that.member : null;
    };
  }`

  var myContainer = new Container('abc');

  console.log(myContainer.service()); // “abc”
  console.log(myContainer.service()); // “abc”
  console.log(myContainer.service()); // “abc”
  console.log(myContainer.service()); // null

http://nathansjslessons.appspot.com/
	Awesome site with lessons and interactive exercises!

Functional Programming with JS

Good writeup on touch events

https://trackchanges.postlight.com/modern-javascript-for-ancient-web-developers-58e7cae050f9#.o5r0iigxh

http://youmightnotneedjquery.com/ - Phenomenal jQuery Reference!!!
