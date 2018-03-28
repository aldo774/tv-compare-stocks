export default function loadFinancialWidget(element, stock){
  element.insertAdjacentHTML('beforeend', `
<div class="tradingview-widget-container widget_financial">
  <div class="tradingview-widget-container__widget"></div>
</div>
  `)
  
  let script = document.createElement('script');
  script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-financials.js'
  script.async = true;
  script.innerHTML = `
  {
    "symbol": "${stock.stock_parent}:${stock.stock_name}",
    "colorTheme": "dark",
    "isTransparent": false,
    "displayMode": "compact",
    "width": "400",
    "height": "500",
    "locale": "br"
  }
  `;

  element.querySelector('.widget_financial').append(script)
  return element
}