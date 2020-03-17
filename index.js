// HTML - Template Markup

const tmpl = document.createElement('template');
tmpl.innerHTML = `
<style>
  .message {
    color: red;
    text-align: center;
  }
</style>
<div class="container">
<div class="message"></div>
</div>`;

// Custom Elements - Shadow DOM
class ToasterComponent extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });    
  }

  static get observedAttributes() {
    return ['message'];
  }

  // Life Cycle Events
  connectedCallback() {
    this._shadowRoot.appendChild(tmpl.content.cloneNode(true));

    //   element references

  }

  attributeChangedCallback(prop, oldVal, newVal) {
    
  }

  // Event Handlers

}

customElements.define('vj-toaster', ToasterComponent);
