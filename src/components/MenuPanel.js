const template = document.createElement('template');
template.innerHTML = `

  <style>
    p {
      color: black;
      padding: 5px;
    }
  </style>
  <nav id="menu-zone">
    <ul>
        <li>
            aaa
        </li>
        <li>
            bbb
        </li>
        <li>
            ccc
        </li>
  </nav>

`

export class MenuPanel extends HTMLElement  {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'})
        .appendChild(template.content.cloneNode(true));
    }
    
    connectedCallback() {
    }
}

customElements.define('menu-panel', MenuPanel);
