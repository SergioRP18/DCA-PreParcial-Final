import { dispatch } from "../../store";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/navigation";

class Nav extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render();

        const home = this.shadowRoot?.querySelector('#input-home-dashboard');
        const addProduct = this.shadowRoot?.querySelector('#input-add-product');
        const modifyProduct = this.shadowRoot?.querySelector('#input-modify-products');

        home?.addEventListener('click', (e) => {
            e.preventDefault();
            dispatch(navigate(Screens.DASHBOARD));
        });
    
        addProduct?.addEventListener('click', (e) => {
            e.preventDefault();
            dispatch(navigate(Screens.ADD_PRODUCTS));
        });
    
        modifyProduct?.addEventListener('click', (e) => {
            e.preventDefault();
            dispatch(navigate(Screens.MODIFY_PRODUCTS));
        });
    }

    render(){
        if(this.shadowRoot){
            const nav = this.ownerDocument.createElement('nav');

            const logo = this.ownerDocument.createElement('h1');
            logo.innerText = "Record Store";
            nav.appendChild(logo);

            const inputsDiv = this.ownerDocument.createElement('div');
            nav.appendChild(inputsDiv);

            const home = this.ownerDocument.createElement('a');
            home.innerText = "Home";
            home.id = "input-home-dashboard";
            inputsDiv.appendChild(home);

            const addProduct = this.ownerDocument.createElement('a');
            addProduct.innerText = "Add New Product";
            addProduct.id = "input-add-product";
            inputsDiv.appendChild(addProduct);

            const modifyProduct = this.ownerDocument.createElement('a');
            modifyProduct.innerText = "Modify Products";
            modifyProduct.id = "input-modify-products";
            inputsDiv.appendChild(modifyProduct);

            this.shadowRoot?.appendChild(nav);
        }
    }
}
customElements.define("app-nav", Nav);
export default Nav;