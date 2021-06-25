class ProductsView extends View {
  constructor(element) {
    super(element);
  }

  template(data) {
    return `
    <ol class="products__list">
    ${data.products
      .map((product) => {
        return `
          <li class="products__card">
          <div class="card">
            <img
              class="card__img"
              src="${product.image}"
              alt="Jaqueta Puffer Juvenil Com Capuz Super Mario Branco Tam 10 a 18"
            />
            <p class="card__description">
              ${product.description}
            </p>
            <p class="card__price">R$ ${product.value}</p>
          </div>
        </li>`;
      })
      .join("")}
    </ol>`;
  }
}
