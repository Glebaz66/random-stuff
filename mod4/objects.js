const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    chicken: 50,
    cheese: 40,
    meat: 100,
    close: 20,
    phone: 140,
    gum: 5,
  };

  Cashier = function (name, productDatabase) {
    this.name = name;
    this.productDatabase = productDatabase;
    this.customerMoney = 0;

    this.setCustomerMoney = function(value){
      return this.customerMoney = value;
    }

    this.countTotalPrice = function(order){
      let summ = 0;
      let total = 0;

      const arrProduct = Object.entries(this.productDatabase);
      const arrOrder = Object.entries(order);

      for (let elemOrder of arrOrder){
        for(let elemProduct of arrProduct){
          if(elemProduct[0] === elemOrder[0]) summ = elemProduct[1] * elemOrder[1];
        }
        total += summ;
      }
      return total;
    }

    this.countChange= function(){
      let moneyAmount = 0;
      if(totalPrice < this.customerMoney){
        moneyAmount = this.customerMoney - totalPrice;
        
        
        return moneyAmount;
      } else {
        return null;
      }
    }


    this.onSuccess = function(){
      alert(`Спасибо за покупку, ваша сдача ${change}!`);
    }

    this.onError = function(){
        alert(`Очень жаль, вам не хватает денег на покупки`);
    }

    this.reset = function(){
      this.customerMoney = 0;
    }
  }
  const order = {
    milk: 2,
    apples: 1,
    cheese: 1,
    bread: 2,
    meat: 1,
    close: 2,
    phone: 1,
    gum: 2,
};
  const mango = new Cashier('Mango', products);

// Проверяем исходные значения полей
console.log(mango.name); // Mango
console.log(mango.productDatabase); // ссылка на базу данных продуктов (объект products)
console.log(mango.customerMoney); // 0

// Вызываем метод countTotalPrice для подсчета общей суммы
// передавая order - список покупок пользователя
const totalPrice = mango.countTotalPrice(order);

console.log(totalPrice);

mango.setCustomerMoney(500);

// Проверяем что в поле с деньгами пользователя
console.log(mango.customerMoney); // 300

// Вызываем countChange для подсчета сдачи
const change = mango.countChange();

// Проверяем что нам вернул countChange
console.log(change); // 190

// Проверяем результат подсчета денег
if(change !== null) {
   // При успешном обслуживании вызываем метод onSuccess
  mango.onSuccess(change); // Спасибо за покупку, ваша сдача 190
} else {
  // При неудачном обслуживании вызываем метод onError   
  mango.onError(); // Очень жаль, вам не хватает денег на покупки
}

// Вызываем reset при любом исходе обслуживания
mango.reset();

// Проверяем значения после reset
console.log(mango.customerMoney); // 0
