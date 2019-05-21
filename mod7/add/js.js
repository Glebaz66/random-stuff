// const catList = document.querySelector('.categories');
// const catItem = catList.children;
// const arr = Array.from(catItem);

// arr.forEach(elem => {
//   const itemName = elem.firstChild
//   console.log(`Категория ${itemName.nodeValue}`);
//   const innerItems = elem.querySelector('ul');
//   console.log(`Количество вложеных элементов: ${innerItems.childElementCount}`);
// });
// // ===================================================================
// const list = document.querySelector('.list');

// const red = list.firstElementChild.style.color = 'red';
// const blue = list.lastElementChild.style.color = 'blue';
// //  ==========================================================================
// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node', '1', '2', '3'];

// const items = elements.map(elem => {
//   const item = document.createElement('li');
//   item.textContent = elem;
//   return item;
// });

// console.log(...items);

// // ==================================================================================

const galleryItems = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat"
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish"
  },
  {
    url:
      "https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Two Brown Hen and One Red Rooster"
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running"
  },
  {
    url:
      "https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Macaw Birds"
  },
  {
    url:
      "https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "2 Lion on Grass Field during Daytime"
  }
];