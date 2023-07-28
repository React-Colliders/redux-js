import { INCREASE, DECREASE,RESET } from "../actions/actionTypes.js";



let initialState =  0 // {}


// counterReducer(100, {type: "DECREASE"} )
function counterReducer(state=initialState,action){
    // state = 100, action = {type: "DECREASE"}

    switch(action.type){
        case INCREASE:
              return  state + action.value

        case DECREASE:
            return state-1 // 99

        case RESET:
            return  initialState
        
        default:
            return state
    }

}

export default counterReducer


// counterReducer()
// counterReducer(4, increase())
// counterReducer(5, decrease())
// counterReducer(4, reset())