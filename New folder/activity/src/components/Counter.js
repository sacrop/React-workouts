import React,{useReducer} from 'react'

const ACTION={
    INCREMENT:"increment",
    DECREMENT:"decrement"
}
 const Counter = () => {
    const [state,dispatch]=useReducer(reducer,{count:0});

    function increment(){ 
        dispatch({type:ACTION.INCREMENT})
    }
    function decrement(){
        dispatch({type:ACTION.DECREMENT})
    }

    function reducer(state,action){
        switch(action.type){
            case ACTION.INCREMENT:
                return {count:state.count+1};
            case ACTION.DECREMENT:
                return {count:state.count-1};
            default:
                return state;
        }
    }

  return (
    <div>
        
        <button onClick={increment}>+</button>
        <h1>{state.count}</h1>
        <button onClick={decrement}>-</button>
        
    </div>
  )
}
export default Counter;
