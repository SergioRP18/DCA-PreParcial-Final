import { addObserver } from "../store";
import { getProduct } from "../utils/firebase";

class AppDashboard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        addObserver(this); // Observa el estado para que se actualice cuando cambie
    }

    connectedCallback(){
        this.render();
    }

    async render(){
        const nav = this.ownerDocument.createElement("app-nav");
        this.shadowRoot?.appendChild(nav);

        if (this.shadowRoot) {
            const section = this.ownerDocument.createElement('section');
            const headDiv = this.ownerDocument.createElement('div');

            section.appendChild(headDiv);

            const title = this.ownerDocument.createElement('h1');
            title.innerText = "Available Vinyl Records";
            headDiv.appendChild(title);

            const data = await getProduct();
            
            data.forEach((product) => {
                const postProduct = this.ownerDocument.createElement("post-product");
                postProduct.setAttribute('name', product.name);
                postProduct.setAttribute('author', product.author);
                postProduct.setAttribute('album', product.album);
                postProduct.setAttribute('price', product.price.toString());
                postProduct.setAttribute('stock', product.stock.toString());
                postProduct.setAttribute('img', product.img);
                headDiv.appendChild(postProduct);
            });

            this.shadowRoot?.appendChild(section);
        }
    }
}

customElements.define("app-dashboard", AppDashboard);
export default AppDashboard;
