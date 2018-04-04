// Zadanie 1
const firstString = "Hello";
const secondString = "World";
console.log(`${firstString} ${secondString}`);

// Zadanie 2
const x = 1;
const y = 2;

let multiply = (x, y = 1) => x * y;
console.log(`${multiply(x, y)}`);
console.log(`${multiply(2, 6)}`);
console.log(`${multiply(3)}`);

// Zadanie 3
let sum = 0;
let length = 0;
const average = (...args) => {
  args.forEach(arg => (sum = sum + arg));
  return (sum = sum / args.length);
};

average(31, 6, 7, 4, 7);
console.log(`${sum}`);

// Zadanie 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
const [a, b, c, d, e, f, g, h, i] = grades;
console.log(average(a, b, c, d, e, f, g, h, i));

// Zadanie 5
const names = [1, 4, "Iwona", false, "Nowak"];
const [no1, no2, fname, thing, lname] = names;
console.log(`${fname} ${lname}`);
