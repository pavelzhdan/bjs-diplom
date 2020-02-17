"use strict";

let userForm = new UserForm();

userForm.loginFormAction();

userForm.loginFormCallback = (data) => { 
    return ApiConnector.login(data, (err, info) => {
        if (err) {
            alert("Вход разрешён")
            location.reload();
        } else {alert("Вход запрещён");
        }
    })
};

userForm.registerFormAction();

userForm.registerFormCallback = (data) => {
    return ApiConnector.register(data, (err, info) => {
        if (err) {
            alert("Регистрация удалась");
            location.reload();
        } else {alert("Ошбика регистрации");
       }
    })
};

/*login: oleg@demo.ru, password: demo
login: ivan@demo.ru, password: demo
login: petr@demo.ru, password: demo*/