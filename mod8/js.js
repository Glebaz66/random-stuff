const galleryItems = [{
        preview: 'https://picsum.photos/1280/960?random=1',
        fullview: 'https://picsum.photos/1280/960?random=1',
        alt: "alt text 1"
    },
    {
        preview: 'https://picsum.photos/1280/960?random=2',
        fullview: 'https://picsum.photos/1280/960?random=2',
        alt: "alt text 2"
    },
    {
        preview: 'https://picsum.photos/1280/960?random=3',
        fullview: 'https://picsum.photos/1280/960?random=3',
        alt: "alt text 3"
    },
    {
        preview: 'https://picsum.photos/1280/960?random=4',
        fullview: 'https://picsum.photos/1280/960?random=4',
        alt: "alt text 4"
    },
    {
        preview: 'https://picsum.photos/1280/960?random=5',
        fullview: 'https://picsum.photos/1280/960?random=5',
        alt: "alt text 5"
    },
    {
        preview: 'https://picsum.photos/1280/960?random=6',
        fullview: 'https://picsum.photos/1280/960?random=6',
        alt: "alt text 6"
    },
];

const gallery = document.querySelector('.js-image-gallery');



const createFullView = ({
    fullview,
    alt
}) => {
    return `<div class="fullview">
            <div class="fullview-wrap">
                <img src="${fullview}" alt="${alt}" class="fullview-img">
            </div>
        </div>`
}

const previewBlock = galleryItems.reduce((elem, {
    preview,
    fullview,
    alt
}) => elem + `
<li>
    <img src="${preview}" data-fullview="${fullview}" alt="${alt}" class="js-img active">
</li>
`, '');
const createPreview = () => {
    return `<ul class="preview">${previewBlock}</ul>`

}

const changeView = (e) => {
    const target = e.target;
    const fullView = gallery.querySelector('.fullview-img');
    const preview = target.dataset.fullview;
    if (target.classList.contains('js-img')) {
        fullView.setAttribute('src', preview)
    }

}
gallery.insertAdjacentHTML('afterbegin', createPreview());
gallery.insertAdjacentHTML('afterbegin', createFullView(galleryItems[0]));


gallery.addEventListener('click', changeView);