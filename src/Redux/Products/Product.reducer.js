import { SUCESS_PRODUCT,FILEIR_PRODUCT,REQUEST_PRODUCT } from "./Product.types"

const InitialV = {
    totalPages:0,
    data: [],
    loading: false,
    error: false,
}

export const ProductReducer = (state = InitialV, { type, payload }) => {
    switch (type) {
        case REQUEST_PRODUCT: {
            return {
                ...state,
                loading: true,
            }
        }
        case SUCESS_PRODUCT: {
            return {
                ...state,
                loading: false,
                data: payload.data,
                totalPages: payload.totalPages
            }
        }
        case FILEIR_PRODUCT: {
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