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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _new_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-script */ \"./js/new-script.js\");\n\nwindow.addEventListener('load', () => {\n  const slider = new _new_script__WEBPACK_IMPORTED_MODULE_0__[\"Slider\"]({\n    wrap: '#slider',\n    nextArrow: '#next',\n    prevArrow: '#prev'\n  });\n  slider.init();\n});\n\n//# sourceURL=webpack:///./js/main-script.js?");

/***/ }),

/***/ "./js/new-script.js":
/*!**************************!*\
  !*** ./js/new-script.js ***!
  \**************************/
/*! exports provided: Slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Slider\", function() { return Slider; });\n\n\nclass Slider {\n  constructor(options) {\n    this.selectors = {\n      wrap: document.querySelector(options.wrap),\n      slides: document.querySelector(options.wrap).children,\n      prevArrow: document.querySelector(options.prevArrow),\n      nextArrow: document.querySelector(options.nextArrow)\n    };\n    this.privates = {\n      'autoplay': true,\n      'autoplayDelay': 3000,\n      'touch': true,\n      'pauseOnFocus': true,\n      'pauseOnHover': true\n    };\n  } // create switch arrows\n\n\n  createArrows() {\n    if (!this.selectors.prevArrow || !this.selectors.nextArrow) {\n      const prevArr = document.createElement('a');\n      prevArr.className = 'prev';\n      prevArr.setAttribute('id', 'prev');\n      prevArr.innerHTML = '&#10094;';\n      this.selectors.prevArrow = prevArr;\n      const nextArr = document.createElement('a');\n      nextArr.className = 'next';\n      nextArr.setAttribute('id', 'next');\n      nextArr.innerHTML = '&#10095;';\n      this.selectors.nextArrow = nextArr;\n      this.selectors.wrap.append(this.selectors.nextArrow, this.selectors.prevArrow);\n    }\n  }\n\n  init() {\n    this.createArrows(); // console.log(this.privates.autoplay);\n  }\n\n}\n\n\n\n//# sourceURL=webpack:///./js/new-script.js?");

/***/ })

/******/ });