import { addObserver } from "../../store";

class EditProduct extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        addObserver(this);
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){

        }
    }
}
customElements.define("edit-product", EditProduct);
export default EditProduct;