import { REQUEST_PRODUCT,SUCESS_PRODUCT,FILEIR_PRODUCT } from "../Products/Product.types"

export const getData = (data={category:"",order:"asc",page:1}) =>
 async (dispatch) => {
    dispatch({ type: REQUEST_PRODUCT });
    try {
        fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?filter=${data.category}&&sort=price&&order=${data.order}&&limit=12&&page=${data.page}`)
            .then((res) => res.json())
            .then((res) => dispatch({ type: SUCESS_PRODUCT, payload: res }))
    }
    catch (err) {
        dispatch({ type: FILEIR_PRODUCT })
    }
}