'use strict';

class Slider {

    constructor( options ) {
        this.selectors = {
            wrap: document.querySelector(options.wrap),
            slides: document.querySelector(options.wrap).children,
            prevArrow: document.querySelector(options.prevArrow),
            nextArrow: document.querySelector(options.nextArrow)
        };
        this.privates = {
            'autoplay': true,
            'autoplayDelay': 3000,
            'touch': true,
            'pauseOnFocus': true,
            'pauseOnHover': true
        };
    }

    // create switch arrows
    createArrows() {
        if( !this.selectors.prevArrow || !this.selectors.nextArrow ) {

            const prevArr = document.createElement('a');
            prevArr.className = 'prev';
            prevArr.setAttribute('id', 'prev');
            prevArr.innerHTML = '&#10094;';
            this.selectors.prevArrow = prevArr;

            const nextArr = document.createElement('a');
            nextArr.className = 'next';
            nextArr.setAttribute('id', 'next');
            nextArr.innerHTML = '&#10095;';
            this.selectors.nextArrow = nextArr;

            this.selectors.wrap.append(this.selectors.nextArrow, this.selectors.prevArrow);
        }
    }

    init() {
        this.createArrows();
        // console.log(this.privates.autoplay);
    }

}

export { Slider };

