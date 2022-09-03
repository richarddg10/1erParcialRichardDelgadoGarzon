class MyBotonAtrapado extends HTMLElement {

    static get observedAttributes() {
        return ['atrapar']
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue
        this.render()
        this.addEventListener()
    }
    
    constructor () {
        super()
        this.attachShadow({ mode: 'open'})
    }

    connectedCallback() {
        this.render()
        this.addEventListener()
    }

    disconnectedCallback() {
        this.render()
    }

    addEventListeners() {
        const button = this.shadowRoot.querySelector('click')
    }

    removeEventListeners() {
        const button = this.shadowRoot.querySelector('button')
        button = this.removeEventListener('click', this.atrapo)
    }

    atrapo() {

    }

    render() {
        this.shadowRoot.innerHTML = `

        <link rel="stylesheet" href="./src/components/pokemones/style.css">
        
        <button>Atrapar</button>
        `
    }
}

customElements.define('my-botonatrapado', MyBotonAtrapado)
export default MyBotonAtrapado