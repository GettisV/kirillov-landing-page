const Modal = new HystModal({
    linkAttributeName: "data-hystmodal",
});

lightGallery(document.getElementById('animated-thumbnails-gallery'), {
    thumbnail: true,
});

function removeLoader() {
    const loader = document.querySelector('.loader-wrapper');

    loader.classList.add('hide');

    setTimeout(() => {
        loader.remove();
    }, 500)
}

function bodyShow() {
    const body = document.body;

    body.classList.add('show')
}

function scrollbarShow() {
    const url = '../styles/default/scrollbar-show.css'

    const cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = url;
    document.head.appendChild(cssLink);
}

document.addEventListener('DOMContentLoaded', () => {
    removeLoader();
    bodyShow();
    scrollbarShow();
})
