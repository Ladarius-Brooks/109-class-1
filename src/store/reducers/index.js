import { combineReducers } from 'redux';
import cartCounterReducer from './cartCounter';
import todoReducer from "./todoReducer";
import cartProductsReducer from './cartProducts';

const rootReducer = combineReducers({
    count: cartCounterReducer,
    todo: todoReducer,
    cart: cartProductsReducer,
}); 

export default rootReducer;