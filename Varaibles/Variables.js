var a
console.log(a)
a = 1; 


let a;
console.log(a);

{

    console.log(x);
    let x =10;
    console.log(x);

}


0 == false 
0 === fasle 


console.log(1+'2'); // 12 
console.log("3"-1); // 2
console.log(-"2"); // 


let userName = ""
console.log('Привет' + userName + "!"); 


const name = null;
const display = true && "Гость"
console.log(display) // 

console.log(false || "")


0 || "anything"   
"hello" || 42  

"a" && "" && "c" 


||

console.log(typeof true)

foo("Natalka", sayBye)  

function foo (name, callback) {
    console.log ("Hello," + name);
    callback()
}

function sayBye() {
  console.log("Пока!");
}


conslole.log(printInfo2) // undefind // Reffrence Error



let printInfo = function (){
let id = pm.response.json().id;
console.log(id);
}

let printSecurityData = function(){}



function printFullInfo(func){
    console.log(pm.response.json(),name)
    func();
}

printFullInfo (printInfo); // 

printFullInfo(func) 