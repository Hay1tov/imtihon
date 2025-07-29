//                                No_1

// let number = 424;
// let birlik = 0;
// let onlik = 0;
// let yuzlik = 0;

// if (number >= 100 && number <= 999) {

//   birlik = number % 10;
//   yuzlik = Math.floor(number / 100);

//   number = Math.floor(number / 10);

//   onlik = number % 10;

//   if (birlik == onlik || onlik == yuzlik || birlik == yuzlik) {
//     console.log(false);
//   } else {
//     console.log(true);
//   }

// } else {
//   console.log("uch xonali son emas");
// }

//                                No_2

// let number = 424;
// let birlik = 0;
// let onlik = 0;
// let yuzlik = 0;
// let total = 0;

// let originalN = number;

// if (number >= 100 && number <= 999) {

//   birlik = number % 10;
//   yuzlik = Math.floor(number / 100);
//   number = Math.floor(number / 10);
//   onlik = number % 10;

//   total = birlik + onlik + yuzlik;

//   console.log(`${originalN} ning raqamlari yig'indisi = ${total}`)

// } else {
//   console.log("uch xonali son emas");
// }


//                                No_3

// let number = 112;
// let birlik = 0;
// let onlik = 0;
// let yuzlik = 0;

// if (number >= 100 && number <= 999) {

//   birlik = number % 10;
//   yuzlik = Math.floor(number / 100);

//   number = Math.floor(number / 10);

//   onlik = number % 10;

//   if (birlik == yuzlik || (birlik == onlik && onlik == yuzlik)) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }

// } else {
//   console.log("uch xonali son emas");
// }


//                                No_4


// let month = 6; //  (1-7) gacha son kiritiladi

// if (month < 1 || month > 7) {
//   console.log("bunaqa hafta kuni yo'q");
// } else {
//   switch (month) {
//     case 1: console.log(`${month}-Dushanba`); break;
//     case 2: console.log(`${month}-Seshanba`); break;
//     case 3: console.log(`${month}-Chorshanba`); break;
//     case 4: console.log(`${month}-Payshanba`); break;
//     case 5: console.log(`${month}-Juma`); break;
//     case 6: console.log(`${month}-Shanba`); break;
//     case 7: console.log(`${month}-Yakshanba`); break;
//   }
// }

//                                No_5

// let num1 = 1;
// let num2 = 2;
// let num3 = 1.2;

// if (num1 > num2 && num1 < num3 || num1 > num3 && num1 < num2) {
//   console.log(num1);
// } else if (num2 > num1 && num2 < num3 || num2 > num3 && num2 < num1) {
//   console.log(num2);
// } else if (num3 > num2 && num3 < num1 || num3 > num1 && num3 < num2) {
//   console.log(num3);
// } else {
//   console.log("barcha son har xil bo'lishi kerak")
// }

//                                No_6


// let month = 2; //  (1-12) gacha son kiritiladi

// if (month < 1 || month > 12) {
//   console.log("bunaqa oy yo'q");
// } else {
//   switch (month) {
//     case 12:
//     case 1:
//     case 2: console.log(`${month}-oy Qish`); break;
//     case 3:
//     case 4:
//     case 5: console.log(`${month}-oy Bahor`); break;
//     case 6:
//     case 7:
//     case 8: console.log(`${month}-oy Yoz`); break;
//     case 9:
//     case 10:
//     case 11: console.log(`${month}-oy Kuz`); break;
//   }
// }

//                                No_7

// let A = 3;
// let B = 7;

// if (A < B) {

//   for(let i = A; i <= B; i++) {
//     for(let j = 1; j <= i; j++) {
//       console.log(i)
//     }
//   }


// } else {
//   console.log("A < B shart asosida son kiriting")
// }

//                                No_8

// let a = 1;
// let b = 10;

// let total = 0;

// if (a < b) {
//   for (let i = a; i <= b; i++) {
//     total += i;
//   }

//   console.log(total)
// } else {
//   console.log("a < b shart asosida son kiriting")
// }


//                                No_9

// let A = 24;
// let B = 4;

// let originalA = A

// let loop = 0

// if (A > B) {
//   while (A >= B) {
//     A -= B;
//     loop++;
//   }
//   console.log(`${originalA} kesma ichiga ${B} kesmadan ${loop} ta joylashtirsa bo'ladi`)

// } else {
//   console.log("A > B shart asosida son kiriting")
// }


//                                No_10


let A = 13;
let B = 3;

let total = 0;

if (A < B) {
  for (let i = A; i <= B; i++) {
    if (i % 2 == 0) {
      console.log(i)
      total += i;
    }
  }
  console.log(`${A} dan ${B} gacha bo'lgan juft sonlar yig'indisi = ${total}`)
} else if (A > B) {
  for (let i = A; i >= B; i--) {
    if (i % 2 == 0) {
      console.log(i)
      total += i;
    }
  }
  console.log(`${A} dan ${B} gacha bo'lgan juft sonlar yig'indisi = ${total}`)
}