class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <footer class="text-muted">
      <div class="container">

        <br>
        <hr>
        <br>

        <p><small>ProductPeople.io est un projet porté par <a href="https://www.linkedin.com/in/yoanngrange/" target="_blank">Yoann Grange</a>. Les points de vue exprimés sur ce site ne sont que des points de vue. Ces derniers datent de décembre 2016.</small></p>
      </div>
    </footer>

    <script src="js/ie10-viewport-bug-workaround.js"></script>
    `;
  }
}

customElements.define('footer-component', Footer);
