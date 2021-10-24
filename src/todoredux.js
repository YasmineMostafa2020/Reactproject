import { createStore } from "redux"
const ADD="Add-TO-DO";
const REMOVE= "REMOVE_TODO";
export const addtodo=(payload)=>{
return {
    type:ADD,
    payload
}
}
export const Delete = (payload) => {
    return {
      type: REMOVE,
      payload,
    };
  };
const initialstate={
    todos:[]
}
const toDoReducer=(state=initialstate,action)=>{
    switch (action.type) {
        case ADD:
           return {...state,todos:[...state.todos,action.payload]} 
        case  REMOVE :
            return {...state
                ,todos:state.todos.filter((todo,i)=>i!== action.payload)
            }
        default:
            return state;
    }
}
export const store=createStore(toDoReducer)