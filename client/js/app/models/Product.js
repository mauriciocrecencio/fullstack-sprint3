class Product {
  constructor(image, description, value) {
    this._image = image;
    this._description = description;
    this._value = value;
    Object.freeze(this);
  }

  get image() {
    return this._image;
  }
  get description() {
    return this._description;
  }
  get value() {
    return this._value;
  }
}
