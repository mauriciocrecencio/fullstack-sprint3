class Bind {
  constructor(model, view, ...props) {
    let proxy = ProxyFactory.create(model, props, (model) => view.update(model));
    console.log(model);
    view.update(model);

    return proxy;
  }
}
