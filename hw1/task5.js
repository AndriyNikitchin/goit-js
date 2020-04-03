"use strict";

const ADMIN_PASSWORD = 'TRALALA';

let message;

let entered_password = prompt("ПАРОЛЬ ВАЛЯЙ!")

if (entered_password == null) {
    message = 'НУ ОК';
} else if (entered_password === ADMIN_PASSWORD) {
    message = ('ЛОЛ ЕКСТАСЕНС');
} else {
    message = ('вийди звідси розбійник!');
}
alert(message);