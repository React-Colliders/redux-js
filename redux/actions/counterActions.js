// actions creators:

// it is a function => which will return an object

import {INCREASE,DECREASE,RESET} from "./actionTypes.js"

export const increase = (value=1) => {
     return(
     {
         type: INCREASE,
         value: value
     }
    )
}

export const decrease = () => {
    return{
        type: DECREASE
    }
}

export const reset = () => {
    return{
        type: RESET
    }
}

