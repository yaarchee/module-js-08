import  arrGallery from './gallery-items.js';
import  makeElementsGallery from './makeGallery.js';
import  Modal from './Modal.js';



const galleryRef = document.querySelector('.js-gallery');
const fullScreenSlide = document.querySelector('.lightbox__image');


const arrElements = makeElementsGallery(arrGallery);
const modal = new Modal('.js-lightbox', fullScreenSlide, arrGallery);



galleryRef.append(...arrElements);
galleryRef.addEventListener('click', showFullScreen);




function showFullScreen(event) {
    event.preventDefault();
    fullScreenSlide.src = '';
    const  { target } =  event;
    if (target.nodeName === 'IMG'){
        modal.openModal(target.dataset.index);
        fullScreenSlide.src = target.dataset.source;
        fullScreenSlide.dataset.index = target.dataset.index;
        fullScreenSlide.alt = target.alt;
    }
}



