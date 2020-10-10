import axios from 'axios';
/*
var data = [
    {
        id: "5f40a866337a3bb00793da52",
        price: 16.39,
        stock: 34,
        title: "Banana",
        image: "img-5.jpg",
        discount: 4,
        category: "Fruit"
    },
    {
        id: "5f40a866ea0a04e6891b7084",
        price: 14.00,
        stock: 14,
        title: "Orange",
        image: "product-10.jpg",
        discount: 0,
        category: "Fruit"
    },
    {
        id: "5f40a866ea0a04e6891212333",
        price: 12.00,
        stock: 11,
        title: "Egg",
        image: "img-15.jpg",
        discount: 12,
        minimum: 6,
        category: "Dairy & Eggs"
    },
    {
        id: "5f40a866ea0a04e68911231328",
        price: 19.10,
        stock: 11,
        title: "Orange Juice",
        image: "product-15.jpg",
        discount: 12,
        category: "Beverages"
    },
];
*/
class ItemService {
    serverUrl = 'http://fsdi.azurewebsites.net/api/';

    async getProducts () {
        // retrieve prods from backend
        const resp = await axios.get(this.serverUrl + '/products');
        return resp.data;
    }
    // cart = array of products
    async saveCart(userName, cart) {

        let data = {
            user: userName,
            products: cart,
            total: 0
        }
        const resp = await axios.post(this.serverUrl + '/cart', data);
        console.log(resp);
    }

}

export default ItemService;