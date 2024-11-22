import "./screens/dashboard";
import "./screens/addProduct";
import "./screens/modifyProduct";
import "./components/export";
import { addObserver, appState } from "./store";

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this);
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = '';

            switch(appState.screen){
                case 'DASHBOARD':
                    const dashboard = this.ownerDocument.createElement('app-dashboard');
                    this.shadowRoot?.appendChild(dashboard);
                    break;

                case 'ADD_PRODUCTS':
                    const addProduct = this.ownerDocument.createElement('app-add-product');
                    this.shadowRoot?.appendChild(addProduct);
                    break;

                case 'MODIFY_PRODUCTS':
                    const modifyProducts = this.ownerDocument.createElement('app-modify-products');
                    this.shadowRoot?.appendChild(modifyProducts);
                    break;

                default:
                    break;
            }
        }
    }
}

customElements.define('app-container', AppContainer);