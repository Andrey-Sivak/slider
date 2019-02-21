'use strict'

// JSON с данными слайдера
let _json = {
    "1": {
      "name": "oneImg",
      "description": "text_one"
    },
    "2": {
      "name": "twoImg",
      "description": "text_two"
    },
    "3": {
      "name": "threeImg",
      "description": "text_three"
    },
    "4": {
      "name": "fourImg",
      "description": "text_four"
    },
    "5": {
      "name": "fiveImg",
      "description": "five"
    }
};

class Slider {

  constructor (options) {
    this.data = options.data;
    this.slideIndex = 1;
    this.wrapper = document.querySelector(options.wrapper);
    this.wrapperDots = document.querySelector(options.wrapperDots);
    this.wrapperImg = document.querySelector(options.wrapperImg);
  }

  // выводит html слайдов
  outputImg (data) {

    let nxtSibl = document.getElementById('prev');
      
    for(let key in data) {
      let div = document.createElement('div');
      div.className = 'slider__item slider__fade';

      let span = document.createElement('span');
      span.className = 'num';
      span.innerHTML = `${key}/${Object.keys(_json).length}`;

      let img = document.createElement('img');
      img.setAttribute('src', `img/${data[key].name}.jpg`);
      img.className = 'img';

      let p = document.createElement('p');
      p.className = 'discription';
      p.innerHTML = `${data[key].description}`;

      div.appendChild(span);
      div.appendChild(img);
      div.appendChild(p);

      this.wrapperImg.insertBefore(div, nxtSibl);
    }
  }

  //выводит точки навигации
  outputDots(data) {

    for(let key in data) {
      let span = document.createElement('span');
      span.className = 'dot';
      span.setAttribute('data-number', key);

      this.wrapperDots.appendChild(span);
    }
  }

  // для обработчика стрелок
  plusSlides (n) {
    this.showSlides(this.slideIndex += n);
  }

  // для обработчика точек
  currentSlide (n) {
    this.showSlides(this.slideIndex = +n);
  }

  // показывает слайды сответственно навигации
  showSlides (n) {

    let slides = document.getElementsByClassName('slider__item');
    let dots = document.getElementsByClassName('dot');

    if (n > slides.length) {this.slideIndex = 1} 
    if (n < 1) {this.slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
        dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[this.slideIndex - 1].style.display = 'block'; 
    dots[this.slideIndex - 1].classList.toggle('active');
  }

  //переключатель слайдов
  switchSlides() {

    this.wrapper.addEventListener('click', (e) => {

      let target = e.target;

      if(target.id == 'next') {
        this.plusSlides(1);
      } else if(target.id == 'prev') {
        this.plusSlides(-1);
      } else if(target.className == 'dot') {
        this.currentSlide(target.dataset.number);
      }
    })
  }

  initSlider () {
    this.switchSlides();
    this.outputImg(this.data);
    this.outputDots(this.data);
    this.showSlides(this.slideIndex);
  }
}

window.onload = function() {

  let slider = new Slider({
    data: _json,
    wrapperImg: '#slider',
    wrapper: '#slirer__wrap',
    wrapperDots: '#dots'
  });

  slider.initSlider();

}


