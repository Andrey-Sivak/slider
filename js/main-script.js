import { Slider } from "./new-script";


window.addEventListener('load', () => {

    const slider = new Slider({
        wrap: '#slider',
        nextArrow: '#next',
        prevArrow: '#prev'
    });

    slider.init();


});