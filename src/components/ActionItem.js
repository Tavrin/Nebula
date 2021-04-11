const template = document.createElement('template');
template.innerHTML = `

  <style>
    p {
      color: black;
      padding: 5px;
    }
  </style>
  <p>texte action</p>

`

export class ActionItem extends HTMLElement  {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'})
        .appendChild(template.content.cloneNode(true));
    }
    
    connectedCallback() {
    }
}

customElements.define('action-item', ActionItem);
