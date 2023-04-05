import { ORDERPRODUCT_SUCESS } from "./Order.type"


const InitialState = {
    orderData: [],
}
export const OrderReducer = (state = InitialState, { type, payload }) => {
    switch (type) {
        case ORDERPRODUCT_SUCESS: {
           
            return {
                ...state,
                orderData: [...state.orderData, payload],
            }
        }
        default: {
            return state
        }
    }
}