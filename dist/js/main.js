/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main-script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main-script.js":
/*!***************************!*\
  !*** ./js/main-script.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ \"./js/slider.js\");\n\nwindow.addEventListener('load', () => {\n  const slider = new _slider__WEBPACK_IMPORTED_MODULE_0__[\"Slider\"]({\n    wrap: '#slider',\n    nextArrow: '#next',\n    prevArrow: '#prev'\n  });\n  slider.init();\n});\n\n//# sourceURL=webpack:///./js/main-script.js?");

/***/ }),

/***/ "./js/slider.js":
/*!**********************!*\
  !*** ./js/slider.js ***!
  \**********************/
/*! exports provided: Slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Slider\", function() { return Slider; });\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer */ \"./js/timer.js\");\n\n\n\n\nclass Slider {\n  constructor(options) {\n    this.isAnimationEnd = true;\n    this.selectors = {\n      wrap: document.querySelector(options.wrap),\n      slides: document.querySelector(options.wrap).children,\n      prevArrow: document.querySelector(options.prevArrow),\n      nextArrow: document.querySelector(options.nextArrow)\n    };\n    this.default = {\n      'autoplay': true,\n      'autoplayDelay': 3000,\n      'touch': true,\n      'pauseOnFocus': true,\n      'pauseOnHover': true\n    };\n    this.settings = Object.assign(this.default, options);\n    this.position = 0;\n    this.maxPosition = this.selectors.slides.length;\n    this.timer;\n    this.nextSlide = this.nextSlide.bind(this);\n  }\n\n  prevSlide() {\n    if (!this.isAnimationEnd) {\n      return;\n    }\n\n    this.isAnimationEnd = false;\n    --this.position;\n\n    if (this.position < 0) {\n      this.selectors.wrap.classList.add('s-notransition');\n      this.selectors.wrap.style['transform'] = `translateX(-${this.maxPosition}00%)`;\n      this.position = this.maxPosition - 1;\n    }\n\n    setTimeout(() => {\n      this.selectors.wrap.classList.remove('s-notransition');\n      this.selectors.wrap.style['transform'] = `translateX(-${this.position}00%)`;\n    }, 10);\n    this.selectors.wrap.addEventListener('transitionend', () => {\n      this.isAnimationEnd = true;\n    });\n  }\n\n  nextSlide() {\n    if (!this.isAnimationEnd) {\n      return;\n    }\n\n    this.isAnimationEnd = false;\n\n    if (this.position < this.maxPosition) {\n      ++this.position;\n    }\n\n    this.selectors.wrap.classList.remove('s-notransition');\n    this.selectors.wrap.style['transform'] = `translateX(-${this.position}00%)`;\n    this.selectors.wrap.addEventListener('transitionend', () => {\n      if (this.position >= this.maxPosition) {\n        this.selectors.wrap.style['transform'] = 'translateX(0)';\n        this.selectors.wrap.classList.add('s-notransition');\n        this.position = 0;\n      }\n\n      this.isAnimationEnd = true;\n    });\n  } // create switch arrows\n\n\n  createArrows() {\n    if (!this.selectors.prevArrow || !this.selectors.nextArrow) {\n      const prevArr = document.createElement('a');\n      prevArr.className = 'prev';\n      prevArr.setAttribute('id', 'prev');\n      prevArr.innerHTML = '&#10094;';\n      this.selectors.prevArrow = prevArr;\n      const nextArr = document.createElement('a');\n      nextArr.className = 'next';\n      nextArr.setAttribute('id', 'next');\n      nextArr.innerHTML = '&#10095;';\n      this.selectors.nextArrow = nextArr;\n      this.selectors.wrap.append(this.selectors.nextArrow, this.selectors.prevArrow);\n    }\n  }\n\n  build() {\n    if (this.settings.autoplay === true) {\n      this.timer = new _timer__WEBPACK_IMPORTED_MODULE_0__[\"Timer\"](this.nextSlide, this.settings.autoplayDelay);\n      this.timer.begin();\n    }\n\n    this.selectors.prevArrow.addEventListener('click', () => {\n      this.prevSlide();\n    });\n    this.selectors.nextArrow.addEventListener('click', () => {\n      this.nextSlide();\n    });\n  }\n\n  init() {\n    this.selectors.wrap.appendChild(this.selectors.wrap.children[0].cloneNode(true));\n    this.build();\n    this.createArrows();\n  }\n\n}\n\n\n\n//# sourceURL=webpack:///./js/slider.js?");

/***/ }),

/***/ "./js/timer.js":
/*!*********************!*\
  !*** ./js/timer.js ***!
  \*********************/
/*! exports provided: Timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Timer\", function() { return Timer; });\n\n\nclass Timer {\n  constructor(callback, delay) {\n    this.timerId;\n    this.start;\n    this.callback = callback;\n    this.remaining = delay;\n    this.resume = this.resume.bind(this);\n    this.pause = this.pause.bind(this);\n    this.become = this.become.bind(this);\n    this.begin = this.begin.bind(this);\n  }\n\n  resume() {\n    this.start = new Date();\n    this.timerId = setTimeout(() => {\n      this.resume();\n      this.callback();\n    }, this.remaining);\n  }\n\n  pause() {\n    clearTimeout(this.timerId);\n    this.remaining -= new Date() - this.start;\n  }\n\n  become() {\n    clearTimeout(this.timerId);\n    this.remaining = this.delay;\n    this.resume();\n  }\n\n  begin() {\n    this.resume();\n  }\n\n}\n\n\n\n//# sourceURL=webpack:///./js/timer.js?");

/***/ })

/******/ });