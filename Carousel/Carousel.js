class Carousel {
    constructor(element){
        this.element = element;
        this.LeftArrow = this.element.querySelector('.left-button');
        this.RightArrow = this.element.querySelector('.right-button');
        this.imgs = document.querySelectorAll('.carousel-caption');
        this.index = 0;
        this.imgs[this.index].style.display = "block";
        this.RightArrow.addEventListener("click", () => this.moveright());
        this.LeftArrow.addEventListener("click", () => this.moveleft());
        
    }

    moveright() {
        this.imgs[this.index].style.display = "none";
       
        if (this.imgs.length === this.index+1) {
            this.index = 0;

        }
        else {
            this.index += 1;
 
        }        
        this.imgs[this.index].style.display = "block";

    }

    moveleft() {
        this.imgs[this.index].style.display = "none";
        this.index -=1;
        this.imgs[this.index].style.display = "block";

        if (this.imgs.length === this.index-1) {
            this.index = 0;

        }
        else {
            this.index += 1;
 
        }        
        this.imgs[this.index].style.display = "block";
    }
    
}

let carousel = new Carousel(document.querySelector('.carousel'));
console.log(carousel.imgs);