"use strict";
//Написати функцію, яка повертає проміс, який виконається через
// 2 секунди після виклику з результатом "Готово"

function returnPromiseAfter2Seconds() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() { resolve("Готово")
            }, 2000)
    })
}
//returnPromiseAfter2Seconds().then(function(value) {
//    console.log(value)
//})