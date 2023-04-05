import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { ProductReducer } from "../Products/Product.reducer";
import { ProductDetailsReducer } from "../ProductDetails/Details.reducer";
import { CartReducer } from "../Cart/Cart.reducer";
import { OrderReducer } from "../Order/Order.reducer";
const rootReducer = combineReducers({
    products: ProductReducer,
    productDetails:ProductDetailsReducer,
    cart:CartReducer,
    order:OrderReducer
});
export const store = legacy_createStore(
    rootReducer,

    applyMiddleware(thunk)
);