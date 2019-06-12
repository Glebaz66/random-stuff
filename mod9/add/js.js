/*
 * Есть массив цветов в hex-формате и кнопки Start и Stop. 
 * 
 * Напиши скрипт, который после нажатия кнопки Start, раз в секунду
 * меняет цвет фона body на случайное значение из массива. Используй
 * инлайн-стиль для изменения background-color.
 *
 * При нажатии на кнопку Stop, изменении цвета фона должно останавливаться.
 * 
 * Учти, что на кнопку Start можно нажать бесконечное количество раз.
 * Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
*/

const colors = [
  // "#FFFFFF",
  // "#2196F3",
  // "#4CAF50",
  // "#FF9800",
  // "#009688",
  // "#795548",
  'url(https://picsum.photos/1280/960?random=1)',
  'url(https://picsum.photos/1280/960?random=2)',
  'url(https://picsum.photos/1280/960?random=3)',
  'url(https://picsum.photos/1280/960?random=4)',
  'url(https://picsum.photos/1280/960?random=5)',
  'url(https://picsum.photos/1280/960?random=6)',
  'url(https://picsum.photos/1280/960?random=7)',
  'url(https://picsum.photos/1280/960?random=8)',
];

const start = document.querySelector('button[data-action="start"]');
const stop = document.querySelector('button[data-action="stop"]');
const bodyColor = document.querySelector('body');

const сhangeColor = () => {
    const colorPicker = Math.floor(Math.random() * (colors.length)); 
    // bodyColor.style.backgroundColor = colors[colorPicker];
    bodyColor.style.backgroundImage = colors[colorPicker];
    start.style.backgroundColor = '#ffc7c2';
    start.style.cursor = 'not-allowed';
    start.setAttribute('disabled', true);
    
  }
  let counter;
  
  const startChangeColor = () =>{
    counter = setInterval(сhangeColor, 1500);
    
  }
  const stopChangeColor = () => {
    clearInterval(counter);
    bodyColor.style.backgroundImage = 'none'
    start.style.backgroundColor = '#f44336';
    start.setAttribute('disabled', false);
  }

start.addEventListener('click', startChangeColor);
stop.addEventListener('click', stopChangeColor);
// ======================================================