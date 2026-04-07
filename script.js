// ==========================
// Part 1: Date Display
// ==========================

let now = new Date();

let m = now.getMonth() + 1;
let d = now.getDate();
let y = now.getFullYear();

// add leading zero
if (m < 10) {
  m = "0" + m;
}
if (d < 10) {
  d = "0" + d;
}

let todayText = "Today is " + m + "/" + d + "/" + y;

document.getElementById("dateOutput").textContent = todayText;


// ==========================
// Part 2: Number Conversion
// ==========================

let a = "42";
let b = "19.75";
let c = "hello";
let d2 = "100";

let aNum = Number(a);
let bNum = Number(b);
let cNum = Number(c);
let dNum = Number(d2);

let text = "";

text += "Original: '" + a + "' -> Converted: " + aNum +
        " -> isNaN: " + Number.isNaN(aNum) +
        " -> isInteger: " + Number.isInteger(aNum) + "<br>";

text += "Original: '" + b + "' -> Converted: " + bNum +
        " -> isNaN: " + Number.isNaN(bNum) +
        " -> isInteger: " + Number.isInteger(bNum) + "<br>";

text += "Original: '" + c + "' -> Converted: " + cNum +
        " -> isNaN: " + Number.isNaN(cNum) +
        " -> isInteger: " + Number.isInteger(cNum) + "<br>";

text += "Original: '" + d2 + "' -> Converted: " + dNum +
        " -> isNaN: " + Number.isNaN(dNum) +
        " -> isInteger: " + Number.isInteger(dNum);

// conditionals
if (Number.isNaN(cNum)) {
  text += "<br>This value is not a number.";
} else {
  text += "<br>This value is fine.";
}

if (Number.isInteger(bNum)) {
  text += "<br>This is an integer.";
} else {
  text += "<br>This is not an integer.";
}

document.getElementById("numberConversionOutput").innerHTML = text;


// ==========================
// Part 3: Math & Formatting
// ==========================

let item = 25.5;
let taxRate = 0.08;
let ship = 5;

let sub = item + ship;
let tax = sub * taxRate;
let total = sub + tax;

let totalNice = total.toFixed(2);

let mathText = "";

mathText += "Item price: $" + item + "<br>";
mathText += "Shipping: $" + ship + "<br>";
mathText += "Subtotal: $" + sub + "<br>";
mathText += "Tax: $" + tax.toFixed(2) + "<br>";
mathText += "Total: $" + totalNice;

if (total > 30) {
  mathText += "<br>Total is pretty high.";
} else {
  mathText += "<br>Total is not that much.";
}

document.getElementById("mathOutput").innerHTML = mathText;