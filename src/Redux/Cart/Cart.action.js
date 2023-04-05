import { Decreament, Increament, CARTPRODUCR_REQUEST } from "./Cart.type";


export const AddToCart = (data) => ({ type: CARTPRODUCR_REQUEST, payload: data });
export const increament = (data) => ({ type: Increament,payload: data });
export const decrement = (data) => ({ type: Decreament,payload: data });

