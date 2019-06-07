'use strick'
/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/
// const btn = document.querySelector('.button');
// const clickCount = () => btn.textContent++;
// btn.addEventListener('click', clickCount);

// =============================================================
/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.
*/
// const sumBtn = document.querySelector('button[data-action="add"]');

// const getResult = () =>{
//   const result = document.querySelector('.result');
//   const firstInput = document.querySelector('.first-input');
//   const secondInput = document.querySelector('.second-input');
//   result.textContent = Number(firstInput.value) + Number(secondInput.value);
//   firstInput.value = null;
//   secondInput.value = null;
// }

// sumBtn.addEventListener('click', getResult);

// =============================================================
/*
  Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 
  
  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
  - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
  - Привяжите вызовы методов и значение счетчика к разметке
*/
// class Counter {
//   constructor(onChange){
//     this.onChange = onChange();
//   }
//   val = val.value;
//   increment(){
//   }
//   decrement(){
//   }
// } как сделать через класс!!!

// const sub = document.querySelector('[data-action="sub"]');
// const add = document.querySelector('[data-action="add"]');
// const val = document.querySelector('.value');
// let counter = 0;

// const increment = () => {
//   if(counter > 0){
//     counter--;
//     val.textContent = counter;
//   }
// }
// const decrement = () => {
//   counter++;
//   val.textContent = counter;
// }
// sub.addEventListener('click', increment);
// add.addEventListener('click', decrement);

// =============================================================
/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Submit" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
*/

// const result = document.querySelector('.result');
// const options = document.querySelector('.options');
// const btn = document.querySelector('[type="submit"]')
// const sendForm = (e) => {
//   e.preventDefault();
//   const checked = options.querySelector('input:checked');
//   result.textContent = `Result: ${checked.value}`
// }

// btn.addEventListener('click', sendForm)


// =============================================================
/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Обязательно используйте делегирование событий.
*/
// const img = document.querySelector('.images');
// const showSrc = (e) =>{
//   const target = e.target;
//   if(target.nodeName === 'IMG'){
//     alert(target.currentSrc);
//   } else {alert('not IMG')};
// }
// img.addEventListener('click', showSrc);

// =============================================================
// const list = document.querySelector('.list');

// const delItem = (e) => {
//   const target = e.target;
//   if(target.nodeName === 'BUTTON'){
//     clickBtn(target);
//   } 
// }
// const clickBtn = (target) =>{
//   target.parentNode.remove();
//   console.log(`remoted item: ${target.parentNode.textContent}`);
// }
// list.addEventListener('click', delItem);

// =============================================================
/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  Если введено подходящее количество, то outline инпута становится зеленым, 
  если неправильное - красным. 
*/
// const inputList = document.querySelector('.input-list');

// const handleFocus = (e) => {
//   const target = e.target;
//   handleFocusInput(target);
// }

// const handleFocusInput = target =>{
//   const inputLenght = Number(target.dataset.length);
  
//   if(target.value.length === inputLenght){
//     target.classList.add('valid');
//     target.classList.remove('invalid');
    
//   } else {
//     target.classList.remove('valid');
//     target.classList.add('invalid');
//   }
// }
// inputList.addEventListener('blur', handleFocus, true)
// =============================================================
/*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в p.message рендерит строку "Input is in focus!"
    - При наборе текста в инпуте (событие input), текущее его значение должно 
      отображаться в p.input-value 
*/
// const input = document.querySelector('.input');
// const p = document.querySelector('.input-value');

// const handleFocus = () =>{
//   p.textContent = 'Input is in focus!'
// }

// const handleInput = () =>{
//   p.textContent = `Current input value: ${input.value}`;
// }

// input.addEventListener('blur', handleFocus, true)
// input.addEventListener('input', handleInput, true)
// =============================================================
/* По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal", модальное окно с классом modal, 
    должно появляться. Для этого необходимо убрать класс modal-hidden. 
    Для выбора модального модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal")
    или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.
*/
// const btnOpen = document.querySelector('[data-action="open-modal"]');
// const closeOpen = document.querySelector('[data-action="close-modal"]');
// const modal = document.querySelector('.js-modal-backdrop');

// const openModal = () => {
//   modal.classList.remove('modal-hidden');
// }

// const closeModal = () => {
//   modal.classList.add('modal-hidden');
// }

// const closeBlackdropModal = (e) => {
//   const target = e.target;
//   if(target === modal){
//     modal.classList.add('modal-hidden');
//   }
// }

//  btnOpen.addEventListener('click', openModal);
//  closeOpen.addEventListener('click', closeModal);
//  modal.addEventListener('click', closeBlackdropModal);
// =============================================================

const menu = document.querySelector('.js-menu');
console.log(menu);

const handleMenuClick = (e) => {
  const target = e.target;
  if(target.nodeName !== 'A'){return};
  handleLinkClick(target);
}

const handleLinkClick = (target) =>{
  
  const activeLink = document.querySelector('a.menu-link.active');
  console.log(activeLink);
  activeLink.classList.remove('.active')
  
}

menu.addEventListener('click', handleMenuClick);
