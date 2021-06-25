class ProductsService {
  constructor() {
    this._http = new HttpService();
  }

  allProducts() {
    return this._http
      .get("api/products")
      .then((products) => {
        console.log(products);
        return products.map(
          (product) => new Product(product.image, product.description, product.value)
        );
      })
      .catch((erro) => {
        console.log(erro);
        throw new Error("Não foi possível obter os produtos");
      });
  }
}
