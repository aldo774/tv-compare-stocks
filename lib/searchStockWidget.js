'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = addSearchStockWidget;

var _financialWidget = require('./financialWidget');

var _financialWidget2 = _interopRequireDefault(_financialWidget);

var _overviewWidget = require('./overviewWidget');

var _overviewWidget2 = _interopRequireDefault(_overviewWidget);

var _autocomplete = require('./autocomplete');

var _autocomplete2 = _interopRequireDefault(_autocomplete);

var _stocksRepo = require('./stocksRepo');

var _stocksRepo2 = _interopRequireDefault(_stocksRepo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addSearchStockWidget(collection_name) {

    function removeCollection() {
        this.closest('article').remove();
    }

    function compareCollection() {
        var block_ui = document.querySelector('#block_ui');
        block_ui.style.zIndex = "999";

        var close = block_ui.querySelector('span');
        close.addEventListener("click", function () {
            var block_ui = document.querySelector('#block_ui');
            var financial_widgets = block_ui.querySelectorAll('.stock_financial');
            financial_widgets.forEach(function (widget) {
                widget.remove();
            });
            block_ui.style.zIndex = "-999";
        }, false);

        var article = this.closest('article');
        var stocks = article.querySelectorAll('.stock_item');

        stocks.forEach(function (stock) {
            var div = document.createElement('div');
            div.classList.add('stock_financial');
            block_ui.querySelector('.stock_financial_container').append(div);
            (0, _financialWidget2.default)(div, stock.dataset);
        });
    }

    function addStockItem() {
        var stock = this.previousElementSibling.value;
        if (stock) {
            var article = this.closest('.collection_stock');
            var symbol = stock.split(' ')[0];

            // Descobrir um jeito de deixar o valor stock_parent dinamico
            var data = {
                'stock_name': symbol,
                'stock_parent': 'BMFBOVESPA'
            };
            var block = document.createElement('div');
            block.dataset.stock_name = data.stock_name;
            block.dataset.stock_parent = data.stock_parent;
            block.classList.add('stock_item');

            (0, _overviewWidget2.default)(block, data);
            // loadFinancialWidget(article, el);
            article.append(block);
        }
    }

    var collection_stocks = document.querySelector('#collection_stocks');
    collection_stocks.insertAdjacentHTML('beforeend', '\n<article class="collection_stock">\n    <div class="controllers">\n        <div>\n            <p>' + collection_name + '</p>\n        </div>\n        <div>\n            <a class="compare" href="#">Comparar</a>\n        </div>\n        <div>\n            <a href="#" class="close_selection">x</a>\n        </div>\n    </div>\n    <div class="stock_search_form">\n        <div class="autocomplete">\n            <input class="search_stocks" type="text" name="search_stocks">\n            <a class="add_stock">+</a>\n            <div class="stocks_added"></div>\n        </div>\n    </div>\n</article>\n    ');

    var collection_add = collection_stocks.lastElementChild.querySelector('.add_stock');
    var collection_input = collection_stocks.lastElementChild.querySelector('.search_stocks');
    var collection_close = collection_stocks.lastElementChild.querySelector('.close_selection');
    var collection_compare = collection_stocks.lastElementChild.querySelector('.compare');

    (0, _stocksRepo2.default)(function (response) {
        var arr_stocks = [];
        var availableStocks = JSON.parse(response);
        availableStocks.data.forEach(function (data) {
            arr_stocks.push(data.Code + ' - ' + data.Name);
        });
        (0, _autocomplete2.default)(collection_input, arr_stocks);
    });

    collection_add.addEventListener("click", addStockItem, false);
    collection_close.addEventListener("click", removeCollection, false);
    collection_compare.addEventListener("click", compareCollection, false);
}