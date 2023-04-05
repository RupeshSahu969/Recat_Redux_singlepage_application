import { Decreament, Increament, CARTPRODUCR_REQUEST } from "./Cart.type"


const InitialState = {
    cartData: [],

}
export const CartReducer = (state = InitialState, { type, payload }) => {
    switch (type) {
        case CARTPRODUCR_REQUEST: {
            return {
                ...state,
                cartData: [...state.cartData, payload],
            }

        }
        case Increament: {
            let array = state.cartData.map((el) => {
                if (el.id == payload) {
                    return { ...el, count: el.count + 1 }
                } else {
                    return el;
                }
            })
            return {
                ...state,
                cartData: [...array]
            }
        }
        case Decreament: {
            let array = state.cartData.map((el) => {
                if (el.id == payload) {
                    return { ...el, count: el.count - 1 }
                } else {
                    return el;
                }
            })
            return {
                ...state,
                cartData: [...array]
            }
        }
        default: {
            return state
        }
    }
}