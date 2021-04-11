const template = document.createElement('template');
template.innerHTML = `

  <style>
    p {
      color: black;
      padding: 5px;
    }
  </style>
  <div id="text-zone">
    <p>
      <slot name="text" />
    </p>
  </div>

`

export class StoryPanel extends HTMLElement  {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'})
        .appendChild(template.content.cloneNode(true));
    }
    
    connectedCallback() {
      if (this.getAttribute('paper_background')) {
        this.shadowRoot.querySelector('#text-zone').style.background = this.getAttribute('paper_background');
        console.log( this.shadowRoot.querySelector('#text-zone'));
      }
    }
}

customElements.define('story-panel', StoryPanel);
