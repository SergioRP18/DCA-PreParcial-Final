import "../components/export";

class AppAddProduct extends HTMLElement {
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

        const add = this.ownerDocument.createElement("add-product");
        this.shadowRoot?.appendChild(add);
    }
}
customElements.define("app-add-product", AppAddProduct);
export default AppAddProduct;