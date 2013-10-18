Oct18-Kata
==========
October 18, 2013 Code Kata

digits.js contains one method, getMiddleThreeDigits, that when given a valid integer will return the middle three digits as an integer.  If the first of the middle three digits is a 0 (e.g. 021), then it will be omitted (21 will be returned).

To Run
------
clone repo
npm install
npm test

Expected Results of using digits.js
-----------------------------------

getMiddleThreeDigits will throw an exception for
* numbers with less than 3 digits
* numbers with an even number of digits
* numbers that are not integers, including whole numbers
* numbers that are strings or other invalid types
