// 1
// const age = +prompt("How old are you?");
// if (age < 2) {
//     alert("Baby");
// } else if (age < 12) {
//     alert("Kid");
// } else if (age < 18) {
//     alert("Teenager");
// } else if (age < 60) {
//     alert("Adult");
// } else alert("Senior Sitizen");


// 2
// const a = +prompt("enter number from 0 to 9");
// switch (a) {
//     case 1:
//         console.log("!");
//         break;
//     case 2:
//         console.log("@");
//         break;
//     case 3:
//         console.log("#");
//         break;
//     case 4:
//         console.log("$");
//         break;
//     case 5:
//         console.log("%");
//         break;
//     case 6:
//         console.log("^");
//         break;
//     case 7:
//         console.log("&");
//         break;
//     case 8:
//         console.log("*");
//         break;
//     case 9:
//         console.log("(");
//         break;
//     case 0:
//         console.log(")");
//         break;
//     default:
//         console.log("only 0-9 numbers allowed");
//         break;
// }



//3
// const number = +prompt("Enter a 3-digit number", 500);
// const firstDigit = number % 10;
// const step = number % 100;
// const thirdDigit = Math.floor(step / 10);
// const fourthDigit = Math.floor(number / 100);
// if (fourthDigit === thirdDigit) {
//     console.log("there are repeating digits");
// } else if (thirdDigit === firstDigit) {
//     console.log("there are repeating digits");
// } else if (fourthDigit === firstDigit) {
//     console.log("there are repeating digits");
// } else {
//     console.log("there are no repeating digits");
// }


// 4 ??
// const year = +prompt("Enter a year", 1994);
// alert(((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0) ? "It is a leap year" : "It is not a leap year");


// 5
// const number = +prompt("Enter a 5-digit number", 50000);
// const fifthDigit = number % 10;
// const stepOne = number % 100;
// const fourthDigit = Math.floor(stepOne / 10);
// const stepTwo = number % 1000;
// const thirdDigit = Math.floor(stepTwo / 100);
// const stepThree = number % 10000;
// const secondDigit = Math.floor(stepThree / 1000);
// const stepFour = number % 100000;
// const firstDigit = Math.floor(stepFour / 10000);
// alert(fifthDigit === firstDigit && fourthDigit === secondDigit ? "Congrats, it is a palindrome" : "Oops, it is not a palindrome");



// 6
// const sum = +prompt("Enter the sum in dollars");
// const currency = prompt("Enter the currency (EUR, UAN, AZN)");
// switch (currency) {
//     case "EUR":
//         console.log(sum * 0.91);
//         break;
//     case "UAN":
//         console.log(sum * 23.96);
//         break;
//     case "AZN":
//         console.log(sum * 1.70);
//         break;
//     default:
//         console.log("Oops, only EUR, UAN, AZN are allowed");
//         break;
// }



// 7
// const sum = +prompt("Enter the sum of your purchase");
// if (sum >= 200 && sum <= 300) {
//     console.log(Math.round(sum - ((sum * 3) / 100)));
// } else if (sum >= 300 && sum <= 500) {
//     console.log(Math.round(sum - ((sum * 5) / 100)));
// } else if (sum >= 500) {
//     console.log(Math.round(sum - ((sum * 7) / 100)));
// } else {
//     console.log("Sorry, you do not qualify for a discount");
// }



// 8
// const circumference = +prompt("Enter the circumference");
// const perimeter = +prompt("Enter the perimeter");
// const diameter = circumference / 3.14;
// const side = perimeter / 4;
// console.log(diameter);
// console.log(side);
// if (diameter <= side) {
//     console.log("Yes, the circle fits in the square");
// } else {
//     console.log("No, the circle does not fit in the square");
// }



// 9 
// const q1 = +prompt("1+1= 1? 2? 3?");
// const q2 = +prompt("2+2= 2? 3? 4?");
// const q3 = +prompt("3+3= 4? 5? 6?");
// var summ = null;

// if (q1 == 2) {
//     summ++
// } else {
// }
// if (q2 == 4) {
//     summ++
// } else {
// }
// if (q3 == 6) {
//     summ++
// } else {
// }
// console.log(+ summ * 2);


// 10
// const day = +prompt("enter day");
// const month = +prompt("enter month");
// const year = +prompt("enter year");

// to be continued

