import { applyMiddleware, combineReducers ,createStore} from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from "axios";
import promise from 'redux-promise-middleware';
const initialState = {
    fetchting : false,
    fetched : false,
    users: [],
    error : null,
}


export const reducer = (state={}, action) => {
    if(action.type === "INC"){
        return state+action.payload;
    }
    if(action.type === "DEC"){
        return state- action.payload;
    }
    if(action.type === "E"){
        throw new Error("Aaaahhhhh!!!!!");
    }
    switch (action.type) {
      case "FETCH_USERS_START": {
        return { ...state, fetching: true };
        break;
      }
      case "FETCH_USERS_PENDING": {
        return { ...state, fetching: true, error: action.payload };
        break;
      }
      case "FETCH_USERS_ERROR": {
        return { ...state, fetching: false, error: action.payload };
        break;
      }
      case "RECEIVE_USERS": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          error: action.payload,
          users: action.payload,
        };

        break;
      }
    }
    return state;
    // switch (action.type) {
    //     case 'ACTION_TYPE':
    //         return 
    //     default:
    //         return state
    // }
}

const loggerCustome = (store) => (next) => (action) => {
  console.log("action Fired", action);
  next(action);
};

const errormiddleware = (store) => (next) => (action) => {
  try {
      next(action);
  } catch (error) {
      console.log("action Fired", error);
      
  }

};
const middleware = applyMiddleware(loggerCustome, errormiddleware, promise(),thunk,  logger());


const userReducer = (state ={} ,action) => {
    // const newState = {...newState};     
    switch (action.type) {
      case "CHANGE_NAME": {
        // state.name = action.payload;
        state = {...state, name :action.payload}
        break;
      }
      case "CHANGE_AGE": {
        // state.name  = action.payload;
        state = { ...state, age: action.payload };
        break;
      }
    }
    return state;
}

const TweetsReducers = (state =[], action) => {
    return state;
};

const reducers = combineReducers({
    reducer :reducer,
    user: userReducer,
    tweets: TweetsReducers,
})
// ,{
//     user:{
//         name:"Will",
//         age: 35,
//     },
//     tweets : []
// }
const store = createStore(reducers, 1, middleware);

store.subscribe(() => {
    console.log("store changed", store.getState())
})
 

store.dispatch({
    type: "FOO",
    payload: axios.get("http://rest.learncode.academy/api/wstern/users")
})

// store.dispatch((dispatch)=>{
//     dispatch({type: "FOO"})
    
//     dispatch({ type: "FETCH_USERS_START" });
//     axios.get("http://rest,learncode.academy/api/wstren/users")
//     .then((response)=>{
//         dispatch({ type: "RECEIVE_USERS",payload : response.data })
//         .catch((err)=>{
//             dispatch({type: "FETCH_USERS_ERROR", payload: err})
//         });
//     })
//     dispatch({type: "BAR"})

// })

store.dispatch({ type: "CHANGE_NAME", payload: "Will" });

store.dispatch({ type: "CHANGE_AGE", payload: 35 });
store.dispatch({type: "INC", payload :1})
store.dispatch({ type: "INC", payload: 4 });
store.dispatch({ type: "INC", payload: 6 });
store.dispatch({ type: "INC", payload: 6 });
store.dispatch({ type: "INC", payload: 8 });
store.dispatch({ type: "DEC", payload: -18 });