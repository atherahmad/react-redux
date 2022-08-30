const initialState = [];

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_USER":{
            
            return [...state].push(action.payload)
        }
        case "REM_USER":{
            return [...state].filter(user=>user.id !== action.payload.id)
        }
        default:{
            return state
        }
    }
}
export default reducer