/****************** Section-1 *******************/ 

// Q:1

function reverseString(params) {
    let storeString = "";
    for (let i = params.length-1; i >= 0; i--) {
        storeString = storeString + params[i];   
    }
    // console.log(storeString);
}

reverseString("anwar");

// Ans1: "rawna"

// Q:2

function countVowelNumber(params) {

    let vowelString = "aeiou";
    let emptyNumber = 0;

    for (let i = 0; i < params.length; i++) {
        (vowelString.match(params[i]))? emptyNumber = emptyNumber + 1 : "not found";
    }
    // console.log(emptyNumber)
}

countVowelNumber("hello World");

// Ans2: "3"

// Q:3

function firstLetterAppercase(params) {
let emptyStr = "";
params.split(" ").map((value)=>{
    emptyStr += value.slice(0,1).toUpperCase()+value.slice(1)+" ";
})
// console.log(emptyStr)
}

firstLetterAppercase("this is a football")

// Ans3: "This Is A Football"

// Q:4

let palindromeWord = "noon";


function cheackPalindrome(params) {
    let emptyStr = "";
    for (let i = params.length-1; i >= 0; i--) {
        emptyStr += params[i];
    }
    // console.log((params == emptyStr)? "this is a palindrome":"not a palindrome")
}
cheackPalindrome("laal");

// Ans4: "this is a palindrome"

// Q:5

function sumPositiveNumber(params) {
    let sumNumber = 0;
    params.map((value) => {
        (value > 0)? sumNumber+=value : ""
    })
    // console.log(sumNumber);
}
sumPositiveNumber([-1,-2,-3,1,2,3,4,]);

// Ans5: "10"

// Q:6
function findIndexInArray(params,params2) {

    let store = params.findIndex((value)=>{
        return value == params2;
    })
    // console.log(store)
}
findIndexInArray([0,1,2,3,4,5],2)

// Ans6: "1"

// Q:7

function removeDuplicateInArray(params) {
    let emptyArr = [];
    params.map((value)=>{
        if(!emptyArr.includes(value)){
            emptyArr.push(value);
        }
    });
    // console.log(emptyArr);
}
removeDuplicateInArray([0,1,2,1,3,4,4,5]);

// Ans7: "[ 0, 1, 2, 3, 4, 5 ]"

// Q:8

function sortArraybyAscendingOrder(params) {
    // console.log(params.sort());
}
sortArraybyAscendingOrder([5,6,7,3,2,1,4]);

// Ans8: "[1, 2, 3, 4, 5,6,7]"

// Q:9

function printNumberWhileLoop(params) {
    let i=0;
    while (i<=20) {
        if(i%2==0){
            // console.log(i)
        }
        i++;
    }
}
printNumberWhileLoop();

// Ans9: "2,4,6,8,10,12,14,16,18,20"

// Q:10

function doubleEachElement(params) {
    let arr = [0,1,2,3,4,5,6]
    for (const value of arr) {
        // console.log(value)
    }
}
doubleEachElement()

// Ans10: "0,1,2,3,4,5,6"

// Q:11

function objProperties(params) {
    let obj = {name:"anwar",fname:"abqadir",class:"7th",seciton:"b"}
    for (const value in obj) {
        // console.log(obj[value])
    }
}
objProperties()

// Ans11: "anwar ,abqadir,7th,b"

// Q:12

function cheakOddOrEven(params) {
    if(params%2==0){
        // console.log("this is a even number")
    }else{
        // console.log("this is a odd number")
    }
}
cheakOddOrEven()

// Ans12: "even"

// Q:13

function findMaxThreeNum(params) {
    let gmail = "anwar@gmail.com"
    if(!gmail==""){
        if(gmail.length < 50){
            if(gmail.includes("@")){
                // console.log("your Email is confirm")
            }
        }
    }
}
findMaxThreeNum("your Email is confirm")

// Ans13: "even"

/****************** Section-2 *******************/

// Q:1

function reWriteInTernary(params) {
    let result=90;
    let actualResult = ((result>=80)?"pass":"fail")
    // console.log(actualResult);
}
reWriteInTernary();

// Ans1: "pass"

// Q:2

function optionalChaining(params) {
    let obj = {name:"xyz",fname:"thomas",class:"10",seciton:{first:"a",second:"b"}}
    let result = obj?.seciton?.first;
    // console.log(result)
}
optionalChaining()

// Ans2: "a"

// Q:3

// Ans3: "difrrence between for of loop and for in loop
// is for of loop give the value and for in loop give value index with in array example"

// Q:4

function calculateAverageValue(params) {
    let result = 0;
    params.map((value) =>{
        result = result + value;
    })
    // console.log(result);
}
calculateAverageValue([1,2,3,4,5,7]);

// Ans4: "22"

// Q:5

function closures() {
    let a = 2;
    
    function second() {
        // console.log(2);
    }
    
    return second;
}

let closures2 = closures();
closures2();

// Ans5: "2"

// Q:6

function calculateAverageGrades(params) {
    let obj = [{
        stdName:"seimon",
        fName:"thomas",
        class:"9th",
        grade:"a"
    },
    {
        stdName:"arshad",
        fName:"thomas",
        class:"9th",
        grade:"b"
    },
    {
        stdName:"sufyan",
        fName:"thomas",
        class:"9th",
        grade:"c"
    },    
    ]

    obj.map((value) => {

        let grade = "";
        
        if(params >= 80){
            grade = "a";
        }else if(params >= 70){
            grade = "b";
        }else if(params >= 60){
            grade = "c";
        }else{
            grade = "fail"
        }
        if (value.grade == grade) {
            // console.log(value);
        }
    })
}
calculateAverageGrades(67);

// Ans6: "{ stdName: 'sufyan', fName: 'thomas', class: '9th', grade: 'c' }"

// Q:7

function diffrenceCopy(params) {
    //shallow and refrence Copy is changable
    let obj = {myName:"anw",fName:"abd",class:"10th"}
    let reffrenceCopy = obj;
    reffrenceCopy.class="4th";
    // console.log(obj,reffrenceCopy)
    //deep copy is not change in refrence and original onject;
}
diffrenceCopy();

// Ans7: "{ myName: 'anw', fName: 'abd', class: '4th' } { myName: 'anw', fName: 'abd', class: '4th' }"

// Q:8

function oddOrEvenWithTernary(params) {
    let arr = [0,1,2,3,4,5,6,7]
    for (const number of arr) {
        // console.log(`${number} is ${(number%2==0) ? 'even':'odd'}`)
    }
}

oddOrEvenWithTernary()

/* Ans8:"
0 is even
1 is odd
2 is even
3 is odd
4 is even
5 is odd
6 is even
7 is odd
"*/

// Q:9

/* Ans:9
For Loop:

- A for loop is used when the number of iterations is known beforehand.
- It consists of three parts: initialization, condition, and increment/decrement.
- The loop will execute as long as the condition is true.
- The initialization part is executed only once at the beginning of the loop.
- The increment/decrement part is executed at the end of each iteration.

While Loop:

- A while loop is used when the number of iterations is not known beforehand.
- It consists of only two parts: condition and body.
- The loop will execute as long as the condition is true.
- The condition is evaluated at the beginning of each iteration.
- If the condition is false, the loop will not execute at all.

Do-While Loop:

- A do-while loop is similar to a while loop, but the condition is evaluated at the end of each iteration.
- The loop will execute at least once, even if the condition is false.
- The body of the loop is executed before the condition is evaluated.
*/

// Q:10

function objWithChaining(params) {
    let obj = [{name:"xyz"},{fname:"thomas"},{class:"10"},{seciton:{first:"a",second:"b"}}]
    for (const value of obj) {
        // console.log(value.seciton?.first);
    }
}
objWithChaining()

// Ans10:"undefined,undefined,undefined,a"

// Q:11

function objValueAndProperties(params) {
    let obj = {name:"anwar",fname:"abqadir",class:"7th",seciton:"b"}
    for (const key in obj) {
        // console.log(`key ${key} value ${obj[key]}`)
    }
}
objValueAndProperties()

/*Ans11:
key name value anwar
key fname value abqadir
key class value 7th
key seciton value b
*/

// Q:12

/* Ans12 
if we are use break in if and nested if then break statement out the all if block
and we are use continue then only out of block nested if statement */

// Q:13

function calculateTax(params) {
    let taxRatio = params >= 10000 ? 0.007 : params >= 8000 ? 0.005 :params >= 4000 ? 0.004 :0.002;
    let totalTax = params*taxRatio;
    console.log(totalTax,taxRatio)
}
calculateTax(4000);

// Ans:13

// Q:14

function CarModel() {
    let car = {
        carName : "toyota",
        carModel :"2013",
        carEngine:function(params) {
            console.log("Engine Start")
        }
    }
    car.carEngine()
}
CarModel()


