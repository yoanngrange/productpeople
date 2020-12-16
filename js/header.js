class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="jumbotron text-xs-center">
      <div class="container">
        <a href="index.html">
          <img src="img/logo-product-people.png">
        </a>
        <br>
        <br>
        <p class="lead text-muted">25 interviews vidéo de Product Owners, Product Managers, Head of Product... afin de faire connaître ces métiers.</p>
        </form>
      </div>
    </section>
    `;
  }
}

customElements.define('header-component', Header);
