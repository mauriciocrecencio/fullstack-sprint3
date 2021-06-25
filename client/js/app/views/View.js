class View {
  constructor(element) {
    this._element = element;
  }

  template() {
    throw new Error('O método "template" deve ser implementado');
  }

  update(model) {
    console.log("UPDATE");
    this._element.innerHTML = this.template(model);
  }
}
