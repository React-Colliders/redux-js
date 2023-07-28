import store from "./redux/store.js"; 
import { increase,decrease,reset } from "./redux/actions/counterActions.js";
import counterReducer from "./redux/reducer/counterReducer.js";


// getState() => it will return the current state of the store 

console.log("initial value:",store.getState()) // initial value of the state

// subscribe to store
store.subscribe(()=>{
    console.log("current value:",store.getState())  
})

store.dispatch(increase(10)) // store.js

store.dispatch(increase())
store.dispatch(decrease())
store.dispatch(reset())

// console.log("value:",store.getState()) 


// counter actions is used here to call actions
//dispatch(increase()) => store.js =>  increase => {type: "INCREASE" , value: 1} 
                                            //   => counterReducer(state,  actions)
                                                 // => return a value 
                                                     // value will be the new state of the store 
                                                        // store.getState() => new state of the store