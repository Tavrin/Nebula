const template = document.createElement('template');
template.innerHTML = `

  <style>
    p {
      color: black;
      background-color: wheat;
      padding: 5px;
    }
  </style>
  <p>
  <slot name="text" />
  </p>

`

export class StoryPanel extends HTMLElement  {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'})
        .appendChild(template.content.cloneNode(true));
    }       
}

customElements.define('story-panel', StoryPanel);
