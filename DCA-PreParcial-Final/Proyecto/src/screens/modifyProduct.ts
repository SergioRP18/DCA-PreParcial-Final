import "../components/export";

class AppModifyProducts extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        const nav = this.ownerDocument.createElement("app-nav");
        this.shadowRoot?.appendChild(nav);
    }
}
customElements.define("app-modify-products", AppModifyProducts);
export default AppModifyProducts;