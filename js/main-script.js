import { Slider } from "./slider";


window.addEventListener('load', () => {

    const slider = new Slider({
        wrap: '#slider',
        nextArrow: '#next',
        prevArrow: '#prev',
        autoplay: true,
        autoplayDelay: 2500,
        pauseOnHover: true
    });

    slider.init();


});