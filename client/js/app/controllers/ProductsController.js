class ProductsController {
  constructor() {
    let $ = document.querySelector.bind(document);

    this._alert = new Bind(new Alert(), new AlertView($("#alertView")), "message");
    this._productsList = new Bind(
      new ProductsList(),
      new ProductsView($("#products")),
      "add",
      "setProducts"
    );
    this.allProducts();
    this._initialProducts = this._productsList.products;
  }

  filterProducts(e) {
    const term = e.target.value;
    const filteredProducts = this._initialProducts.filter((product) =>
      product.description.toLowerCase().includes(term)
    );
    this._productsList.setProducts(filteredProducts);
  }

  allProducts() {
    let service = new ProductsService();
    service
      .allProducts()
      .then((products) => products.forEach((product) => this._productsList.add(product)))
      .catch();
  }
}
