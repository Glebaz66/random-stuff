startHotel = function(){
    const sharm = 15;
    const hurgada = 25;
    const taba = 6;
    
    const userInput = prompt('How many guest');
    let vacantHotel;
    
    if (userInput === null) {
        alert('please come again');
    
    } else if ((userInput % 1) !==0){
        alert('Ошибка ввода');
    
    } else if (userInput <= 0){
        alert('Ошибка ввода');
    
    } else {
    
        if(userInput <= sharm){
            vacantHotel = confirm('есть место в группе sharm, согласны ли вы быть в этой группе?');
    
            if(vacantHotel === true){
                alert('happy hollyday in sharm!');
            } else {
                alert('please come again');
            }
        }
    
        if(userInput <= hurgada){
            vacantHotel = confirm('есть место в группе hurgada, согласны ли вы быть в этой группе?');
    
            if(vacantHotel === true){
                alert('happy hollyday in hurgada!');
            } else {
                alert('please come again');
            }
        }
    
        if(userInput <= taba){
            vacantHotel = confirm('есть место в группе taba, согласны ли вы быть в этой группе?');
    
            if(vacantHotel === true){
                alert('happy hollyday in taba!');
            } else {
                alert('please come again');
            }
        }
    
        else {
            alert('no free rooms')
        }
    }

}

