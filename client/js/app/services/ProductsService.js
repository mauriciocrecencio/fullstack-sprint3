class ProductsService {
  constructor() {
    this._http = new HttpService();
  }

  allProducts() {
    return this._http
      .get("api/products")
      .then((products) =>
        products.map((product) => new Product(product.image, product.description, product.value))
      )
      .catch((erro) => {
        throw new Error("Não foi possível obter os produtos");
      });
  }
}
