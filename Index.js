//Завдання 1
//import users from "C:/Users/Admin/Desktop/Програмирование/ДЗ/Homework - 7/1/script/user.js";
function users(firstName, lastName, Login, bithday, Pasworld) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.Login = Login;
    this.bithday = bithday;
    this.Pasworld = Pasworld;

};

const user = [];
const btn = document.getElementById("bt");
const bt2 = document.getElementById("bt2");
let RRT
let LU;
let FU;
let fu;
let Lc;
let Lu;
let BD // Переміні для даниих
let pas
let bbd
let d
let m
let r
let Hapy

function date() {
    d = parseInt(prompt("День народженння ")),
        m = parseInt(prompt("Місяць народження ")),
        r = parseInt(prompt("Рік народження ")),
        Hapy = (d + "." + m + "." + r)
};


bt2.onclick = () => {
        Lc = FU[0],
            fu = Lc.toLowerCase(),
            Lu = LU.toLowerCase(),
            RRT = (fu + Lu)
        console.log('Login == ' + fu + Lu),
            users.Login = RRT
    }
    //users.Login ведіть цу в консоль і ви побачите що в обєкт записало Логін!!!


bt3.onclick = () => {
        Lc = FU[0],
            fu = Lc.toLowerCase(),
            Lu = LU.toLowerCase(),

            pas = (RRT + r),
            console.log('Pasworld == ' + pas),
            users.Pasworld = pas
    } //users.Pasworld ведіть цю в консоль і ви побачите що в обєкт записало Пароль!!!
btn.onclick = () => {
    date(),
        user.push(new users(
            FU = prompt("Print firstUser"),
            LU = prompt("Print LastUser"),
            console.log(fu + Lu),
            Hapy,


            greateUser(),




        ))

};


//Спочатку натискаєте на кнопку Go потім на кнопку Get Login бо видасть помилку!!!


function greateUser() {
    console.dir(user)
};
//завдання - 2 ---- Воно вже зроблено в цьому файлі!!!!!!!
