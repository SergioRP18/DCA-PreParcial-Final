import { Product } from "../../types/product";
import firebase from "../../utils/firebase";

const formData: Omit<Product, 'id'> = {
    name: '',
    author: '',
    album: '',
    img: '',
    stock: 0,
    price: 0,
};

class addProduct extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render();
    }

    ChangeName(e: any){
        formData.name = e.target.value;
    }

    ChangeAuthor(e: any){
        formData.author = e.target.value;
    }

    ChangeAlbum(e: any){
        formData.album = e.target.value;
    }

    ChangeImg(e: any){
        formData.img = e.target.value;
    }

    ChangeStock(e: any){
        formData.stock = e.target.value;
    }

    ChangePrice(e: any){
        formData.price = e.target.value;
    }

    submitForm(){
        firebase.addProduct(formData);
    }

    render(){
        if(this.shadowRoot){
            const container = this.ownerDocument.createElement('div');

            const title = this.ownerDocument.createElement('h1');
            title.innerText = "Add New Product";
            container.appendChild(title);

            const form = this.ownerDocument.createElement('form');
            container.appendChild(form);

            const name = this.ownerDocument.createElement('input');
            name.placeholder = "Enter Album Name";
            name.addEventListener('change', this.ChangeName);
            form.appendChild(name);

            const author = this.ownerDocument.createElement('input');
            author.placeholder = "Enter Author Name";
            author.addEventListener('change', this.ChangeAuthor);
            form.appendChild(author);

            const album = this.ownerDocument.createElement('input');
            album.placeholder = "Enter Album Name";
            album.addEventListener('change', this.ChangeAlbum);
            form.appendChild(album);

            const image = this.ownerDocument.createElement('input');
            image.placeholder = "Enter Cover";
            image.addEventListener('change', this.ChangeImg);
            form.appendChild(image);

            const stock = this.ownerDocument.createElement('input');
            stock.placeholder = "Enter Quantity";
            stock.addEventListener('change', this.ChangeStock);
            form.appendChild(stock);

            const price = this.ownerDocument.createElement('input');
            price.placeholder = "Enter Price";
            price.addEventListener('change', this.ChangePrice)
            form.appendChild(price);

            const save = this.ownerDocument.createElement('button');
            save.innerText = "Publish";
            save.addEventListener('click', this.submitForm);
            form.appendChild(save);

            this.shadowRoot?.appendChild(container);
        }
    }
}
customElements.define("add-product", addProduct);
export default addProduct;