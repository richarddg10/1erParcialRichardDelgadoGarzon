import './components/pokemones/pokemones.js'
import './components/botonAtrapado/botonAtrapado.js'
import data from './components/data.js'

class MyContainer extends HTMLElement {

    constructor () {
        super()
        this.attachShadow({ mode: 'open'})
    }

    connectedCallback() {
        this.render()
    }

    render() {

        const compts = data.map(({name, base}) => `
        <my-pokemones
        name="${name.english}"
        base="HP:${base.HP}
        Attack:${base.Attack}
        Defense:${base.Defense}
        SpAttack:${base.SpAttack}
        SpDefense:${base.SpDefense}
        Speed:${base.Speed}"
        ></my-pokemones>

        <my-botonatrapado></my-botonatrapado>
        `)
        console.log(compts)
        this.shadowRoot.innerHTML = compts.join("")
    }
}

customElements.define('my-container', MyContainer)