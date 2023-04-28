var CashFlowRatio;
var cash = 1000;
var CurrentLiabilities = 500;

CashFlowRatio = cash / CurrentLiabilities;
console.log(CashFlowRatio);

let NetIncome;
let revenues = 1000;
let expenses = 500;

NetIncome = revenues - expenses;
console.log(NetIncome);

var TotalAssets;
var liabilities = 1000;
var equity = 500;

TotalAssets = liabilities + equity;
console.log(TotalAssets);

let net_income;
let profit = 1000;
let sales = 500;

net_income = profit * sales;
console.log(net_income);

let Average;
let num1 = 7;
let num2 = 9;
let num3 = 2;

Average = (num1 + num2 + num3) / 3;
console.log(Average);

let price = 150;
let discount = 0.3; // 30%

let discountedPrice = price - price * discount;
console.log(discountedPrice);

let age = 20;
let isAgeWithinRange = age > 18 && age < 30;

console.log(isAgeWithinRange);

let num_1 = 2;
let num_2 = 3;
let result = num_1 ** num_2;

console.log(result);

let numm1 = 10;
let numm2 = 4;
let remainder = numm1 % numm2;
console.log(remainder);

console.log( typeof(100));
console.log( typeof(73.9));
console.log( typeof(NaN));
console.log( typeof("Water"));
console.log(typeof(false));
console.log( typeof(9 != 11));
console.log( "Orang" + "e");
console.log( "4" + "8");
console.log( "4" - "8");
console.log( "name" + 3);
console.log( "name" - 3);
console.log( 82 * "word");
console.log( 82 * "word");
console.log( 1 + "hello");
console.log( "hello" + 1);
console.log( 1 + true);
console.log( typeof (Infinity));
console.log( "hello" + true);
console.log( 1 === '1');



var s = "cactus";
var loc = s.indexOf("c",1);
s = s.substring(0, loc) + '*' + s.substring(loc + 1);
console.log(s);