/*
  Напиши функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email. 
  
  В prototype функции-конструктора добавь метод getInfo(), 
  который выводит в консоль значения полей login и email. 
  
  Обрати внимание, метод всего один, в поле prototype функции-конструктора, 
  а использовать его смогут все экземпляры, по ссылке.
  
  Создать несколько экземпляров с разными значениями свойств, вывесди их в консоль.
*/

// class Account{
//   constructor (login, email) {
//     this.login = login;
//     this.email = email;
//   }
//   getInfo(){
//     return console.log(`this is ${this.login} and email is ${this.email}`);
//   }
// }
// const Mangozedog = new Account('Mangozedog', 'mango@dog.woof');

// console.log(Account.prototype.getInfo); // function
// Mangozedog.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

/*
  Напиши ES6 класс StringBuilder.
  
  На вход (в конструкторе) он получает один параметр string - строку,
  которую записывает в свойство _value.
  
  Добавь классу следующие методы:
  
    - геттер value - возвращает текущее значение поля _value
  
    - append(str) - получает парметр str (строку) и добавляет ее в конец _value
    
    - prepend(str) - получает парметр str (строку) и добавляет ее в начало value
  
    - pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
*/
// class StringBuilder{
//   constructor(string){
//       this.value = string;
//   }

//   getValue(){
//     return console.log(this.value);
//   }

//   append(string){
//     this.value = this.value + string;
//     return this.value;
//   }

//   prepend(string){
//     this.value = string + this.value;
//     return this.value
//   }
  
//   pad(string){
//     this.value = string + this.value + string;
//     return this.value
//   }

// }
// const builder = new StringBuilder('.');
// builder.getValue()

// builder.append('^'); 
// console.log(builder.value); // '.^'

// builder.prepend('^'); 
// console.log(builder.value); // '^.^'

// builder.pad('='); 
// console.log(builder.value); // '=^.^='

/*
 * Напиши класс Car с указанными свойствами и методами
*/

class Car {
  constructor({ maxSpeed = 0, price }) {
    /*
      Добавь свойства:
        - speed - для отслеживания текущей скорости, изначально 0.
        - maxSpeed - для хранения максимальной скорости 
        - running - для отслеживания заведен ли автомобиль, возможные значения true или false. Изначально false.
        - distance - содержит общий киллометраж, изначально с 0
    */
   this.speed = 0;
   this.maxSpeed = maxSpeed;
   this.running = false;
   this.distance = 0;
   
   this._price = price;
  }
  /*
  * Добавь к классу Car из предыдущего задания статический
  * метод getSpecs, который принимает объект-машину как параметр
  * и выводит в консоль значения полей maxSpeed, speed, running и distance.
  */
  static getSpecs(car){
    console.log(`max speed is ${car.maxSpeed}, car speed is: ${car.speed}, is car running: ${car.running}, car driven ${car.distance}`);
    
  }
  turnOn() {
    // Добавь код для того чтобы завести автомобиль
    // Просто записывает в свойство running значание true
    return this.running = true;
  }

  turnOff() {
    // Добавь код для того чтобы заглушить автомобиль
    // Просто записывает в свойство running значание false
    return this.running = false;
  }

  accelerate(spd) {
    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed
    return spd < this.maxSpeed ? this.speed = spd : console.log(`current speed ${spd} greater than max speed ${this.maxSpeed}`);
  }
  
  decelerate(spd) {
    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed и не меньше нуля
    return spd < this.maxSpeed && spd > 0 ? this.speed = spd : console.log(`${this.speed} ${spd}`);
  }

  drive(hours) {
    // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
    // но только в том случае если машина заведена!
    return this.running === true ? this.distance = hours * this.speed : this.distance;
  }
  /*
  * Добавь классу Car свойство цены автомобиля, назови его сам.
  * Добавь геттер и сеттер value, который будет работать с свойством цены автомобиля.
  */
  get price(){
    return this._price;
  }

  set price (price){
    this._price = price;
  }

}

const car = new Car({ maxSpeed: 300 });
console.log('turnOn', car.turnOn());
console.log('accelerate', car.accelerate(100));
console.log('decelerate', car.decelerate(100));
console.log('drive', car.drive(3));

Car.getSpecs(car);

const audi = new Car({ maxSpeed: 50, price: 2000 });
console.log(audi);

console.log(audi.price); // 2000

audi.price = 4000;
console.log(audi.price); // 4000
