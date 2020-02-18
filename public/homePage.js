let button = new LogoutButton();

button.action = () => {
    return ApiConnector.logout((err) => {
        if (err.success) {
            location.reload();
        };
    })
};

ApiConnector.current((err) => {
    if(err.success){
        ProfileWidget.showProfile(err.data);}
});

let rates = new RatesBoard();

function ratesUpdate (){
ApiConnector.getStocks((err) => {
    if (err.success){
        rates.clearTable();
        rates.fillTable(err.data);}});
    };

ratesUpdate ();

setInterval(ratesUpdate, 60000);

let money = new MoneyManager();

money.addMoneyCallback = (sendCurrency) =>{
    ApiConnector.addMoney(sendCurrency, (err) =>{
        if (err.success){
            ProfileWidget.showProfile(err.data);
            money.setMessage(false, "Счет пополнен");
        } else {
            money.setMessage(true, err.data);
        };
    });
};

money.conversionMoneyCallback = (convertmoney) =>{
    ApiConnector.convertMoney(convertmoney, (err) => {
        if (err.success){
            ProfileWidget.showProfile(err.data);
            money.setMessage(false, "Конвертация завершена");
        } else {
            money.setMessage(true, err.data);
        };
    })
};

money.sendMoneyCallback = (sendMoneyTo) =>{
    ApiConnector.transferMoney(sendMoneyTo, (err) => {
        if (err.success){
            ProfileWidget.showProfile(err.data);
            money.setMessage(false, "Деньги отправлены");
        } else {
            money.setMessage(true, err.data);
        };
    })
};

let fav = new FavoritesWidget();

ApiConnector.getFavorites((err) =>{
    if (err.success){
        fav.clearTable();
        fav.fillTable(err.data);
        money.updateUsersList(err.data);
    };
})

fav.addUserCallback = (addUserData) =>{
    ApiConnector.addUserToFavorites(addUserData, (err) =>{
        if (err.success){
            fav.clearTable();
            fav.fillTable(err.data);
            money.updateUsersList(err.data);
            fav.setMessage(false, "Пользователь успешно добавлен");
        } else {
            fav.setMessage(false, err.data);
        };
    })
};

fav.removeUserCallback = (deleteUserData) =>{
    ApiConnector.removeUserFromFavorites(deleteUserData, (err) =>{
        if (err.success){
            fav.clearTable();
            fav.fillTable(err.data);
            money.updateUsersList(err.data);
            fav.setMessage(false, "Пользователь успешно удален");
        } else {
            fav.setMessage(true, err.data);
        };
    })
};