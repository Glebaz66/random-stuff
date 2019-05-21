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
    img: 'https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall-750x500.jpg'
    title: "Post title 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-1.com'
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-2.com'
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-3.com'
  }
];

const createImage = img => {
  const image = document.createElement('img');
  image.classList.add('post__image');
  image.setAttribute('srс', img); //img
  image.alt = 'some alt';

  return image;
}
console.log(createImage());

const createTitle = title => {
  const postTitle = document.createElement('h2')
  postTitle.classList.add('post__title');
  postTitle.textContent = title;

  return postTitle;
} 
console.log(createTitle());

const createText = text => {
  const postText = document.createElement('p');
  postText.classList.add('post__text');
  postText.textContent = text;

  return postText;
}
console.log(createText());

const createLink = link => {
  const linkBnt = document.createElement('a');
  linkBnt.classList.add('button');
  linkBnt.href = '#'; //link
  linkBnt.textContent = 'click'
  return linkBnt;
}
console.log(createLink());

const createPostCard = ({ img, title, text, link }) => {
  const postCard = document.createElement('div');
  postCard.classList.add('post');
  postCard.append(createImage(img), createTitle(title), createText(text), createLink(link));
  
  return postCard;
}

const createCards = posts => {
  return posts.map(post => createPostCard(post));
}

// const elem = posts.map(post => console.log('post', post));

const cards = createCards(posts);

console.log(cards);

document.querySelector('#root').append(...cards)