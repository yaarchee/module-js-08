export default class Modal{
    constructor(selector, fullScreenSlide, arrGallery) {
        this.$el =  document.querySelector(selector);
        this.fullScreenSlide = fullScreenSlide;
        this.arrGallery = arrGallery;
        this.currentIndexImg = 0;
        this.closeModal =this.closeModal.bind(this);
        this.openModal =this.openModal.bind(this);
        this.nextImg =this.nextImg.bind(this);
        this.prevImg =this.prevImg.bind(this);

        this.init();
    }

    openModal(indexImg){
        window.addEventListener('keydown', this.closeModal);
        window.addEventListener('keydown', this.nextImg);
        window.addEventListener('keydown', this.prevImg);
        this.$el.classList.toggle('is-open');
        this.currentIndexImg =  +indexImg;
        console.log(this.fullScreenSlide, " open modal");
    }

    closeModal(event){
        if(event.target.nodeName === "BUTTON" || event.code === 'Escape'|| event.target.className === 'lightbox__content'){
            this.$el.classList.toggle('is-open');
            window.removeEventListener('keydown', this.closeModal);
            window.removeEventListener('keydown', this.nextImg);
            window.removeEventListener('keydown', this.prevImg);
        }
    }

    nextImg(event){
        if (event.code === 'ArrowRight') {
            if((this.currentIndexImg+1) > this.arrGallery.length-1 ){
                this.currentIndexImg = 0;
                this.fullScreenSlide.src = this.arrGallery[this.currentIndexImg].original;
            }else{
                this.currentIndexImg += 1 ;
                this.fullScreenSlide.src = this.arrGallery[this.currentIndexImg].original;

            }
            console.log("next", this.currentIndexImg);
        }
    }
    prevImg(event){
        if (event.code === 'ArrowLeft'){
            if((this.currentIndexImg-1)  < 0){
                this.currentIndexImg = this.arrGallery.length-1 ;
                this.fullScreenSlide.src = this.arrGallery[this.currentIndexImg].original;
            }else{
                this.currentIndexImg -= 1 ;

                this.fullScreenSlide.src = this.arrGallery[this.currentIndexImg].original;
            }
            console.log("prev", this.currentIndexImg);
        }
    }


    init(){
        this.$el.addEventListener('click', this.closeModal );

    }
}