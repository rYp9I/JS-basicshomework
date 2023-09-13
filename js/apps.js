// 1
let firstName = "Valerii";
let lastName = "Hurianov";
let Names = `${firstName} ${lastName}`;
    console.log(Names)
// 2
let height = 2;
let lenght = 3;
    if (height < 0 || lenght < 0) {
        console.log("Error");
 } else {
        console.log(height*lenght)
    }
 // 3
 let number = 10;
 let numbertwo = 6;
    console.log(number**numbertwo)
// 4
console.log(Math.floor(Math.random()*51))
// 5
let numbers = 3;
    if (number < 0) {
        console.log("negative value");
    } else {
        console.log("positive value")
    }  
// 6
let text = "text";
    if (text.length>1) {
        console.log(text[text.length-2])
    }
// 7
let month = 3;
switch(month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
     case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
     case 12:
        console.log("December");
        break;
     default:
        console.log("not month")
    }
// 8
let password  ="valerii";
        if ( password.length > 5 && password.indexOf("&") != -1) {
            console.log('this password is strong');
         } else {
            console.log('this password is weak')
      }  
// 9
let a = 10;
let b = 'hg';
    if (typeof a == "number" && typeof b == "number") {
         console.log(a+b);
    } else {
        console.log("Sum of those items can\’t be counted")
} 
// 10
let textOne = 'h';
let textTwo = 'hg';
if (typeof textOne == "string" && typeof textTwo == "string" && textOne.length==textTwo.length) {
    console.log("those items are strings and they\’re equal");
} else {
   console.log("items are not compareble")
} 