export const depositHandler = (amount) =>{
    return (dispatch) =>{
        dispatch({
            type: "DEP_MON",
            payload: +amount
        })
    }
}

export const drawHandler = (amount) =>{

    return (dispatch) =>{
        dispatch({
            type: "WIT_MON",
            payload: +amount
        })
    }
}