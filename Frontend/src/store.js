import {
    legacy_createStore as createStore,
    combineReducers,
     applyMiddleware,
    compose,
   }
    from "redux";
    import thunk from "redux-thunk";
    import { restaurantReducer } from "./reducers/restaurantReducer.js";
   import { menuReducer } from "./reducers/menuReducer.js";
   import { cartReducer } from "./reducers/cartReducer.js";
   import { authReducer, forgotPasswordReducer, userReducer } from "./reducers/userReducer.js";
   import { myOrdersReducer, newOrderReducer, orderDetailsReducer } from "./reducers/orderReducer.js";
    const reducer = combineReducers({
     restaurants: restaurantReducer,
     menus:menuReducer,
     cart:cartReducer,
     auth: authReducer,
     user:userReducer,
     forgotPassword:forgotPasswordReducer,
     newOrder:newOrderReducer,
     myOrders:myOrdersReducer,
     orderDetails:orderDetailsReducer,
    });
    let initialState = {
     cart:{
       cartItems:localStorage.getItem("cartItems")
       ? JSON.parse(localStorage.getItem("cartItems"))
       :[],
       deliveryInfo:localStorage.getItem("deliveryInfo")
       ? JSON.parse(localStorage.getItem("deliveryInfo"))
       :[],
   
     },
    };
    const composeenhancers = 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const middleware = [thunk];
    const store = createStore(
     reducer,
     initialState, 
     composeenhancers(applyMiddleware(...middleware))
   );
   export default store;