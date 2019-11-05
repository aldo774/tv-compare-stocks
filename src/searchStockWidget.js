import loadFinancialWidget from './financialWidget';
import loadOverviewWidget from './overviewWidget';
import autoComplete from './autocomplete';
import loadJSON from './stocksRepo';

export default function addSearchStockWidget(collection_name){

    function removeCollection(){
        this.closest('article').remove()
    }

    function addStockItem(){
        let stock = this.previousElementSibling.value
        if(stock){
            let article = this.closest('.collection_stock')
            let symbol = stock.split(' ')[0]

            // Descobrir um jeito de deixar o valor stock_parent dinamico
            let data = {
                'stock_name': symbol,
                'stock_parent': 'BMFBOVESPA',
            }
            let block = document.createElement('div')
            block.dataset.stock_name = data.stock_name
            block.dataset.stock_parent = data.stock_parent
            block.classList.add('stock_item')

            loadOverviewWidget(block, data);
            // loadFinancialWidget(article, el);
            article.append(block)
        }
    }

    let collection_stocks = document.querySelector('#collection_stocks')
    collection_stocks.insertAdjacentHTML('beforeend', `
<article class="collection_stock">
    <div class="controllers">
        <h2>${collection_name}</h2>
        <div>
            <a href="#" class="close_selection">X</a>
        </div>
    </div>
    <div class="stock_search_form">
        <div class="autocomplete">
            <input class="search_stocks" type="text" name="search_stocks">
            <a class="add_stock">+</a>
            <div class="stocks_added"></div>
        </div>
    </div>
</article>
    `)

    let collection_input = collection_stocks.lastElementChild.querySelector('.search_stocks')
    let collection_add = collection_stocks.lastElementChild.querySelector('.add_stock')
    let collection_close = collection_stocks.lastElementChild.querySelector('.close_selection')

    loadJSON(function(response) {
        let arr_stocks = [];
        let availableStocks = JSON.parse(response);
        availableStocks.data.forEach((data) => {arr_stocks.push(`${data.Code} - ${data.Name}`)})
        autoComplete(collection_input, arr_stocks)
    })

    collection_add.addEventListener("click", addStockItem, false)
    collection_close.addEventListener("click", removeCollection, false)
}
