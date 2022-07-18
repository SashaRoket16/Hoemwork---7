//Завдання 1
//import users from "C:/Users/Admin/Desktop/Програмирование/ДЗ/Homework - 7/1/script/user.js";
class CreatUser{
constructor (firstName, lastName, Login, bithday, Pasworld) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.Login = Login;
    this.bithday = bithday;
    this.Pasworld = Pasworld;

}}
const user = [];
let btn = document.getElementById("bt");
let bt2 = document.getElementById("bt2");
let lg;
let ps;
let RRT
let c = true;
let FU
let LU
let fu;
let Lc;
let Lu;
let BD // Переміні для даниих
let pas
let bbd
let d
let m
var r
let Hapy
let RRD
let funn;
let luu;
let gal;

function date() {
    FU = prompt("Print firstUser");
    LU = prompt("Print LastUser");
    d = parseInt(prompt("День народженння ")),
        m = parseInt(prompt("Місяць народження ")),
        r = parseInt(prompt("Рік народження ")),
        Hapy = (d + "." + m + "." + r)
};


function logg() {
    Lc = FU.slice(0, 1);
    fu = Lc.toLowerCase(),
        Lu = LU.toLowerCase(),
        RRT = (fu + Lu)
    lg = (fu + Lu)
};

function pasww() {
    gal = Lc.toUpperCase(),
        Lu = LU.toLowerCase(),
        RRD = (gal + Lu)
    pas = (RRD + r)

}



//users.Login ведіть цу в консоль і ви побачите що в обєкт записало Логін!!!
//users.Pasworld ведіть цю в консоль і ви побачите що в обєкт записало Пароль!!!
btn.onclick = () => {

    date(),

        logg(),
        pasww(),
        user.push(new CreatUser(
            funn = FU,
            luu = LU,
            lg,
            Hapy,
            pas,



            greateUser(),




        ))


};


//Спочатку натискаєте на кнопку Go потім на кнопку Get Login бо видасть помилку!!!


function greateUser() {
    console.dir(user)
};
//завдання - 2
