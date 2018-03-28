'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadOverviewWidget;
function loadOverviewWidget(element, stock) {
  element.insertAdjacentHTML('beforeend', '\n<div class="tradingview-widget-container widget_overview">\n  <div class="tradingview-widget-container__widget"></div>\n</div>\n  ');

  var script = document.createElement('script');
  script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
  script.async = true;
  script.innerHTML = '\n  {\n    "symbol": "' + stock.stock_parent + ':' + stock.stock_name + '",\n    "width": "300",\n    "height": 150,\n    "locale": "br",\n    "dateRange": "12m",\n    "colorTheme": "dark",\n    "trendLineColor": "#37a6ef",\n    "underLineColor": "rgba(55, 166, 239, 0.15)",\n    "isTransparent": false,\n    "autosize": false,\n    "largeChartUrl": ""\n  }\n  ';

  element.querySelector('.widget_overview').append(script);
  return element;
}