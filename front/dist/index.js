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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Montserrat&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*\\r\\nfont-family: 'Oswald', sans-serif;\\r\\nfont-family: 'Montserrat', sans-serif;\\r\\nh1 - 90px\\r\\nh2 - 30px\\r\\nh2 - 48px (footer)\\r\\nh3 - 21px\\r\\np - 21px (main)\\r\\np - 18px\\r\\np - 16px (footer)\\r\\n*/\\r\\n\\r\\n:root {\\r\\n    --clr-light: #F1F1F1;\\r\\n    --clr-dark: #2E323F;\\r\\n    --clr-primary: #d0d3db;\\r\\n    --clr-secondary: #7d86a3;\\r\\n    --clr-accent: #A59678;\\r\\n\\r\\n    --foreground: var(--clr-dark);\\r\\n    --background: var(--clr-light);\\r\\n\\r\\n    --theme-icon: \\\"☀\\\";\\r\\n\\r\\n    --inverted: none;\\r\\n\\r\\n    --font-title: 'Oswald', sans-serif;\\r\\n    --font-text: 'Montserrat', sans-serif;\\r\\n\\r\\n    --padding-block-section: 1rem;\\r\\n    --margin-top-element: 1em;\\r\\n\\r\\n    --radius: 5px;\\r\\n}\\r\\n\\r\\n*,\\r\\n*::before,\\r\\n*::after {\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody,\\r\\nh1,\\r\\nh2,\\r\\nh3,\\r\\nul,\\r\\np {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n}\\r\\n\\r\\nimg {\\r\\n    max-width: 100%;\\r\\n}\\r\\n\\r\\nbody {\\r\\n    font-family: var(--font-text);\\r\\n    line-height: 1.5;\\r\\n}\\r\\nbody.theme-dark {\\r\\n    --clr-light: #F1F1F1;\\r\\n    --clr-dark: #2E323F;\\r\\n    --clr-primary: #3B4050;\\r\\n    --clr-secondary: #6F737F;\\r\\n    --clr-accent: #A59678;\\r\\n\\r\\n    --foreground: var(--clr-light);\\r\\n    --background: var(--clr-dark);\\r\\n\\r\\n    --theme-icon: \\\"🌛︎\\\";\\r\\n\\r\\n    --inverted: invert(1) hue-rotate(180deg);\\r\\n}\\r\\n\\r\\n@media (prefers-color-scheme: dark) {\\r\\n    body.theme-auto {\\r\\n        --clr-light: #F1F1F1;\\r\\n        --clr-dark: #2E323F;\\r\\n        --clr-primary: #3B4050;\\r\\n        --clr-secondary: #6F737F;\\r\\n        --clr-accent: #A59678;\\r\\n\\r\\n        --foreground: var(--clr-light);\\r\\n        --background: var(--clr-dark);\\r\\n\\r\\n        --theme-icon: \\\"🌛︎\\\";\\r\\n\\r\\n        --inverted: invert(1) hue-rotate(180deg);\\r\\n    }\\r\\n}\\r\\n\\r\\n.container {\\r\\n    margin: 0 auto;\\r\\n    width: 90%;\\r\\n    max-width: 1200px;\\r\\n}\\r\\n\\r\\n.link--button {\\r\\n    cursor: pointer;\\r\\n    border: none;\\r\\n    background-color: var(--clr-accent);\\r\\n    color: var(--foreground);\\r\\n    padding: 0.2em 1.5em;\\r\\n    border-radius: 8rem;\\r\\n    font-family: var(--font-title);\\r\\n    font-size: inherit;\\r\\n}\\r\\n.link--button:hover,\\r\\n.link--button:focus {\\r\\n    opacity: 0.75;\\r\\n}\\r\\n\\r\\n.func--button {\\r\\n    vertical-align: bottom;\\r\\n    height: 4em;\\r\\n    width: 10em;\\r\\n    cursor: pointer;\\r\\n    border: none;\\r\\n    background-color: var(--clr-accent);\\r\\n    color: var(--foreground);\\r\\n    border-radius: var(--radius);\\r\\n    font-family: var(--font-title);\\r\\n    font-size: inherit;\\r\\n}\\r\\n.func--button:hover,\\r\\n.func--button:focus {\\r\\n    opacity: 0.75;\\r\\n}\\r\\n\\r\\n/*\\r\\nheader\\r\\n*/\\r\\nheader {\\r\\n    background-color: var(--background);\\r\\n    padding: 1em 0;\\r\\n    font-family: var(--font-title);\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.mobile-nav {\\r\\n    width: 40%;\\r\\n    text-align: left;\\r\\n}\\r\\n.nav-toggle {\\r\\n    cursor: pointer;\\r\\n    border: 0;\\r\\n    width: 3em;\\r\\n    height: 3em;\\r\\n    padding: 0;\\r\\n    border-radius: 50%;\\r\\n    background-color: var(--clr-accent);\\r\\n    transition: opacity 250ms ease;\\r\\n}\\r\\n\\r\\n.hamburger {\\r\\n    width: 50%;\\r\\n    height: 3px;\\r\\n    display: block;\\r\\n    margin: 3px auto;\\r\\n    background-color: var(--foreground);\\r\\n}\\r\\n\\r\\n\\r\\n.logo {\\r\\n    width: 20%;\\r\\n    margin: 0 auto;\\r\\n}\\r\\n.logo-img {\\r\\n    filter: var(--inverted);\\r\\n    vertical-align: bottom;\\r\\n    height: 2.5em;\\r\\n    aspect-ratio: 1 / 1;\\r\\n}\\r\\n\\r\\n.theme {\\r\\n    width: 40%;\\r\\n    text-align: right;\\r\\n}\\r\\n\\r\\n.select-theme {\\r\\n    background: none;\\r\\n    border: none;\\r\\n    cursor: pointer;\\r\\n    color: var(--foreground);\\r\\n    font-weight: 500;\\r\\n    font-family: var(--font-family);\\r\\n}\\r\\n.select-theme option {\\r\\n    color: var(--foreground);\\r\\n    background-color: var(--background);\\r\\n}\\r\\n\\r\\n.theme-icon::after {\\r\\n    content: var(--theme-icon);\\r\\n    color: var(--foreground)\\r\\n}\\r\\n\\r\\n.nav {\\r\\n    display: none;\\r\\n}\\r\\n.nav--visible {\\r\\n    display: block;\\r\\n    margin-top: var(--margin-top-element);\\r\\n}\\r\\n\\r\\n.nav__list {\\r\\n    list-style: none;\\r\\n}\\r\\n.nav__item {\\r\\n    /* margin-top: 0.5em; */\\r\\n}\\r\\n.nav__link {\\r\\n    text-decoration: none;\\r\\n    color: var(--foreground);\\r\\n}\\r\\n.nav__link:hover,\\r\\n.nav__link:focus {\\r\\n    opacity: 0.75;\\r\\n}\\r\\n\\r\\n.logo-and-theme {\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n    gap: 1em;\\r\\n}\\r\\n\\r\\n/*\\r\\nintro section\\r\\n*/\\r\\n.intro {\\r\\n    background-color: var(--clr-primary);\\r\\n    padding: var(--padding-block-section) 0;\\r\\n}\\r\\n.intro__title {\\r\\n    font-family: var(--font-title);\\r\\n    font-size: 4rem;\\r\\n    line-height: 1.1;\\r\\n    color: var(--foreground);\\r\\n}\\r\\n\\r\\n.intro__cta {\\r\\n    color: var(--foreground);\\r\\n    font-size: 1.3rem;\\r\\n}\\r\\n\\r\\n.intro__cta > * {\\r\\n    margin-top: var(--margin-top-element);\\r\\n}\\r\\n\\r\\n.intro__button {\\r\\n    text-transform: uppercase;\\r\\n}\\r\\n\\r\\n\\r\\n/*\\r\\nmain section\\r\\n*/\\r\\nmain {\\r\\n    padding: var(--padding-block-section) 0;\\r\\n    background-color: var(--clr-secondary);\\r\\n}\\r\\n\\r\\n.shorten--container {\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.shorten {\\r\\n    width: 100%;\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n    gap: 0.3em;\\r\\n}\\r\\n\\r\\n.shorten__input {\\r\\n    width: 100%;\\r\\n    padding: 1em;\\r\\n    height: 4em;\\r\\n    border: none;\\r\\n    font-size: inherit;\\r\\n    border-radius: var(--radius);\\r\\n}\\r\\n\\r\\n.output {\\r\\n    margin-top: var(--margin-top-element);\\r\\n    padding: 1em;\\r\\n    width: 100%;\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n    gap: 0.3em;\\r\\n    background-color: var(--clr-primary);\\r\\n    border-radius: var(--radius);\\r\\n}\\r\\n\\r\\n.short-link-container {\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n    gap: 1em;\\r\\n}\\r\\n\\r\\n.long-link {\\r\\n    text-align: left;\\r\\n    width: 50%;\\r\\n    overflow: hidden;\\r\\n    text-overflow: ellipsis;\\r\\n    white-space: nowrap;\\r\\n    color: var(--foreground);\\r\\n}\\r\\n\\r\\n.short-link {\\r\\n    width: 100%;\\r\\n}\\r\\n\\r\\n.copy--button {\\r\\n    vertical-align: bottom;\\r\\n    height: 2em;\\r\\n    padding: 0 2em;\\r\\n    cursor: pointer;\\r\\n    border: none;\\r\\n    background-color: var(--clr-primary);\\r\\n    color: var(--foreground);\\r\\n    border: 1px solid;\\r\\n    border-radius: var(--radius);\\r\\n    font-family: var(--font-title);\\r\\n    font-size: inherit;\\r\\n}\\r\\n.copy--button:hover,\\r\\n.copy--button:focus {\\r\\n    background-color: var(--foreground);\\r\\n    color: var(--clr-primary);\\r\\n    border: 1px solid var(--foreground);\\r\\n}\\r\\n\\r\\n.display-none {\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n\\r\\n/* \\r\\nfooter\\r\\n*/\\r\\nfooter {\\r\\n    background-color: var(--background);\\r\\n    padding: 1em;\\r\\n    color: var(--foreground);\\r\\n    text-align: center;\\r\\n}\\r\\n.copyright {\\r\\n    vertical-align: bottom;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n@media (min-width: 700pX) {\\r\\n    :root {\\r\\n        --padding-block-section: 5rem;\\r\\n    }\\r\\n    .logo-and-theme {\\r\\n        width: 30%;\\r\\n        justify-content: left;\\r\\n    }\\r\\n    .theme {\\r\\n        text-align: left;\\r\\n    }\\r\\n    .logo {\\r\\n        margin: 0;\\r\\n    }\\r\\n    .nav {\\r\\n        display: block;\\r\\n    }\\r\\n    .nav__list {\\r\\n        margin: 0;\\r\\n    }\\r\\n    .row {\\r\\n        display: flex;\\r\\n        justify-content: space-between;\\r\\n        align-items: center;\\r\\n        gap: 1em;\\r\\n    }\\r\\n    .main__side-bar > * + * {\\r\\n        margin: 0;\\r\\n    }\\r\\n    \\r\\n    \\r\\n    .section--two__content + .section--two__content {\\r\\n        margin: 0;\\r\\n    }\\r\\n\\r\\n    .mobile-nav {\\r\\n        display: none;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media (min-width: 1000px) {\\r\\n    :root {\\r\\n        --padding-block-section: 8rem;\\r\\n    }\\r\\n    .row-large {\\r\\n        display: flex;\\r\\n        justify-content: space-between;\\r\\n        gap: 2em;\\r\\n    }\\r\\n    .col-large {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        justify-content: flex-start;\\r\\n        gap: 2em;\\r\\n    }\\r\\n    .flex-end {\\r\\n        align-items: flex-end;\\r\\n    }\\r\\n\\r\\n    .section--two__content {\\r\\n        text-align: center;\\r\\n    }\\r\\n\\r\\n    .footer {\\r\\n        padding-top: 3rem;\\r\\n    }\\r\\n    .footer__title {\\r\\n        text-align: center;\\r\\n        padding-bottom: 2rem;\\r\\n    }\\r\\n\\r\\n    .footer__about {\\r\\n        width: 40%;\\r\\n    }\\r\\n    .list__container {\\r\\n        margin: 0;\\r\\n    }\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://front/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://front/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://front/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://front/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://front/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://front/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://front/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://front/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://front/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://front/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./scripts/network/api.js":
/*!********************************!*\
  !*** ./scripts/network/api.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"shortenUrl\": () => (/* binding */ shortenUrl)\n/* harmony export */ });\n\r\n// import axios from 'axios';\r\n\r\nconst baseURL = 'http://localhost:3000/';\r\n\r\nasync function getData(url, username) {\r\n    const response = await axios.get(url, {\r\n        headers: {\r\n            username,\r\n        }\r\n    });\r\n\r\n    // if(response.data.status >= 400) {\r\n    //     displayMessage(response.data.message);\r\n    // }\r\n\r\n    return response.data;\r\n}\r\n\r\nasync function postData(url, originUrl, username = null) {\r\n    const response = await axios.post(url, { url: originUrl, username });\r\n    // if(response.data.status >= 400) {\r\n    //     displayMessage(response.data.message);\r\n    // }\r\n\r\n    return response.data;\r\n}\r\n\r\nasync function shortenUrl(originUrl, username) {\r\n    const shortUrl = await postData(`${baseURL}api/shorten`, originUrl);\r\n    return shortUrl;\r\n}\n\n//# sourceURL=webpack://front/./scripts/network/api.js?");

/***/ }),

/***/ "./scripts/services/dom.js":
/*!*********************************!*\
  !*** ./scripts/services/dom.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"starter\": () => (/* binding */ starter)\n/* harmony export */ });\n/* harmony import */ var _event_handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-handlers */ \"./scripts/services/event-handlers.js\");\n/* harmony import */ var _network_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../network/api.js */ \"./scripts/network/api.js\");\n\r\n\r\n\r\n\r\nconst starter = async () => {\r\n    // dark/light theme\r\n    document.addEventListener(\"DOMContentLoaded\", () => {\r\n        const savedTheme = localStorage.getItem(\"theme\") || \"auto\";\r\n        \r\n        (0,_event_handlers__WEBPACK_IMPORTED_MODULE_0__.applyTheme)(savedTheme);\r\n        \r\n        for(const optionElement of document.querySelectorAll(\"#select-theme option\")) {\r\n            optionElement.selected = savedTheme === optionElement.value;\r\n        }\r\n        \r\n        document.getElementById(\"select-theme\").addEventListener(\"change\", function () {\r\n            localStorage.setItem(\"theme\", this.value);\r\n            (0,_event_handlers__WEBPACK_IMPORTED_MODULE_0__.applyTheme)(this.value);\r\n        });\r\n    });\r\n\r\n    //hamburger menu\r\n    const hamburger = document.querySelector(\".nav-toggle\");\r\n    const nav = document.querySelector(\".nav\");\r\n\r\n    hamburger.addEventListener(\"click\", () => {\r\n        nav.classList.toggle(\"nav--visible\");\r\n    })\r\n\r\n    document.getElementById('shorten-button').addEventListener('click', async () => {\r\n        const url = document.getElementById('shorten-input').value;\r\n        const shortUrl = await (0,_network_api_js__WEBPACK_IMPORTED_MODULE_1__.shortenUrl)(url);\r\n        document.querySelector('.output').classList.remove('display-none');\r\n        document.querySelector('.long-link').textContent = url;\r\n        const shortLinkElem = document.getElementById('short-link');\r\n        shortLinkElem.href = shortUrl;\r\n        shortLinkElem.textContent = shortUrl;\r\n    })\r\n\r\n    document.getElementById('copy-button').addEventListener('click', () => {\r\n        const cb = navigator.clipboard;\r\n        const shortLinkElem = document.getElementById('short-link');\r\n        \r\n        const selection = window.getSelection();\r\n        const range = document.createRange();\r\n        range.selectNodeContents(shortLinkElem);\r\n        selection.removeAllRanges();\r\n        selection.addRange(range);\r\n\r\n        cb.writeText(shortLinkElem.textContent);\r\n    })\r\n};\n\n//# sourceURL=webpack://front/./scripts/services/dom.js?");

/***/ }),

/***/ "./scripts/services/event-handlers.js":
/*!********************************************!*\
  !*** ./scripts/services/event-handlers.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"applyTheme\": () => (/* binding */ applyTheme)\n/* harmony export */ });\n\r\n\r\nfunction applyTheme(theme) {\r\n    document.body.classList.remove(\"theme-auto\", \"theme-light\", \"theme-dark\");\r\n    document.body.classList.add(`theme-${theme}`);\r\n}\n\n//# sourceURL=webpack://front/./scripts/services/event-handlers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _images_url_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/url-logo.png */ \"./src/images/url-logo.png\");\n/* harmony import */ var _scripts_services_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scripts/services/dom */ \"./scripts/services/dom.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_scripts_services_dom__WEBPACK_IMPORTED_MODULE_2__.starter)();\n\n//# sourceURL=webpack://front/./src/index.js?");

/***/ }),

/***/ "./src/images/url-logo.png":
/*!*********************************!*\
  !*** ./src/images/url-logo.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/url-logo.png\";\n\n//# sourceURL=webpack://front/./src/images/url-logo.png?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "./";
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