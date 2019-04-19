startLogin = function(){
    const adminLogin = 'admin';
    const adminPassword = 'm4ngo1zh4ackz0r';
    const userLoginInput = prompt('enter login');
    if (userLoginInput === null) {
        alert('Отменено пользователем!');
    
    } else if (userLoginInput !== adminLogin){
        alert('Доступ запрещен, неверный логин!');
    } else {
        const userPassInput = prompt('enter pass');
        if (userPassInput !== adminPassword){
            alert('Доступ запрещен, неверный пароль!')
        } else if (userPassInput === null){
            alert('Отменено пользователем!');
        }
        if(userLoginInput === adminLogin && userPassInput === adminPassword){
            alert('welcome')
        }
    }
}
