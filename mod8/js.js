const galleryItems = [
    { preview: 'img/preview-1.jpg', fullview: 'img/fullview-1.jpg', alt: "alt text 1" },
    { preview: 'img/preview-2.jpg', fullview: 'img/fullview-2.jpg', alt: "alt text 2" },
    { preview: 'img/preview-3.jpg', fullview: 'img/fullview-3.jpg', alt: "alt text 3" },
    { preview: 'img/preview-4.jpg', fullview: 'img/fullview-4.jpg', alt: "alt text 4" },
    { preview: 'img/preview-5.jpg', fullview: 'img/fullview-5.jpg', alt: "alt text 5" },
    { preview: 'img/preview-6.jpg', fullview: 'img/fullview-6.jpg', alt: "alt text 6" },
  ];

  
const gallery = document.querySelector('.js-image-gallery');

const createFullView = ({fullview, alt}) => {
    return `<div class="fullview">
                <div class="fullview-wrap">
                    <img src="${fullview}" alt="${alt}" class="fullview-img">
                </div>
            </div>`
}

const previewBlock = galleryItems.reduce((elem,{preview, fullview, alt}) => elem + `
<li>
    <img src="${preview}" data-fullview="${fullview}" alt="${alt}" class="js-img">
</li>
`, '');
const createPreview = () => {
    return `<ul class="preview">${previewBlock}</ul>`
}

const changeView = (e) =>{
    const target = e.target;
    const fullView = gallery.querySelector('.fullview-img');
    const preview = target.dataset.fullview;
    if(target.classList.contains('js-img')){
        fullView.setAttribute('src', preview)
    }
    
}

gallery.insertAdjacentHTML('afterbegin', createPreview());
gallery.insertAdjacentHTML('afterbegin', createFullView(galleryItems[0]));

gallery.addEventListener('click', changeView);


