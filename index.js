import './styles.css';

// HTML - Template Markup

const tmpl = document.createElement('template');
tmpl.innerHTML = `
<style>
  :host {
    display: none;
  }
  .container {
    position: absolute;
    bottom: 10px;
    right: 10px;
    padding: 10px;
    border: 1px solid #D3D3D3;
    border-radius: 5px;
  }
  :host([visible]) {
    display: block;
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
    // this.visible = false;
  }

  // Life Cycle Events
  connectedCallback() {
    this._shadowRoot.appendChild(tmpl.content.cloneNode(true));

    //   element references
    this.$container = this._shadowRoot.querySelector('.container');
    this.$container.addEventListener('click', this.onElementClicked.bind(this));
  }

  onElementClicked(event) {
    try {
      this.visible = false;
      console.log(`Toaster is clicked...`);
    } catch (error) {
      throw error;
    }
  }

  attributeChangedCallback(prop, oldVal, newVal) {
    if (name === 'visible') {
      this.visible = newVal;
    }
  }

  static get observedAttributes() {
    return ['visible'];
  }

  /** Expose the visible attribute as getter and setter **/
  get visible() {
    return this.hasAttribute('visible');
  }

  set visible(val) {
    if (val) {
      this.setAttribute('visible', '');
    } else {
      this.removeAttribute('visible');
    }
  }

  // Event Handlers
}

customElements.define('vj-toaster', ToasterComponent);
