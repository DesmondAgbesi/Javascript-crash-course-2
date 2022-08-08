//LOGICAL OPERATORS

let num1 =10;
let num2 = 20;
let num3 = "10";
let word1 = "Hello";
let word2 = "hello";

console.log(num1 < num2);
console.log(num1 > num2);
console.log(num1 <= num2);
console.log(num1 >= num2);
console.log(!true);
console.log(!false);
console.log(num1 === num3); //equality check
console.log(num1 != num2);
console.log(word1 !== word2);


//CONTROL FLOW
let item = "Gino";

if (item === "Annapurna") {
  console.log("Buy Annapurna")
} else if (item ==="U2"){
  console.log("Buy U2")
} else if (item ==="A1") {
  console.log("Buy A1")
}else {
  console.log("Buy rocky salt")
}


//GRADING SYSTEM
let score = 900;
if (score >=0 && score <=100 ){
if (score >= 90 && score <= 100) {
    console.log ("Excellent")
  } else if (score >= 80){
    console.log("Very Good")
  } else if (score >= 70){
    console.log(" Good")
  }else if (score >= 60){
    console.log("Average")
  }else if (score >= 50){
    console.log("Credit")
  }else if (score >= 40){
    console.log("Pass")
  }
  else if (score >= 0){
    console.log("Fail")
  }
}else {
  console.log("Please enter a valid score")
}

//FUNCTONS (A group of code that performs a particular task)

function sum(x,y){
  let total = x + y;
  return total;
  // console.log(x + y);
}



let five = sum(2,3);
let fifteen = sum(11,4);
let eight = sum(5,3);

console.log(five);
console.log(eight);
console.log(fifteen);

function multiply(k,l = 1){
  let result = k * l;
  return result;
}

let r1 = multiply(2);
let r2 = multiply(4,5);
let r3 = multiply(6,5);

console.log(r1);
console.log(r2);
console.log(r3); 


// LOOPs (loops are ways to make the computer do a task over and over again until meets a condition then the loop breaks)
 
for (let i = 1; i <= 10; i++){
  console.log(i);
}

// WHILE LOOP (the increment is the last thing in  a while loop and it is declared in the curly braces; failure to include the increment will lead to an infinity loop)

let num1 = 1;
while (num1 <= 10){
  console.log(num1);
  num1 = num1 + 1;
}


let age = 18;
do {
  console.log("You can't vote")
  age++; 
}while (age < 18);

//ARRAY METHODS
let ages = [12,24,43,26,17,21,24,32,43,24,25,32];
// for...of loop (for of is used for arrays and for in is for objects)
for (let age of ages) {
  console.log(Math.pow(age, 2));
}


//filters are higher order functions which needs proper attention
let marriage = ages.filter((num) => num > 25);
let unmarried = ages.filter(function(unum){
  return unum <= 25;
});
console.log(marriage);
console.log(unmarried);


//MAP
 let squares = ages.map((age) => age * age);
 console.log(squares);

//FIND
let t24 = ages.find((age) => age === 24)
let nt24 =ages.find(function(age){
  return ages !== 24
})
console.log(t24);
console.log(nt24);





