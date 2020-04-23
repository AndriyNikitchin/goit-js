"use strict";

const total = 100;
let ordered = 150;

if (ordered > total) {
    console.log("На складе недостаточно товаров!");
} else {
    console.log("Заказ оформлен, с вами свяжется менеджер");
}


ordered = 60;

if (ordered > total) {
    console.log("На складе недостаточно товаров!");
} else {
    console.log("Заказ оформлен, с вами свяжется менеджер");
}

ordered = 120;

if (ordered > total) {
    console.log("На складе недостаточно товаров!");
} else {
    console.log("Заказ оформлен, с вами свяжется менеджер");
}