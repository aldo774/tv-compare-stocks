/* eslint-env browser */
import addSearchStockWidget from './searchStockWidget';

export default function compareStocksTrigger() {
  var collection_generator = document.querySelector('#add_stock_collection')

  collection_generator.addEventListener("click", function(){
    var collection_name = this.previousElementSibling.value
    addSearchStockWidget(collection_name)
  }, false)
}
