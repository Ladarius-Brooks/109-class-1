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

            return [...state ,action.payload];
        default:
            return state;
    }
};

export default cartProductsReducer;