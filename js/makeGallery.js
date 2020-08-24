

export default  (arrGallery)=>{
        let index = 0;
         return arrGallery.map(element =>{
            const liRef = document.createElement('li');
                liRef.classList.add('gallery__item');
            const linkRef = document.createElement('a');
                linkRef.classList.add('gallery__link');
                linkRef.href = element.original;
            const imgRef = document.createElement('img');
                imgRef.classList.add('gallery__image');
                imgRef.src = element.preview;
                imgRef.dataset.source = element.original;
                imgRef.dataset.index = index;
                imgRef.alt = element.description;
            linkRef.appendChild(imgRef);
             index++;
            return liRef.appendChild(linkRef);

        })

}

