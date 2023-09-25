const button = document.querySelector("button")!;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});

let num: number;
num = 10;

let str: string;
str = "string";
str = "hello";

let arr: string[] = [];
arr = ["string"];

let arrNum: number[] = [];
arrNum = [1, 2, 4];

let arrAny: any[] = [];
arrAny = [1, 2, 4, {}, "string"];

let arrObject: { name: string }[];
arrObject = [{ name: "Alex" }];
