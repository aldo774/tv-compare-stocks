'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadFinancialWidget;
function loadFinancialWidget(element, stock) {
  element.insertAdjacentHTML('beforeend', '\n<div class="tradingview-widget-container widget_financial">\n  <div class="tradingview-widget-container__widget"></div>\n</div>\n  ');

  var script = document.createElement('script');
  script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-financials.js';
  script.async = true;
  script.innerHTML = '\n  {\n    "symbol": "' + stock.stock_parent + ':' + stock.stock_name + '",\n    "colorTheme": "dark",\n    "isTransparent": false,\n    "displayMode": "compact",\n    "width": "400",\n    "height": "500",\n    "locale": "br"\n  }\n  ';

  element.querySelector('.widget_financial').append(script);
  return element;
}