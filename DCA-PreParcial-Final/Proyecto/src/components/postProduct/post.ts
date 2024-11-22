
export enum AttributesPost {
    'uid'='uid',
    'name'='name',
    'author'='author',
    'album'='album',
    'img'='img',
    'stock'='stock',
    'price'='price',
}

class PostProduct extends HTMLElement {
    uid?: number;
    name?: string;
    author?: string;
    album?: string;
    img?: string;
    stock?: number;
    price?: number;

    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    static get observedAttributes(){
        return Object.keys(AttributesPost);
    }

    attributeChangedCallback(propName: AttributesPost, oldValue: string|any, newValue:string|any){
        switch(propName){
            case AttributesPost.uid:
                this.uid = newValue ? Number(newValue): undefined;
                break;

            case AttributesPost.price:
                this.price = newValue ? Number(newValue): undefined;
                break;
            
            case AttributesPost.stock:
                this.stock = newValue ? Number(newValue): undefined;
                break;
            
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            const container = this.ownerDocument.createElement('div');

            const image = this.ownerDocument.createElement('img');
            const photo = this.getAttribute('img') || 'default_image';
            image.src = photo;
            image.alt = "Photo of disc or artist";

            const name = this.ownerDocument.createElement('h2');
            const nameOfDisc = this.getAttribute('name') || 'default_name_disc';
            name.innerText = nameOfDisc;

            const author = this.ownerDocument.createElement('span');
            const nameOfAuthor = this.getAttribute('author') || 'default_name_author';
            author.innerText = nameOfAuthor;

            const album = this.ownerDocument.createElement('span');
            const nameOfAlbum = this.getAttribute('album') || 'default_name_album';
            album.innerText = nameOfAlbum;

            const stock = this.ownerDocument.createElement('h4');
            const numberOfStock = this.getAttribute('stock') || 'default_number_of_stock';
            stock.innerText = numberOfStock;

            const price = this.ownerDocument.createElement('span');
            const priceOfProduct = this.getAttribute('price') || 'default_price_of_product';
            price.innerText = priceOfProduct;

            container.appendChild(image);
            container.appendChild(name);
            container.appendChild(author);
            container.appendChild(stock);
            container.appendChild(price);

            this.shadowRoot?.appendChild(container);
        }
    }
}
customElements.define("post-product", PostProduct);
export default PostProduct;