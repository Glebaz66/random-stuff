const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    chicken: 50,
    cheese: 40,
  };

  Cashier = function (name, productDatabase) {
    this.name = name;
    this.productDatabase = productDatabase;
    this.customerMoney = customerMoney = 0;

    this.customerMoney = function(value){
      return this.customerMoney = value;
    }

    this.countTotalPrice = function(order){
      let summ = 0;
      let total = 0;

      const arrProduct = Object.entries(this.productDatabase);
      const arrOrder = Object.entries(order);

      for(let elemOrder of arrOrder){
        for (let elemProduct of arrProduct){
          if(elemProduct[0] === elemOrder[0]) summ = elemProduct[1] * elemOrder[1];
          total += summ;
        }
      }
      return total;
    }


    this.onSuccess = function(change){
      alert(`Спасибо за покупку, ваша сдача ${change}!`);
    }

    this.onError = function(customerMoney, totalPrice){
      if (customerMoney < totalPrice){
        alert('Очень жаль, вам не хватает денег на покупки');
      }
    }

    this.reset = function(){
      this.customerMoney = 0;
    }
  }