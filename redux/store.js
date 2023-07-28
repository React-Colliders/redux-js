import { createStore } from "redux"; 
import counterReducer from "./reducer/counterReducer.js";


const store = createStore(counterReducer) // 99

// current state of the store : 0
// increase(10) => {type: "INCREASE"}
// let x = counterReducer(0, 
// {
//     type: INCREASE,
//     value: 1
// }
// )

//  decrease()
// counterReducer(100, {type: "DECREASE"} ) => 99

console.log(store)

export default store