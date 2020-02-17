let button = new LogoutButton();

button.action = () => {
    return ApiConnector.logout((err) => {
        if (err) {
            alert("Выход совершен успешно");
            return location.reload();
        } else {alert("Выход совершен успешно");
        };
    })
};

ApiConnector.current(({err, data}) => {
    if (err){
        let x = data;
        console.log("Загрузка данных удалась?")
        console.log(`вывод на печать объект err ${err}`);
        console.log(`вывод на печать тип объекта err ${err}`);
        console.log(`вывод на печать объект data ${data}`);
        console.log(`вывод на печать тип объекта err ${data}`);
        console.log(`вывод на печать объект err data ${{err, data}}`);
        console.log(`вывод на печать тип объекта err ${{err, data}}`);        
        console.log(typeof x);
        ProfileWidget.showProfile(data);
    } else {
        console.log(`вывод на печать объект err ${err}`);
        console.log(`вывод на печать тип объекта err ${err}`);
        console.log(`вывод на печать объект data ${data}`);
        console.log(`вывод на печать тип объекта err ${data}`);
        console.log(`вывод на печать объект err data ${{err, data}}`);
        console.log(`вывод на печать тип объекта err ${{err, data}}`);   
        console.log("Загрузка данных не удалась?")}
});

/*login: oleg@demo.ru, password: demo
login: ivan@demo.ru, password: demo
login: petr@demo.ru, password: demo*/