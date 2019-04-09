// variable
let a = 22, b, $ = 3, d = `hi`;
a = 33;
//console.log(a, b, $);

// constant
const c = 17;
// c = 15;  raise error
//console.log(c);

// Template Strings
let currentTemp = 19.5;
const message = `The current temperature'""' is ${currentTemp}\u00b0C`;
//console.log(message);

// null and undefined
let a2;
let b2 = null;
b2 = 3;
b2 = null;
//console.log(a2, b2);

// Objects
const obj = {};
obj.size = 1;
obj["size"] = 2;
//console.log(obj);

// nested object
let o2 = {
    a: {
        b: 2,
        c: `3`,
        d: {
            e: `555`
        }
    }
}
//console.log(o2, o2["a"].d["e"]);

// objects with functions
let o3 = {};
o3.speak = function () { alert("Meow!"); };
//o3.speak();

// array
const a3 = [1, 'two', 3, null, `ddd`];
a3[0] = 4;
//console.log(a3[0]);
//console.log(a3[a3.length - 1]);

// Data Type Conversion
const numStr = "33.3";
const num = Number(numStr);
const b4 = parseInt("3a", 16); // parse hexadecimal 3a; result is 58
const c4 = parseFloat("15.5 kph"); // the " kph" is ignored; parseFloat
const n4 = 33.5;
const s4 = n4.toString();
const t4 = Boolean(1 === 2); // false


// Logic
if (a === 7) { }

// for - NOT INITIALIZED ARRAY
const hand = [];
for (let roll = 0; roll < 3; roll++) {
    hand.push(roll);
}

// for 
let i = 0;
for (; i < hand.length; i++) {
    // console.log(i);
}

// typeof
console.log(typeof "", typeof true);

// oneline if
let label = 1 === 2 ? 'prime' : 'non-prime';

// Converting if Statements to Short-Circuited Logical OR Expressions
let options = a || '2'; // if a !== undefined  options = a othervise options = '2'
