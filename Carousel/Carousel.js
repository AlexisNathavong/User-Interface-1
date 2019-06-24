class Carousel {
    constructor(element){
        this.element = element;
        this.LeftArrow = this.element.querySelector('.left-button');
        this.RightArrow = this.element.querySelector('.right-button');
        this.imgs = document.querySelectorAll('.carousel img');
        this.index = 0;
        this.imgs[0].style.display = "block";
        
    }
}

let carousel = new Carousel(document.querySelector('.carousel'));