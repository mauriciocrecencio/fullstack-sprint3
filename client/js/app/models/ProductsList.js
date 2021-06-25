class ProductsList {
  // TODO: implementar
  constructor() {
    this._products = [];
    this._filteredProducts = [];
  }
  add(product) {
    this._products.push(product);
  }

  get products() {
    return this._products;
  }

  setProducts(products) {
    this._products = products;
  }
}
