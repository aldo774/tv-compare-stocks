export default function loadOverviewWidget(element, stock){
  element.insertAdjacentHTML('beforeend', `
<div class="tradingview-widget-container widget_overview">
  <div class="tradingview-widget-container__widget"></div>
</div>
  `)

  let script = document.createElement('script');
  script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
  script.async = true;
  script.innerHTML = `
  {
    "symbol": "${stock.stock_parent}:${stock.stock_name}",
    "width": "300",
    "height": 150,
    "locale": "br",
    "dateRange": "12m",
    "colorTheme": "dark",
    "trendLineColor": "#37a6ef",
    "underLineColor": "rgba(55, 166, 239, 0.15)",
    "isTransparent": false,
    "autosize": false,
    "largeChartUrl": ""
  }
  `;

  element.querySelector('.widget_overview').append(script)
  return element
}
