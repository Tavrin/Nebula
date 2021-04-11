const template = document.createElement('template');
template.innerHTML = `

  <style>
    p {
      color: black;
      padding: 5px;
    }
  </style>
  <div id="action-zone">
    <p>test action panel</p>
  </div>

`

export class ActionPanel extends HTMLElement  {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'})
        .appendChild(template.content.cloneNode(true));
    }
    
    connectedCallback() {
    }
}

customElements.define('action-panel', ActionPanel);
