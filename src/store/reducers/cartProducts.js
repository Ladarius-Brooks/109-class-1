
import ItemService from './../../services/itemService';

const cartProductsReducer = (state = [], action) => {
    switch(action.type) {
        case "ADD_PRODUCT":
            /**
             * algorith to:
             * add items to the cart
             * check if the item is already present
             * if so, dont add, just sum the quantities
             */
            const prodCode = action.payload.product.id;
            // check if there is another product with same code on cart
            let found = false;
            let cart = [...state]; // copy the state
            for(let i=0; i< cart.length; i++) {
                const prod = cart[i];
                if(prod.product.id === prodCode) {
                    prod.quantity += action.payload.quantity;
                    found = true;
                }
            }

            // the cart does not contain that item
            if(!found) {
                cart.push(action.payload);
            };

             // update cart on the server
            let service = new ItemService();
            service.saveCart('Ladarius', cart);



            return cart;

        case "REMOVE_PRODUCT":
            return [...state.filter(pc => pc.product.id !== action.payload)];
             /**
             * create of the state
             * travel the array
             * look for the item with id = action.payload
             * remove that item 
             * return the copy this is another way to do it
             */

        default:
            return state;
    }
};

export default cartProductsReducer;