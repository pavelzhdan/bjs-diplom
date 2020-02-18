"use strict";

let userForm = new UserForm();

userForm.loginFormAction();

userForm.loginFormCallback = (info) => { 
    return ApiConnector.login(info, (err) => {
        if (err.success) {
            location.reload();
        } else {
            userForm.setLoginErrorMessage(err.data);
        }
    })
};

userForm.registerFormAction();

userForm.registerFormCallback = (info) => {
    return ApiConnector.register(info, (err) => {
        if (err.success) {
            location.reload();
        } else {
            userForm.setRegisterErrorMessage(err.data)
       }
    })
};