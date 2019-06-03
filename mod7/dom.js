// 1. Модифицируйте готовую функцию createPostCard() из задания 
//     номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
//     чтобы она принимала объект post с данными для заполнения полей 
//     в карточке.
      
//   2. Создайте функцию createCards(posts), которая принимает массив
//     объектов-карточек, вызывает функцию createPostCard(post) столько
//     раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
//     массив DOM-элементов всех постов.
    
//   3. Повесьте все посты в какой-то уже существующий DOM-узел.
// */

const posts = [
  {
    img: 'https://placeimg.com/400/150/animal',
    title: 'Post title 1',
    alt: 'alt Post title 1',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!',
    link: 'link-1.com',
  },
  {
    img: 'https://placeimg.com/400/150/nature',
    title: 'Post title 2',
    alt: 'alt Post title 2',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!',
    link: 'link-2.com',
  },
  {
    img: 'https://placeimg.com/400/150/arch',
    title: 'Post title 3',
    alt: 'alt Post title 3',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!',
    link: 'link-3.com',
  },
  {
    img: 'https://placeimg.com/400/150/arch',
    title: 'Post title 3',
    alt: 'alt Post title 3',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!',
    link: 'link-3.com',
  },
  {
    img: 'https://placeimg.com/400/150/arch',
    title: 'Post title 3',
    alt: 'alt Post title 3',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!',
    link: 'link-3.com',
  },
];

const createTitle = title => {
  const postTitle = document.createElement('h2')
  postTitle.classList.add('post__title');
  postTitle.textContent = title;

  return postTitle;
}

const createImage = (img, alt) => {
  const image = document.createElement('img');
  image.classList.add('post__image');
  image.setAttribute('src', img); //img
  image.setAttribute('alt', alt);

  return image;
}
console.log(createImage());

// console.log(createTitle());

const createText = text => {
  const postText = document.createElement('p');
  postText.classList.add('post__text');
  postText.textContent = text;

  return postText;
}
// console.log(createText());

const createLink = link => {
  const linkBnt = document.createElement('a');
  linkBnt.classList.add('button');
  linkBnt.href = link; //link
  linkBnt.textContent = 'click';
  return linkBnt;
}
// console.log(createLink());

const createPostCard = ({ img, title, alt, text, link }) => {
  const postCard = document.createElement('div');
  postCard.classList.add('post');
  postCard.append(createTitle(title), createImage(img, alt), createText(text), createLink(link));
  return postCard;
}

const createCards = posts => posts.map(post => createPostCard(post));

// const elem = posts.map(post => console.log('post', post));

const cards = createCards(posts);

console.log(cards);

document.querySelector('#root').append(...cards)