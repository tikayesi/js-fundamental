// ===== DATA TYPE
// number, string, array, boolean, null, undefined
// you can using type of to show the data type of variable
let a = "test";
console.log(typeof(a));

// untuk mendeclare variable bisa menggunakan const, vae, let, atau tanpa declare
// const
// Jika dirasa variable tidak akan berubah maka gunakan const
// Jika dirasa variable dapat berubah maka gunakan var / let
// var
// keyword ini digunakan js dari tahun 1995 - 2015
// let
// keyword ini digunakan sejak tahun 2015 sampai sekarang

// Perbedaan var dan let
// https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/
console.log(x);
var x = 5;
console.log(x); // will be show undefined

console.log(y);
let y = 5;
console.log(y); // will be show an error

// var can be re-initialized
var greeting = "say Hi";
var greeting = "hii";
console.log(greeting); // will show "hii"
// let can't be re-initialized
let greeting = "say Hi";
let greeting = "hii";
console.log(greeting); // will show error

// var is global scope, it will be re-asign the value
// and possible to make bugs in our app
var greeting = "say Hi";
var times = 4;

if (times > 3) {
     var hello = "say Hello instead";
     console.log(hello);// "say Hello instead"
 }
console.log(hello); //"say Hello instead"

// let is block scope
let greeting = "say Hi";
let times = 4;

if (times > 3) {
     let hello = "say Hello instead";
     console.log(hello);// "say Hello instead"
 }
console.log(hello) // hello is not defined


// ==== OPERATOR
// https://www.w3schools.com/js/js_operators.asp
let number = 3;
let angka = 3;
angka **= number;
console.log(angka);
console.log(number**2);

// ==== ARRAY
// https://www.w3schools.com/js/js_arrays.asp
const employee = [];
const employ = ["Tika", "Yesi", "Kristiani"]
const emp = new Array("tika", "yesi", "kristiani")
// index start from 0
// get element:
console.log(emp[0]);
// array in js can contain difference data type like string, number, function, etc
const em = ["tika", 45, "anuari", 10.0]
// get array length
em.length
// add array element
em.push("test")
// remove last element
em.pop()
// remove first element
em.shift()
// change element
em[0] = "March"
// delete, tapi akan meninggalkan suatu variable dengan nilai undefined
delete em[0]
// menggabungkan array dengan concat
em.concat(employ)
// menambahkan item baru di array dengan bisa menggantikan array yang sudah ada
// 2 menunjukkan item baru yang ditambahkan diletakkan dimana
// 0 menunjukan jumlah array yang akan dihapus
// ando menunjukkan value dari item baru yang ditambahkan
em.splice(2, 0, "ando")
// menghapus value dari suatu array, dapat memberi batasan juga value mana yang akan diambil
// contohnya 1, 3 maka yang diambil setelah 1 dan sebelum 3
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const citrus = fruits.slice(1,3);
const taste = fruits.slice(2);
console.log(fruits);
console.log(citrus);

// etc in you can continue by w3schools


// ==== STRING MANIPULATION

// three method extracting a part of a string
slice(start, end)
substring(start, end)
substr(start, length)

// String interpolation
// replace
// uppercase
// lowercase
// trim
// charat
// indexOf
// lastindexof
// startsWith
// endsWith

// ==== CONDITION

// https://www.w3schools.com/js/js_if_else.asp

// ==== LOOPING
// for
// for in
// for of
// for while
// foreach

// TYPE CONVERTION
// https://www.w3schools.com/js/js_type_conversion.asp


// materi asynchoronous bisa buat tambahan code di kelas askrindo => javascript