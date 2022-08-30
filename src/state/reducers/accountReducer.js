const initialState = 0;

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "DEP_MON":{
            return state + action.payload
        }
        case "WIT_MON":{
            return state - action.payload
        }
        default:{
            return state
        }
    }
}
export default reducer