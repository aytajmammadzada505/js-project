//Task 1
console.log("My Name Is Aytac");

//Task 2
const name = "Aytac";
console.log(name);

//Task 3
let person = "insan";
let $add = 15;

console.log($add, person);

//Task 4
let bookPrice = 15;
let bookAmount = 6;
let totalPrice = bookPrice * bookAmount;
console.log(`Depodaki kitablarin umumi deyeri ; ${totalPrice}`);

//Task 5

let kmhSpeed = 150;
let msSpeed = kmhSpeed / 3;

console.log(msSpeed);
console.log(`${kmhSpeed} khm = ${msSpeed} ms`);

//Task 6
let bday= prompt("Zehmet olmasa dogum ilinizi qeyd edin:");
let age = 2026 - bday;
let days = age * 365 ; 
console.log(days); 

//Task 7
let num = 4;
let power = num ** 5;
let remainer = num % 3;
console.log(
  `Ededin 5-ci derece quvveti ${power}, 3-e bolunende alinan qaliq ${remainer}`,
);
//Task 8
let firstName = "Aytac";
let lastName = "Mammadzada";
console.log(`Sizin adınız ${firstName} ${lastName}. Tanışlığımıza çox şadam!”`);

//Task 9
let firstNamee = "Scott";
let lastNamee = "Summers";
console.log(`Sizi bir daha görməyimizə şadıq, ${firstNamee} ${lastNamee}`);

//Task 10
let fullName = "James Howlett";
let letterCount = fullName.replaceAll(" ", "");
console.log(letterCount.length);

//Task 13
let namee = prompt("Adınızı daxil edin:");
if (namee) {
  console.log(`Salam, ${namee}!`);
}

//Task 14
let numOne = Number(prompt("Birinci ededi daxil edin:"));
let numTwo = Number(prompt("Ikinci ededi daxil edin:"));
let topp = numOne + numTwo;
let cix = numOne - numTwo;
let vur = numOne * numTwo;
let bol = numOne / numTwo;
console.log(`toplama`, topp);
console.log(`cixma`, cix);
console.log(`vurma`, vur);
console.log(`bolme`, bol);
//Task 15
let numb = 12345;
let numbe = 98765;
let tg = numb * numbe;

console.log(tg);

//Task 18
let fullNamee = prompt("zehmet olmasa Ad ve Soyadinizi daxil edin:");
let mesaj = "Salam!";
console.log(mesaj);

//Task 20
let emekHaqqi = prompt("Emek haqqi meblegini daxil edin :");
let vergi = (emekHaqqi * 13) / 100;
let elde = emekHaqqi - vergi;
console.log(elde);

//Task 23
let value = 10;
console.log(value == 10);
console.log(value <= 10);
console.log(value != 20);

let valuee = 20;
console.log(valuee == 10);
console.log(valuee <= 10);
console.log(valuee != 20);

//Task 24
let age = Number(prompt("zehmet olmasa yasinizi daxil edin :"));

if (age < 18) {
  alert("access denied");
} else {
  alert("access granted");
}

