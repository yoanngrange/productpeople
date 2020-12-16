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

        <p><small>ProductPeople.io est un projet porté par <a href="https://fr.linkedin.com/in/yoanngrange" target="_blank">Yoann Grange</a>, hébergé sur <a href="https://pages.github.com/" target="_blank">Github Pages</a>, qui utilise <a href="http://v4-alpha.getbootstrap.com/" target="_blank">Bootstrap 4</a> et <a href="https://fonts.google.com/specimen/Copse/" target="_blank"> Copse</a>. Les points de vue exprimés sur ce site ne sont que des points de vue.</small></p>
      </div>
    </footer>

    <script src="js/ie10-viewport-bug-workaround.js"></script>
    `;
  }
}

customElements.define('footer-component', Footer);
