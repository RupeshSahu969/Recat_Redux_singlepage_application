import { PRODUCTDETAILS_FAILERS,PRODUCTDETAILS_SUCESS,PRODUCTDETILS_REQUEST } from "./Details.types"

const InitialState = {
    productDetails: {},
    loading: false,
    error: false,
}

export const ProductDetailsReducer = (state = InitialState, { type, payload }) => {
    switch (type) {
        case PRODUCTDETILS_REQUEST: {
            return {
                ...state,
                loading: true,
            }
        }
        case PRODUCTDETAILS_SUCESS: {
            return {
                ...state,
                loading: false,
                productDetails: payload,
            }
        }
        case PRODUCTDETAILS_FAILERS: {
            return {
                ...state,
                loading: false,
                error: true,
            }

        }
        default: {
            return state
        }
    }
}