import { ORDERPRODUCT_SUCESS } from "./Order.type";


export const PlaceOrder = (data) => {
    
  return  ({ type: ORDERPRODUCT_SUCESS, payload: data })
 
};


