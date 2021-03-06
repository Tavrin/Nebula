/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Nebula.js":
/*!***********************!*\
  !*** ./src/Nebula.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Nebula\": () => (/* binding */ Nebula)\n/* harmony export */ });\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ \"./src/Utils.js\");\n/* harmony import */ var _Renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Renderer */ \"./src/Renderer.js\");\n\r\n\r\n\r\nclass Nebula {\r\n    constructor(config) {\r\n        this.config = config;\r\n        this.storyData = null;\r\n        this.gameData = {};\r\n        this.init();\r\n        this.renderer = new _Renderer__WEBPACK_IMPORTED_MODULE_1__.Renderer(config);\r\n\r\n    }\r\n\r\n    async init() {\r\n        this.storyData = await _Utils__WEBPACK_IMPORTED_MODULE_0__.Utils.getJsonData(this.config.storyData.path);\r\n        if ('local' === this.config.storage) {\r\n            if (!window.localStorage.getItem('Nebula') || false === config.options.persist) {\r\n                this.initializeGameData();\r\n            } else {\r\n                this.gameData = window.localStorage.getItem('Nebula');\r\n            }\r\n        }\r\n\r\n        this.render(this.storyData, this.gameData);\r\n    }\r\n\r\n    initializeGameData() {\r\n        window.localStorage.removeItem('Nebula');\r\n        this.gameData.currentPage = 1;\r\n        this.gameData.inventory = [];\r\n        this.gameData.currentHealth = this.storyData.defaults.health;\r\n        let nebula = {\r\n            gameData:  this.gameData,\r\n            storyData:  this.storyData\r\n        }\r\n        this.gameData = window.localStorage.setItem('Nebula', JSON.stringify(nebula));\r\n        console.log(window.localStorage);\r\n    }\r\n\r\n    render() {\r\n        this.renderer.initComponents();\r\n    }\r\n\r\n    resetGame() {\r\n        if ('local' === this.config.storage) {\r\n            window.localStorage.removeItem('Nebula');\r\n        }\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://js-game-framework/./src/Nebula.js?");

/***/ }),

/***/ "./src/Renderer.js":
/*!*************************!*\
  !*** ./src/Renderer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Renderer\": () => (/* binding */ Renderer)\n/* harmony export */ });\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ \"./src/Utils.js\");\n\r\n\r\n\r\nclass Renderer {\r\n    constructor(config) {\r\n        this.renderTarget = document.querySelector(config.mount);\r\n        this.currentPage = {\r\n            number: null,\r\n            index: null,\r\n            paragraph: null,\r\n            actions: null\r\n        }\r\n    }\r\n\r\n    initComponents() {\r\n        const nebulaData = _Utils__WEBPACK_IMPORTED_MODULE_0__.Utils.getGameSessionData();\r\n        console.log(nebulaData);\r\n        this.setRenderInformation(nebulaData);\r\n\r\n        if (this.renderTarget) {\r\n            this.renderTarget.style.maxWidth = '20%'; \r\n            this.renderTarget.innerHTML = `\r\n            \r\n            <menu-panel>\r\n            </menu-panel>\r\n            <story-panel paper_background=\"gray\">\r\n                <p slot=\"text\" >${this.currentPage.paragraph}</p>\r\n            </story-panel>\r\n            <action-panel>\r\n            ${Object.keys(this.currentPage.actions).map((action) => {\r\n                return `<action-item>\r\n                    <p slot=\"action\">${this.currentPage.actions[action].text}</p>\r\n                    <a slot=\"page\">${this.currentPage.actions[action].page}</a>\r\n                </action-item>`     \r\n            }).join(\"\")}\r\n            </action-panel>\r\n\r\n            `\r\n        }\r\n    }\r\n\r\n    setRenderInformation(nebulaData) {\r\n        this.currentPage = {\r\n            number: nebulaData.gameData.currentPage,\r\n            index: nebulaData.gameData.currentPage - 1,\r\n        }\r\n\r\n        this.currentPage.paragraph = nebulaData.storyData.pages[this.currentPage.index].text;\r\n        this.currentPage.actions = nebulaData.storyData.pages[this.currentPage.index].actions;\r\n    }\r\n}\n\n//# sourceURL=webpack://js-game-framework/./src/Renderer.js?");

/***/ }),

/***/ "./src/Utils.js":
/*!**********************!*\
  !*** ./src/Utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Utils\": () => (/* binding */ Utils)\n/* harmony export */ });\nclass Utils {\r\n    static getJsonData(path) {\r\n    return new Promise(function (resolve, reject) {\r\n        let xhr = new XMLHttpRequest();\r\n        xhr.open('GET', path);\r\n        xhr.responseType = 'json';\r\n        xhr.onload = function () {\r\n            if (this.status >= 200 && this.status < 300) {\r\n                resolve(xhr.response);\r\n            } else {\r\n                reject({\r\n                    status: this.status,\r\n                    statusText: xhr.statusText\r\n                });\r\n            }\r\n        };\r\n        xhr.onerror = function () {\r\n            reject({\r\n                status: this.status,\r\n                statusText: xhr.statusText\r\n            });\r\n        };\r\n        xhr.send();\r\n    });\r\n    }\r\n\r\n    static getGameSessionData() {\r\n        return JSON.parse(window.localStorage.getItem('Nebula'));\r\n    }\r\n}\n\n//# sourceURL=webpack://js-game-framework/./src/Utils.js?");

/***/ }),

/***/ "./src/components/ActionItem.js":
/*!**************************************!*\
  !*** ./src/components/ActionItem.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ActionItem\": () => (/* binding */ ActionItem)\n/* harmony export */ });\nconst template = document.createElement('template');\r\ntemplate.innerHTML = `\r\n\r\n  <style>\r\n    p {\r\n      color: black;\r\n      padding: 5px;\r\n    }\r\n  </style>\r\n  <p>texte action</p>\r\n\r\n`\r\n\r\nclass ActionItem extends HTMLElement  {\r\n    constructor() {\r\n        super();\r\n        const shadow = this.attachShadow({mode: 'open'})\r\n        .appendChild(template.content.cloneNode(true));\r\n    }\r\n    \r\n    connectedCallback() {\r\n    }\r\n}\r\n\r\ncustomElements.define('action-item', ActionItem);\r\n\n\n//# sourceURL=webpack://js-game-framework/./src/components/ActionItem.js?");

/***/ }),

/***/ "./src/components/ActionPanel.js":
/*!***************************************!*\
  !*** ./src/components/ActionPanel.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ActionPanel\": () => (/* binding */ ActionPanel)\n/* harmony export */ });\nconst template = document.createElement('template');\r\ntemplate.innerHTML = `\r\n\r\n  <style>\r\n    p {\r\n      color: black;\r\n      padding: 5px;\r\n    }\r\n  </style>\r\n  <div id=\"action-zone\">\r\n    <p>test action panel</p>\r\n  </div>\r\n\r\n`\r\n\r\nclass ActionPanel extends HTMLElement  {\r\n    constructor() {\r\n        super();\r\n        const shadow = this.attachShadow({mode: 'open'})\r\n        .appendChild(template.content.cloneNode(true));\r\n    }\r\n    \r\n    connectedCallback() {\r\n    }\r\n}\r\n\r\ncustomElements.define('action-panel', ActionPanel);\r\n\n\n//# sourceURL=webpack://js-game-framework/./src/components/ActionPanel.js?");

/***/ }),

/***/ "./src/components/MenuPanel.js":
/*!*************************************!*\
  !*** ./src/components/MenuPanel.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MenuPanel\": () => (/* binding */ MenuPanel)\n/* harmony export */ });\nconst template = document.createElement('template');\r\ntemplate.innerHTML = `\r\n\r\n  <style>\r\n    p {\r\n      color: black;\r\n      padding: 5px;\r\n    }\r\n  </style>\r\n  <nav id=\"menu-zone\">\r\n    <ul>\r\n        <li>\r\n            aaa\r\n        </li>\r\n        <li>\r\n            bbb\r\n        </li>\r\n        <li>\r\n            ccc\r\n        </li>\r\n  </nav>\r\n\r\n`\r\n\r\nclass MenuPanel extends HTMLElement  {\r\n    constructor() {\r\n        super();\r\n        const shadow = this.attachShadow({mode: 'open'})\r\n        .appendChild(template.content.cloneNode(true));\r\n    }\r\n    \r\n    connectedCallback() {\r\n    }\r\n}\r\n\r\ncustomElements.define('menu-panel', MenuPanel);\r\n\n\n//# sourceURL=webpack://js-game-framework/./src/components/MenuPanel.js?");

/***/ }),

/***/ "./src/components/StoryPanel.js":
/*!**************************************!*\
  !*** ./src/components/StoryPanel.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StoryPanel\": () => (/* binding */ StoryPanel)\n/* harmony export */ });\nconst template = document.createElement('template');\r\ntemplate.innerHTML = `\r\n\r\n  <style>\r\n    p {\r\n      color: black;\r\n      padding: 5px;\r\n    }\r\n  </style>\r\n  <div id=\"text-zone\">\r\n    <p>\r\n      <slot name=\"text\" />\r\n    </p>\r\n  </div>\r\n\r\n`\r\n\r\nclass StoryPanel extends HTMLElement  {\r\n    constructor() {\r\n        super();\r\n        const shadow = this.attachShadow({mode: 'open'})\r\n        .appendChild(template.content.cloneNode(true));\r\n    }\r\n    \r\n    connectedCallback() {\r\n      if (this.getAttribute('paper_background')) {\r\n        this.shadowRoot.querySelector('#text-zone').style.background = this.getAttribute('paper_background');\r\n        console.log( this.shadowRoot.querySelector('#text-zone'));\r\n      }\r\n    }\r\n}\r\n\r\ncustomElements.define('story-panel', StoryPanel);\r\n\n\n//# sourceURL=webpack://js-game-framework/./src/components/StoryPanel.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Nebula__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Nebula */ \"./src/Nebula.js\");\n/* harmony import */ var _components_StoryPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/StoryPanel */ \"./src/components/StoryPanel.js\");\n/* harmony import */ var _components_MenuPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/MenuPanel */ \"./src/components/MenuPanel.js\");\n/* harmony import */ var _components_ActionPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ActionPanel */ \"./src/components/ActionPanel.js\");\n/* harmony import */ var _components_ActionItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ActionItem */ \"./src/components/ActionItem.js\");\n/**\r\n * @namespace Nebula\r\n */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Nebula__WEBPACK_IMPORTED_MODULE_0__.Nebula);\r\n__webpack_require__.g.Nebula = _Nebula__WEBPACK_IMPORTED_MODULE_0__.Nebula;\n\n//# sourceURL=webpack://js-game-framework/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;