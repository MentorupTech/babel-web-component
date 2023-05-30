class ButtonNotification extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.myTemplate = document.querySelector('#button');
        this.cloneTemplate = document.importNode(this.myTemplate.content, true);
    }

    connectedCallback() {
        this.shadowRoot.appendChild(this.cloneTemplate);
        debugger;
        const button = this.shadowRoot.querySelector('button');
        button.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('custom-click', {
                bubbles: true,
                composed: true,
                detail: 'true | false'
            }))
        })
    }

};

//todo
window.customElements.define('button-notification', ButtonNotification);




class ComponentNotification extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.myTemplate = document.querySelector('#notification');
        this.cloneTemplate = document.importNode(this.myTemplate.content, true);
    }

    connectedCallback() {
        this.shadowRoot.appendChild(this.cloneTemplate);
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        const section = this.cloneTemplate.querySelector('section');
        section.classList.add(newValue);
    }


    static get observedAttributes() {
        return [ 'is-visible' ]
    }



};

window.customElements.define('component-notification', ComponentNotification);