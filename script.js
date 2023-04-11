// // function divided(a){
// //     let b=a%7;
// //     if (b==0){
// //         console.log("7-ye bolunur");
// //     }else{
// //         console.log(a)
// //         if(b<3){
// // console.log(a-b);
// //         }
// //         else{
// //             console.log(a+(7-b));
// //         }
// //     }
// // }

// // divided(19)
// // function divided (a){
// //     let b=a%7;
// //     if(b==0){
// //         console.log("bolunur");
// //     }
// //     else if(a<7){
// //         console.log(7);
// //     }
// //     else {

// //         if(b<3){
// //             console.log(a-b);
// //         }else{
// //             console.log(a+(7-b));
// //         }
// //     }
// // }
// // divided(15)

// let count1=(a)=>{
//     let count=0;
//     if(a<50){
//         for(let i=1; i<a; i++){
//             count++;

//             if(i%3==0){

//                 console.log(i);
//             }
//         }
//     }
//     else if(a>=50 && a<=100){
//         for (let i = 0; i < a; i++) {
//             count++;

//             if(i%5==0){

//                 console.log(i);
//             }

//         }
//     }
//     else{
//         for (let i = 0; i < a; i++) {
//             count++
//             if(i%8==0){

//                 console.log(i);
//             }

//         }
//     }

//     return count
// }
// count1(80).

// accept the number from the user through prompt box
// const number1 = prompt ('Enter the first number: ');
// const operator = prompt('Enter operator(  +, -, * or / ): ');
// const number2 = prompt ('Enter the second number: ');

// let result
// if(operator=="+"){
// function sum(number1,number2){
// result =number1+number2
// return(result);

// }

// sum(number1,number2)
// console.log(result);}
// if(operator=="-"){
// function ferq(number1,number2){
//     result =number1-number2
//     return result
//     }
//     ferq(number1,number2)
// console.log(result);}
// if(operator=="*"){
//     function multiply(number1,number2){
//         result =number1*number2
//        return  result
//         }
//         multiply(number1,number2)
//         console.log(result);

//     }
//     if(operator=="/"){
//       function divid(number1,number2){
//             result =number1/number2
//          return result
//             }

//            divid(number1,number2)
//            console.log(result);
//         }
// let herf=prompt('Enter the herf')
// let word=prompt ('Enter the word: ')
// let result;
// function search(h,w){
// for (let i = 0; i <word.length; i++) {
//     if(herf==word[i]){
//        return i;

//     }
//     else{
//         console.log("don't find");

//     }

// }
// }
// search(h,w)

// function division (number){
//     if (number %7 == 0) {
//         console.log("Eded 7'e bolunur!");
//     }
//     else{
//         let smallNumber = Math.floor(number/7)*7;//7
//         let largeNumber = smallNumber +7;//14
//         if (number - smallNumber < largeNumber - number) {
//             console.log('Eded:'+ smallNumber);
//         }
//         else{
//             console.log('Eded:' + largeNumber);
//         }
//     }
// }
// division(6);

// const myfunction = function(num){
//     if(num%7==0){
//         console.log("7-e bolunur");
//     }
//     else{
//         for(let i=0;i<num;i++){
//             if(num%7!=0){
//                 if((num%7)>3){
//                     num++;
//                 }

//                 else{
//                     num--;
//                 }
//             }
//         }
//         return num;
//     }
// }

// num=23;
// console.log(myfunction(num)) ;

// let sum = num => {
//     let count = 0;
//     if (num < 50) {
//         for (let i = 0; i < num; i +=3) {
//             count++;
//         }
//     }
//     else if (num >= 50 && num < 100) {
//         for (let i = 0; i < num; i +=5) {
//             count++;
//         }
//     }
//     else if (num >= 100) {
//         for (let i = 0; i < num; i +=8) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(sum(80));

// let sum = num => {
//     let count = 0;
//     if (num < 50) {
//         count=Math.floor(num/3);
//     }
//     else if (num >= 50 && num < 100) {
//         count=Math.floor(num/5);
//     }
//     else if (num >= 100) {
//         count=Math.floor(num/8);
//     }
//     return count;
// }
// console.log(sum(20));

// for(var i = 0; i<5; i++){
//     console.log("in loop",i)
// }

// console.log(i)

// myFunc()

// var myFunc = function One(){
//     console.log("hello")
// }

// console.log(myFunc)

//Kalkulyator yaz. 4 emeliyyat eden(+ - * /). Bu emeliyyatlari funksiya ile yaz.
//Istifadechiden deyerleri propmt ile gotur

// let num1= prompt("Enter first number")
// let num2= prompt("Enter second number")
// let operation= prompt("Enter operation (+ - * /)")

// if(operation == "+"){
//     console.log(Sum(num1, num2));
// }else if(operation == "-"){
//     console.log(Sub(num1, num2));
// }else if(operation == "*"){
//     console.log(Mult(num1, num2));
// }else if(operation == "/"){
//     console.log(Div(num1, num2));
// }else{
//     console.log("Operation not found!")
// }

// function Mult(a, b){
//     return a*b;
// }
// function Sum(a, b){
//     return a+b;
// }
// function Div(a, b){
//     return a/b;
// }
// function Sub(a, b){
//     return a-b;
// }

// funksiya soz ve herf qebul edir. Hemin herf sozde varsa onun indeksini qaytarir. Yoxdursa "tapilmadi" yazir

// let wordFromUser = prompt("Enter the word")
// let letterFromUser = prompt("Enter the letter")

// console.log("Result: ", FindLetter(letterFromUser,wordFromUser))

// function FindLetter(letter, word){
//     for(let i = 0; i< word.length; i++){
//         if(word[i] === letter){
//             return i;
//         }
//     }
//     return "Not Found";
// }

// FUNKSIYA YARAT. SOZ QEBUL ELESIN. EN CHOX TEKRARLANAN HERFI CHIXARSIN CONSOLE-A. YOXDURSA "TAPILMADI"

// let wordFromUser = prompt("Enter word")

// console.log(Find(wordFromUser))

// function Find(word){
//     let letter = word[0]; //l
//     let count = 1; //2
//     for(let i = 0; i< word.length; i++){
//         let countInner = 1; //2
//         for(let k = i; k<word.length; k++){
//             if(word[i]===word[k]){
//                 countInner+=1;
//             }
//         }
//         if(countInner > count){
//             letter = word[i];
//             count = countInner;
//         }
//     }
//     return letter;
// }

const person = {
  firstName: "Yazgul",
  surname: " Mammadli",
  
  hobies: ["aaa", "bbbb"],
  car: "BMW",
  func: function () {
    return this.firstName + " " + this.surname;
  },
  func7() {
    return this.firstName + " " + this.surname;
  },
};
document.getElementById("demo").innerHTML = person.firstName + person.surname;
console.log(person.hobies[0]);
console.log(person.func());
console.log(person.func7());
