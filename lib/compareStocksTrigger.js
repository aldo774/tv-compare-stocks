'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = compareStocksTrigger;

var _searchStockWidget = require('./searchStockWidget');

var _searchStockWidget2 = _interopRequireDefault(_searchStockWidget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function compareStocksTrigger() {
  var collection_generator = document.querySelector('#add_stock_collection');

  collection_generator.addEventListener("click", function () {
    var collection_name = this.previousElementSibling.value;
    (0, _searchStockWidget2.default)(collection_name);
  }, false);
} /* eslint-env browser */