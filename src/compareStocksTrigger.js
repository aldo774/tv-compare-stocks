/* eslint-env browser */
import addSearchStockWidget from './searchStockWidget';

export default function compareStocksTrigger() {
  let collection_generator = document.querySelector('#add_stock_collection')
  collection_generator.addEventListener("click", addSearchStockWidget, false)
}
