import './styles.css';

// HTML - Template Markup

const tmpl = document.createElement('template');
tmpl.innerHTML = `
<style>
  .container {
    position: absolute;
    bottom: 10px;
    right: 10px;
    padding: 10px;
    border: 1px solid #D3D3D3;
    border-radius: 5px;
  }
  ::slotted(*) {
    color: red;
    text-align: left;
    max-width: 300px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
<div class="container">
  <slot name="message"></slot>
</div>`;

// Custom Elements - Shadow DOM
class ToasterComponent extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
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
