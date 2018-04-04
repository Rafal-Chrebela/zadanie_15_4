"use strict";

// Zadanie 1
var firstString = "Hello";
var secondString = "World";
console.log("" + firstString + secondString);

// Zadanie 2
var x = 1;
var y = 2;

var multiply = function multiply(x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return x * y;
};
console.log("" + multiply(x, y));
console.log("" + multiply(2, 6));
console.log("" + multiply(3));

// Zadanie 3
var sum = 0;
var length = 0;
var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  args.forEach(function (arg) {
    return sum = sum + arg;
  });
  return sum = sum / args.length;
};

average(31, 6, 7, 4, 7);
console.log("" + sum);

// Zadanie 4
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
var a = grades[0],
    b = grades[1],
    c = grades[2],
    d = grades[3],
    e = grades[4],
    f = grades[5],
    g = grades[6],
    h = grades[7],
    i = grades[8];

console.log(average(a, b, c, d, e, f, g, h, i));

// Zadanie 5
var names = [1, 4, "Iwona", false, "Nowak"];
var no1 = names[0],
    no2 = names[1],
    fname = names[2],
    thing = names[3],
    lname = names[4];

console.log(fname + " " + lname);
