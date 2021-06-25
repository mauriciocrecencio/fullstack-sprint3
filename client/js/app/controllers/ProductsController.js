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
    // Preciso guardar os produtos iniciais para conseguir
    // alterar o .products diretamente e assim alterando a view
    this._initialProducts = this._productsList.products;
  }

  filterProducts(e) {
    const term = e.target.value;

    // Se campo de busca vazio, seta os produtos iniciais
    if (!term) {
      this._productsList.setProducts(this._initialProducts);
      return;
    }
    // Se eu fizesse o filtro diretamente nos _products
    // eu iria estar filtrando os produtos do último filtro
    const filteredProducts = this._initialProducts.filter((product) =>
      product.description.toLowerCase().includes(term)
    );
    if (filteredProducts) {
      this._productsList.setProducts(filteredProducts);
    }
  }

  allProducts() {
    let service = new ProductsService();
    service
      .allProducts()
      .then((products) =>
        products.forEach((product) => {
          console.log(products);
          this._productsList.add(product);
        })
      )
      .catch();
  }
}
