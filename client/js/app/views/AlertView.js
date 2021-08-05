class AlertView extends View {
  constructor(element) {
    super(element);
  }

  template(data) {
    const { message } = data;
    return message ? `<p class="alert">${message}</p>` : "<p></p>";
  }
}
