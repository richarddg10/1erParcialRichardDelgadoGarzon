class MyPokemones extends HTMLElement {

    static get observedAttributes() {
        return ['name', 'type', 'base']
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue
        this.render()
    }
    
    constructor () {
        super()
        this.attachShadow({ mode: 'open'})
    }

    connectedCallback() {
        console.log('funciona');
        this.render()
    }

    render() {
        this.shadowRoot.innerHTML = `

        <link rel="stylesheet" href="./src/components/pokemones/style.css">

        <section class="tarjetas">
        <h1 class="nombre">${this.name}</h1>
        <h3 class="poderes">${this.base}</h3>
        </section>
        
        `
    }
}

customElements.define('my-pokemones', MyPokemones)
export default MyPokemones