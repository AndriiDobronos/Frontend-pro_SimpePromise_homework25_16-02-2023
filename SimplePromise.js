"use strict";
//Написати функцію, яка повертає проміс, який виконається через
// 2 секунди після виклику з результатом "Готово"

//Якщо час затримки та дію alert плануємо передавати як параметри :
function returnPromise1(delayInSeconds){
    return new Promise(function(resolve){
        setTimeout(resolve, delayInSeconds*1000);
    });
}
returnPromise1(2).then(function(){alert("Готово from promise1");});

//Якщо тільки дію alert з конкретним значенням плануємо
// передавати як параметр :
function returnPromise2(){
    return new Promise(function(resolve){
        setTimeout(() => {
            resolve()
        }, 2000)
    });
}
returnPromise2().then(() => alert('Готово from promise2'))

//Якщо не плануємо змінювати час затримки та зміст повідомлення :
function returnPromise3(){
    return new Promise(function(resolve){
        setTimeout(() => {
            resolve('Готово from promise3')
        }, 2000)
    });
}
returnPromise3().then((value) => {alert(value)})

//Якщо може виникнути помилка та ми плануємо змінювати дію функціі
// коли її викликаємо(наприклад : alert замінити на console.log)
function returnPromise4(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            if(resolve) {
                resolve('Готово from promise4')
            }else{
                reject("Помилка! from promise4")
            }
        }, 2000)
    });
}
returnPromise4().then(function(value) {
    alert(value); // Успіх!
}, function(reason) {
    alert(reason); // Помилка!
})