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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./autocomplete.js":
/*!*************************!*\
  !*** ./autocomplete.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = autoComplete;\nfunction autoComplete(inp, arr) {\n  /*the autocomplete function takes two arguments,\r\n  the text field element and an array of possible autocompleted values:*/\n  var currentFocus;\n  /*execute a function when someone writes in the text field:*/\n  inp.addEventListener(\"input\", function (e) {\n    var a,\n        b,\n        i,\n        val = this.value;\n    /*close any already open lists of autocompleted values*/\n    closeAllLists();\n    if (!val) {\n      return false;\n    }\n    currentFocus = -1;\n    /*create a DIV element that will contain the items (values):*/\n    a = document.createElement(\"DIV\");\n    a.setAttribute(\"id\", this.id + \"autocomplete-list\");\n    a.setAttribute(\"class\", \"autocomplete-items\");\n    /*append the DIV element as a child of the autocomplete container:*/\n    this.parentNode.appendChild(a);\n    /*for each item in the array...*/\n    for (i = 0; i < arr.length; i++) {\n      /*check if the item starts with the same letters as the text field value:*/\n      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {\n        /*create a DIV element for each matching element:*/\n        b = document.createElement(\"DIV\");\n        /*make the matching letters bold:*/\n        b.innerHTML = \"<strong>\" + arr[i].substr(0, val.length) + \"</strong>\";\n        b.innerHTML += arr[i].substr(val.length);\n        /*insert a input field that will hold the current array item's value:*/\n        b.innerHTML += \"<input type='hidden' value='\" + arr[i] + \"'>\";\n        /*execute a function when someone clicks on the item value (DIV element):*/\n        b.addEventListener(\"click\", function (e) {\n          /*insert the value for the autocomplete text field:*/\n          inp.value = this.getElementsByTagName(\"input\")[0].value;\n          /*close the list of autocompleted values,\r\n          (or any other open lists of autocompleted values:*/\n          closeAllLists();\n        });\n        a.appendChild(b);\n      }\n    }\n  });\n  /*execute a function presses a key on the keyboard:*/\n  inp.addEventListener(\"keydown\", function (e) {\n    var x = document.getElementById(this.id + \"autocomplete-list\");\n    if (x) x = x.getElementsByTagName(\"div\");\n    if (e.keyCode == 40) {\n      /*If the arrow DOWN key is pressed,\r\n      increase the currentFocus variable:*/\n      currentFocus++;\n      /*and and make the current item more visible:*/\n      addActive(x);\n    } else if (e.keyCode == 38) {\n      //up\n      /*If the arrow UP key is pressed,\r\n      decrease the currentFocus variable:*/\n      currentFocus--;\n      /*and and make the current item more visible:*/\n      addActive(x);\n    } else if (e.keyCode == 13) {\n      /*If the ENTER key is pressed, prevent the form from being submitted,*/\n      e.preventDefault();\n      if (currentFocus > -1) {\n        /*and simulate a click on the \"active\" item:*/\n        if (x) x[currentFocus].click();\n      }\n    }\n  });\n  function addActive(x) {\n    /*a function to classify an item as \"active\":*/\n    if (!x) return false;\n    /*start by removing the \"active\" class on all items:*/\n    removeActive(x);\n    if (currentFocus >= x.length) currentFocus = 0;\n    if (currentFocus < 0) currentFocus = x.length - 1;\n    /*add class \"autocomplete-active\":*/\n    x[currentFocus].classList.add(\"autocomplete-active\");\n  }\n  function removeActive(x) {\n    /*a function to remove the \"active\" class from all autocomplete items:*/\n    for (var i = 0; i < x.length; i++) {\n      x[i].classList.remove(\"autocomplete-active\");\n    }\n  }\n  function closeAllLists(elmnt) {\n    /*close all autocomplete lists in the document,\r\n    except the one passed as an argument:*/\n    var x = document.getElementsByClassName(\"autocomplete-items\");\n    for (var i = 0; i < x.length; i++) {\n      if (elmnt != x[i] && elmnt != inp) {\n        x[i].parentNode.removeChild(x[i]);\n      }\n    }\n  }\n  /*execute a function when someone clicks in the document:*/\n  document.addEventListener(\"click\", function (e) {\n    closeAllLists(e.target);\n  });\n}\n\n//# sourceURL=webpack:///./autocomplete.js?");

/***/ }),

/***/ "./compareStocksTrigger.js":
/*!*********************************!*\
  !*** ./compareStocksTrigger.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = compareStocksTrigger;\n\nvar _searchStockWidget = __webpack_require__(/*! ./searchStockWidget */ \"./searchStockWidget.js\");\n\nvar _searchStockWidget2 = _interopRequireDefault(_searchStockWidget);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction compareStocksTrigger() {\n  var collection_generator = document.querySelector('#add_stock_collection');\n\n  collection_generator.addEventListener(\"click\", function () {\n    var collection_name = this.previousElementSibling.value;\n    (0, _searchStockWidget2.default)(collection_name);\n  }, false);\n} /* eslint-env browser */\n\n//# sourceURL=webpack:///./compareStocksTrigger.js?");

/***/ }),

/***/ "./financialWidget.js":
/*!****************************!*\
  !*** ./financialWidget.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = loadFinancialWidget;\nfunction loadFinancialWidget(element, stock) {\n  element.insertAdjacentHTML('beforeend', '\\n<div class=\"tradingview-widget-container widget_financial\">\\n  <div class=\"tradingview-widget-container__widget\"></div>\\n</div>\\n  ');\n\n  var script = document.createElement('script');\n  script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-financials.js';\n  script.async = true;\n  script.innerHTML = '\\n  {\\n    \"symbol\": \"' + stock.stock_parent + ':' + stock.stock_name + '\",\\n    \"colorTheme\": \"dark\",\\n    \"isTransparent\": false,\\n    \"displayMode\": \"compact\",\\n    \"width\": \"400\",\\n    \"height\": \"500\",\\n    \"locale\": \"br\"\\n  }\\n  ';\n\n  element.querySelector('.widget_financial').append(script);\n  return element;\n}\n\n//# sourceURL=webpack:///./financialWidget.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _compareStocksTrigger = __webpack_require__(/*! ./compareStocksTrigger */ \"./compareStocksTrigger.js\");\n\nvar _compareStocksTrigger2 = _interopRequireDefault(_compareStocksTrigger);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _compareStocksTrigger2.default)();\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./overviewWidget.js":
/*!***************************!*\
  !*** ./overviewWidget.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = loadOverviewWidget;\nfunction loadOverviewWidget(element, stock) {\n  element.insertAdjacentHTML('beforeend', '\\n<div class=\"tradingview-widget-container widget_overview\">\\n  <div class=\"tradingview-widget-container__widget\"></div>\\n</div>\\n  ');\n\n  var script = document.createElement('script');\n  script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';\n  script.async = true;\n  script.innerHTML = '\\n  {\\n    \"symbol\": \"' + stock.stock_parent + ':' + stock.stock_name + '\",\\n    \"width\": \"300\",\\n    \"height\": 150,\\n    \"locale\": \"br\",\\n    \"dateRange\": \"12m\",\\n    \"colorTheme\": \"dark\",\\n    \"trendLineColor\": \"#37a6ef\",\\n    \"underLineColor\": \"rgba(55, 166, 239, 0.15)\",\\n    \"isTransparent\": false,\\n    \"autosize\": false,\\n    \"largeChartUrl\": \"\"\\n  }\\n  ';\n\n  element.querySelector('.widget_overview').append(script);\n  return element;\n}\n\n//# sourceURL=webpack:///./overviewWidget.js?");

/***/ }),

/***/ "./searchStockWidget.js":
/*!******************************!*\
  !*** ./searchStockWidget.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = addSearchStockWidget;\n\nvar _financialWidget = __webpack_require__(/*! ./financialWidget */ \"./financialWidget.js\");\n\nvar _financialWidget2 = _interopRequireDefault(_financialWidget);\n\nvar _overviewWidget = __webpack_require__(/*! ./overviewWidget */ \"./overviewWidget.js\");\n\nvar _overviewWidget2 = _interopRequireDefault(_overviewWidget);\n\nvar _autocomplete = __webpack_require__(/*! ./autocomplete */ \"./autocomplete.js\");\n\nvar _autocomplete2 = _interopRequireDefault(_autocomplete);\n\nvar _stocksRepo = __webpack_require__(/*! ./stocksRepo */ \"./stocksRepo.js\");\n\nvar _stocksRepo2 = _interopRequireDefault(_stocksRepo);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction addSearchStockWidget(collection_name) {\n\n    function removeCollection() {\n        this.closest('article').remove();\n    }\n\n    function compareCollection() {\n        var block_ui = document.querySelector('#block_ui');\n        block_ui.style.zIndex = \"999\";\n\n        var close = block_ui.querySelector('span');\n        close.addEventListener(\"click\", function () {\n            var block_ui = document.querySelector('#block_ui');\n            var financial_widgets = block_ui.querySelectorAll('.stock_financial');\n            financial_widgets.forEach(function (widget) {\n                widget.remove();\n            });\n            block_ui.style.zIndex = \"-999\";\n        }, false);\n\n        var article = this.closest('article');\n        var stocks = article.querySelectorAll('.stock_item');\n\n        stocks.forEach(function (stock) {\n            var div = document.createElement('div');\n            div.classList.add('stock_financial');\n            block_ui.querySelector('.stock_financial_container').append(div);\n            (0, _financialWidget2.default)(div, stock.dataset);\n        });\n    }\n\n    function addStockItem() {\n        var stock = this.previousElementSibling.value;\n        if (stock) {\n            var article = this.closest('.collection_stock');\n            var symbol = stock.split(' ')[0];\n\n            // Descobrir um jeito de deixar o valor stock_parent dinamico\n            var data = {\n                'stock_name': symbol,\n                'stock_parent': 'BMFBOVESPA'\n            };\n            var block = document.createElement('div');\n            block.dataset.stock_name = data.stock_name;\n            block.dataset.stock_parent = data.stock_parent;\n            block.classList.add('stock_item');\n\n            (0, _overviewWidget2.default)(block, data);\n            // loadFinancialWidget(article, el);\n            article.append(block);\n        }\n    }\n\n    var collection_stocks = document.querySelector('#collection_stocks');\n    collection_stocks.insertAdjacentHTML('beforeend', '\\n<article class=\"collection_stock\">\\n    <div class=\"controllers\">\\n        <div>\\n            <p>' + collection_name + '</p>\\n        </div>\\n        <div>\\n            <a class=\"compare\" href=\"#\">Comparar</a>\\n        </div>\\n        <div>\\n            <a href=\"#\" class=\"close_selection\">x</a>\\n        </div>\\n    </div>\\n    <div class=\"stock_search_form\">\\n        <div class=\"autocomplete\">\\n            <input class=\"search_stocks\" type=\"text\" name=\"search_stocks\">\\n            <a class=\"add_stock\">+</a>\\n            <div class=\"stocks_added\"></div>\\n        </div>\\n    </div>\\n</article>\\n    ');\n\n    var collection_add = collection_stocks.lastElementChild.querySelector('.add_stock');\n    var collection_input = collection_stocks.lastElementChild.querySelector('.search_stocks');\n    var collection_close = collection_stocks.lastElementChild.querySelector('.close_selection');\n    var collection_compare = collection_stocks.lastElementChild.querySelector('.compare');\n\n    (0, _stocksRepo2.default)(function (response) {\n        var arr_stocks = [];\n        var availableStocks = JSON.parse(response);\n        availableStocks.data.forEach(function (data) {\n            arr_stocks.push(data.Code + ' - ' + data.Name);\n        });\n        (0, _autocomplete2.default)(collection_input, arr_stocks);\n    });\n\n    collection_add.addEventListener(\"click\", addStockItem, false);\n    collection_close.addEventListener(\"click\", removeCollection, false);\n    collection_compare.addEventListener(\"click\", compareCollection, false);\n}\n\n//# sourceURL=webpack:///./searchStockWidget.js?");

/***/ }),

/***/ "./stocksRepo.js":
/*!***********************!*\
  !*** ./stocksRepo.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = loadJSON;\nfunction loadJSON(callback) {\n  var xobj = new XMLHttpRequest();\n  xobj.overrideMimeType(\"application/json\");\n  xobj.open('GET', 'stocks.json', true);\n  xobj.onreadystatechange = function () {\n    if (xobj.readyState == 4 && xobj.status == \"200\") {\n      callback(xobj.responseText);\n    }\n  };\n  xobj.send(null);\n}\n\n//# sourceURL=webpack:///./stocksRepo.js?");

/***/ })

/******/ });