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

/*class Slider {

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
}*/

window.onload = function() {

 /* let slider = new Slider({
    data: _json,
    wrapperImg: '#slider',
    wrapper: '#slirer__wrap',
    wrapperDots: '#dots'
  });

  slider.initSlider();*/

  (function() {

    let _json = {
      "1": {
        "name": "Владимир Кузнецов",
        "position": "Директор магазина",
        "comment": "Оборудовал здесь свой магазин — очень функционально получилось,. Быстро и недорого",
        "img": "http://www.gkgorsia.ru/wp-content/uploads/2016/01/otz1.png"
      },
      "2": {
        "name": "Дмитрий Иванов",
        "position": "Управляющий",
        "comment": "Хотели бы поблагодарить всех сотрудников за внимательное отношение к нашему заказу! Очень довольны результатом!",
        "img": "http://www.gkgorsia.ru/wp-content/uploads/2016/01/otz2.png"
      },
      "3": {
        "name": "Анна Владимирова",
        "position": "Директор",
        "comment": "Я оставила заявку сайте и осталась очень довольна. Со мной менеджер связался сразу, выставили счет через час, до транспортной компании доставили через день. Все оборудование чистое аккуратное. Очень довольна компанией. Спасибо большое менеджерам. Буду вашу фирму всем рекомендовать.",
        "img": "http://www.gkgorsia.ru/wp-content/uploads/2016/01/otz3.png"
      },
      "4": {
        "name": "Алексей Михайлов",
        "position": "Менеджер",
        "comment": "Цены низкие, по моему опыту самые низкие в Москве. Продавцы помогли подобрать оборудование, собрали комплект прилавков и витрин. Забирали мы сами, поэтому проблем с доставкой не было. Спасибо!",
        "img": "http://www.gkgorsia.ru/wp-content/uploads/2016/01/otz4.png"
      }    
    };

    const wrap = document.createElement('div');
    wrap.classList.add('slider__wrap');
    const slider = document.createElement('div');
    slider.classList.add('slider');

    for(let key in _json) {
      const divWrapItem = document.createElement('div');
      divWrapItem.className = 'slider__item slider__fade';

      const divWrapImg = document.createElement('div');
      divWrapImg.classList.add('slider__img');
      const img = document.createElement('img');
      img.setAttribute('src', _json[key].img);
      img.classList.add('img');
      divWrapImg.appendChild(img);

      const divWrapText = document.createElement('div');
      const name = document.createElement('p');
      name.classList.add('slider__name');
      name.innerHTML = _json[key].name;
      const position = document.createElement('p');
      position.classList.add('slider__position');
      position.innerHTML = _json[key].position;
      const comment = document.createElement('p');
      comment.classList.add('slider__comment');
      comment.innerHTML = _json[key].comment;
      divWrapText.appendChild(name);
      divWrapText.appendChild(position);
      divWrapText.appendChild(comment);

      divWrapItem.appendChild(divWrapImg);
      divWrapItem.appendChild(divWrapText);

      slider.appendChild(divWrapItem);
    }

    const prev = document.createElement('a');
    prev.classList.add('prev')
    prev.innerHTML = '&#10094;';

    const next = document.createElement('a');
    next.classList.add('next')
    next.innerHTML = '&#10095;';

    slider.appendChild('prev');
    slider.appendChild('next');



  })()

}


