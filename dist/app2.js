"use strict";
/*
 ** Задайте правильні ts типи для класичних js;
 */
let age;
age = 50;
let name1;
name1 = "Maxim";
let toggle;
toggle = true;
let empty;
empty = null;
let notInitialized;
notInitialized = undefined;
let callback;
callback = (a) => {
    return 100 + a;
};
/*
 ** Задайте тип для змінної, в яку можна зберегти будь-яке значення.
 */
let anything;
anything = -20;
anything = "Text";
anything = {};
/*
 ** Виправте код зі змінною unknown, щоб у нього можна було зберегти змінну з текстом.
 */
let some;
some = "Text";
let str1;
if (typeof some === "string") {
    str1 = some;
}
/*
 ** Зробіть незмінний масив із суворо описаними типами. Масив для прикладу.
 */
let person;
person = ["Max", 21];
/*
 ** Опишіть enum умову наступну: він повинен відображати статус завантаження. Завантажується (LOADING) та завантажена (READY).
 */
var Status;
(function (Status) {
    Status[Status["LOADING"] = 0] = "LOADING";
    Status[Status["READY"] = 1] = "READY";
})(Status || (Status = {}));
const response = {
    status: Status.READY,
};
if (response.status === Status.READY) {
    console.log("Stаtus:", Status.READY);
}
if (response.status === Status.LOADING) {
    console.log("Stаtus:", Status.LOADING);
}
/*
 ** Зробіть змінну, яка може приймати або рядок, або число.
 */
let value;
value = 17;
value = "cat";
/*
 ** Зробіть змінну, яка може приймати лише одне значення з двох: 'enable' або 'disable'
 */
let literal;
literal = "disable";
literal = "enable";
/*
 ** Вкажіть типи для наступних функцій
 */
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
const page1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: new Date("2021-01-01"),
        updateAt: new Date("2021-05-01"),
    },
};
const page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close",
};
