/*  
  Напиши скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - заменяет значение premium на false
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/

// const user = {
//     name: "Mango",
//     age: 20,
//     hobby: "html",
//     premium: true,
//   };
  
//   const updateUser = () => {
//       user.mood = 'happy'
//       user.hobby = 'js'
//       user.premium = false

//       const keys = Object.keys(user);
//       for(const key of keys){
//           console.log('key', user[key]);
          
//         }
//         const entries = Object.entries(user);

//         for(const entrie of entries){
//             const key = entrie[0]
//             const value = entrie[1]

//             console.log(`key ${key}, value ${value}`);
            
//         }
//     };
//     updateUser();
//   console.log(user);
  

  /*
  Напиши скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

// const tasksCompleted = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99
// };

// const results = Object.keys(tasksCompleted);
// console.log(results);
// let maxResult = tasksCompleted[results[0]];
// console.log (maxResult);
// let maxResultKey = results[0];
// console.log(maxResultKey);

// for( const key of results){
//   if(maxResult<tasksCompleted[key]){
//     maxResult = tasksCompleted[key];
//     maxResultKey = key;
//   }
// }

// console.log(`${maxResultKey} : ${maxResult}`);


/*  
  Напиши функцию countProps(obj), считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/
// const countProps = function(obj){
//  return Object.keys(obj).length;
// }


// console.log(
//   countProps({})
// ); 

// console.log(
//   countProps({a: 1, b: 3, c: 'hello'})
// ); 

/*  
  Напиши функцию countTotalSalary(salaries). 
  
  Функция получает объект зарплат и считает общую сумму запрплаты работников.
  Возвращает общую сумму зарплаты.
  
  Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата"
*/
// const countTotalSalary = function(obj) {
//   const salaries = Object.values(obj);
//   let total = 0;
//   for(i = 0; i<salaries.length; i++){
//     total += salaries[i];
//   }
//   return total;
// }
// console.log(
//   countTotalSalary({})
// );

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80
//   })
// );

/*  
  Напиши функцию getAllPropValues(arr, prop), 
  которая получает массив объектов и имя ключа. 
  Возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/

// const users = [
//   { name: 'Poly', age: 7, mood: 'happy' },
//   { name: 'Mango', age: 4, mood: 'blissful'},
//   { name: 'Ajax', age: 3, mood: 'tired' }
// ];

// const getAllPropValues = function(arr, prop){
//   let propArr = [];
//   for (const el of arr){
    
//     if(el.hasOwnProperty(prop)){
//       propArr.push(el[prop])
//     }
//   }
//   return propArr;
// }

// // Вызовы функции для проверки
// console.log(
//   getAllPropValues(users, 'name')
// );

// console.log(
//   getAllPropValues(users, 'mood')
// );

// console.log(
//   getAllPropValues(users, 'active')
// );

/*  
  Расставь отсутствующие this в методах объекта account
*/

// const account = {
//   owner: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["order-1", "order-2", "order-3"],
//   changeDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost;
//     orders.push(order);
//   }
// };

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// const orders = account.getOrders();
// console.log(orders); // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, "order-4");
// console.log(account.balance); // 19000
// console.log(account.orders); // ['order-1', 'order-2', 'order-3', 'order-4']
        
        
/*  
  Расставь отсутствующие this
*/
// function Account(login, password, type = "regular") {
//   this.login = login;
//   this.password = password;
//   this.type = type;

//   this.changePassword = function(newPassword) {
//     this.password = newPassword;
//   };

//   this.getInfo = function() {
//     console.log(`
//       Login: ${login}, 
//       Pass: ${password}, 
//       Type: ${type}
//     `);
//   };
// }

// const account = new Account("Mango", "qwe123", "premium");

// console.log(account);
// console.log(account.login); // 'Mango'
// console.log(account.password); // 'qwe123'
// console.log(account.type); // 'premium'

// account.changePassword("asdzxc");
// console.log(account.password); // 'asdzxc'

// account.getInfo(); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'

/*  
  Напиши функцию-конструкор User для создания 
  пользователя со следующим свойствами:
    - name - строка (имя)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей, 
  будут переданы при вызове конструктора User.
  
  Добавь метод getInfo(), который, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`
*/



function User( {name, age, friends} ) {
  this.name = name;
  this.age = age;
  this.friends = friends;

  this.getInfo = function(){
   console.log (`User ${name} is ${age} years old and has ${friends} friends`);
  }
}
const mango = new User({ name: "Mango", age: 2, friends: 20 });
mango.getInfo(); // User Mango is 2 years old and has 20 friends

const poly = new User({ name: "Poly", age: 3, friends: 17 });
poly.getInfo(); // User Poly is 3 years old and has 17 friends
