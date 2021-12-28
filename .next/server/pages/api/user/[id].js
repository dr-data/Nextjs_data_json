module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/user/[id].ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/data.json":
/*!***********************!*\
  !*** ./lib/data.json ***!
  \***********************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"id\\\":1,\\\"name\\\":\\\"Gerda\\\",\\\"email\\\":\\\"gschowenburg0@seattletimes.com\\\"},{\\\"id\\\":2,\\\"name\\\":\\\"Georgy\\\",\\\"email\\\":\\\"ghaddy1@census.gov\\\"},{\\\"id\\\":3,\\\"name\\\":\\\"Loydie\\\",\\\"email\\\":\\\"lmccomb2@unicef.org\\\"},{\\\"id\\\":4,\\\"name\\\":\\\"Idalina\\\",\\\"email\\\":\\\"iwarren3@who.int\\\"},{\\\"id\\\":5,\\\"name\\\":\\\"Valdemar\\\",\\\"email\\\":\\\"vpittway4@miitbeian.gov.cn\\\"},{\\\"id\\\":6,\\\"name\\\":\\\"Abram\\\",\\\"email\\\":\\\"afonteyne5@domainmarket.com\\\"},{\\\"id\\\":7,\\\"name\\\":\\\"Betta\\\",\\\"email\\\":\\\"bcorkell6@ca.gov\\\"},{\\\"id\\\":8,\\\"name\\\":\\\"Raynard\\\",\\\"email\\\":\\\"rbraxay7@senate.gov\\\"},{\\\"id\\\":9,\\\"name\\\":\\\"Boyce\\\",\\\"email\\\":\\\"bhallen8@smh.com.au\\\"},{\\\"id\\\":10,\\\"name\\\":\\\"Webb\\\",\\\"email\\\":\\\"wcaseri9@blogger.com\\\"},{\\\"id\\\":11,\\\"name\\\":\\\"Merola\\\",\\\"email\\\":\\\"mbarriea@ebay.co.uk\\\"},{\\\"id\\\":12,\\\"name\\\":\\\"Anderson\\\",\\\"email\\\":\\\"amckennyb@jigsy.com\\\"},{\\\"id\\\":13,\\\"name\\\":\\\"Jelene\\\",\\\"email\\\":\\\"jclarkec@unicef.org\\\"},{\\\"id\\\":14,\\\"name\\\":\\\"Lindsey\\\",\\\"email\\\":\\\"ltidderd@statcounter.com\\\"},{\\\"id\\\":15,\\\"name\\\":\\\"Melodee\\\",\\\"email\\\":\\\"mdaneve@simplemachines.org\\\"},{\\\"id\\\":16,\\\"name\\\":\\\"Billy\\\",\\\"email\\\":\\\"bosboldstonef@desdev.cn\\\"},{\\\"id\\\":17,\\\"name\\\":\\\"Pauly\\\",\\\"email\\\":\\\"pkleinschmidtg@bbc.co.uk\\\"},{\\\"id\\\":18,\\\"name\\\":\\\"Ashlen\\\",\\\"email\\\":\\\"awinteringhamh@amazon.de\\\"},{\\\"id\\\":19,\\\"name\\\":\\\"Geraldine\\\",\\\"email\\\":\\\"gstaplesi@hc360.com\\\"},{\\\"id\\\":20,\\\"name\\\":\\\"Nowell\\\",\\\"email\\\":\\\"ncammishj@wsj.com\\\"},{\\\"id\\\":21,\\\"name\\\":\\\"Kendal\\\",\\\"email\\\":\\\"kbrydiek@yahoo.com\\\"},{\\\"id\\\":22,\\\"name\\\":\\\"Nolie\\\",\\\"email\\\":\\\"nschoenrockl@miitbeian.gov.cn\\\"},{\\\"id\\\":23,\\\"name\\\":\\\"Fannie\\\",\\\"email\\\":\\\"fdormonm@wordpress.org\\\"},{\\\"id\\\":24,\\\"name\\\":\\\"Paolina\\\",\\\"email\\\":\\\"pbroomern@xing.com\\\"},{\\\"id\\\":25,\\\"name\\\":\\\"Monro\\\",\\\"email\\\":\\\"mdillando@nature.com\\\"},{\\\"id\\\":26,\\\"name\\\":\\\"Vinnie\\\",\\\"email\\\":\\\"vblazejp@cargocollective.com\\\"},{\\\"id\\\":27,\\\"name\\\":\\\"Bank\\\",\\\"email\\\":\\\"bmertgenq@squidoo.com\\\"},{\\\"id\\\":28,\\\"name\\\":\\\"Ebeneser\\\",\\\"email\\\":\\\"eskeelr@yandex.ru\\\"},{\\\"id\\\":29,\\\"name\\\":\\\"Donna\\\",\\\"email\\\":\\\"dgwillims@simplemachines.org\\\"},{\\\"id\\\":30,\\\"name\\\":\\\"Jareb\\\",\\\"email\\\":\\\"jbrackstonet@google.com.br\\\"}]\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2xpYi9kYXRhLmpzb24uanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/data.json\n");

/***/ }),

/***/ "./pages/api/user/[id].ts":
/*!********************************!*\
  !*** ./pages/api/user/[id].ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/data.json */ \"./lib/data.json\");\nvar _lib_data_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../lib/data.json */ \"./lib/data.json\", 1);\n\n\nconst user = (req, res) => {\n  const {\n    id\n  } = req.query;\n  const userData = _lib_data_json__WEBPACK_IMPORTED_MODULE_0__.find(x => String(x.id) === String(id));\n\n  if (userData) {\n    res.status(200).json(userData);\n  } else {\n    res.status(404).end();\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (user);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXNlci8udHM/NmMwMyJdLCJuYW1lcyI6WyJ1c2VyIiwicmVxIiwicmVzIiwiaWQiLCJxdWVyeSIsInVzZXJEYXRhIiwiZGF0YSIsImZpbmQiLCJ4IiwiU3RyaW5nIiwic3RhdHVzIiwianNvbiIsImVuZCJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRUEsTUFBTUEsSUFBb0IsR0FBRyxDQUFDQyxHQUFELEVBQU1DLEdBQU4sS0FBYztBQUN6QyxRQUFNO0FBQUVDO0FBQUYsTUFBU0YsR0FBRyxDQUFDRyxLQUFuQjtBQUNBLFFBQU1DLFFBQVEsR0FBR0MsMkNBQUksQ0FBQ0MsSUFBTCxDQUFVQyxDQUFDLElBQUlDLE1BQU0sQ0FBQ0QsQ0FBQyxDQUFDTCxFQUFILENBQU4sS0FBaUJNLE1BQU0sQ0FBQ04sRUFBRCxDQUF0QyxDQUFqQjs7QUFFQSxNQUFJRSxRQUFKLEVBQWM7QUFDWkgsT0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJOLFFBQXJCO0FBQ0QsR0FGRCxNQUVPO0FBQ0xILE9BQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JFLEdBQWhCO0FBQ0Q7QUFDRixDQVREOztBQVdlWixtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2FwaS91c2VyL1tpZF0udHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpSGFuZGxlciB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgZGF0YSBmcm9tIFwiLi4vLi4vLi4vbGliL2RhdGEuanNvblwiO1xuXG5jb25zdCB1c2VyOiBOZXh0QXBpSGFuZGxlciA9IChyZXEsIHJlcykgPT4ge1xuICBjb25zdCB7IGlkIH0gPSByZXEucXVlcnk7XG4gIGNvbnN0IHVzZXJEYXRhID0gZGF0YS5maW5kKHggPT4gU3RyaW5nKHguaWQpID09PSBTdHJpbmcoaWQpKTtcblxuICBpZiAodXNlckRhdGEpIHtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih1c2VyRGF0YSk7XG4gIH0gZWxzZSB7XG4gICAgcmVzLnN0YXR1cyg0MDQpLmVuZCgpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/user/[id].ts\n");

/***/ })

/******/ });