import { PRODUCTDETAILS_FAILERS,PRODUCTDETAILS_SUCESS,PRODUCTDETILS_REQUEST } from "./Details.types";


export const getDetails= (id) => async (dispatch) => {
    dispatch({ type: PRODUCTDETILS_REQUEST });
    try {
        fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`)
            .then((res) => res.json())
            .then((res) =>{
                dispatch({ type: PRODUCTDETAILS_SUCESS, payload: res.data })
                
            })

    }
    catch (err) {
        dispatch({ type: PRODUCTDETAILS_FAILERS })
    }
}