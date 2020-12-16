class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="jumbotron text-xs-center">
      <div class="container">
        <a href="index.html">
          <img width="200" src="img/logo-product-people.png">
        </a>
        <br>
        <br>
        <p class="lead text-muted">25 interviews de Product Owners, Product Managers & Heads of Product</p>
        </form>
      </div>
    </section>
    `;
  }
}

customElements.define('header-component', Header);
