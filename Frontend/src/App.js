
import Header from './components/Layout/Header';
import Home from './components/Home';
import Footer from './components/Layout/Footer';
import Menu from './components/Menu';
import Cart from './components/cart/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Delivery from './components/cart/Delivery';
import Login from './components/user/Login';
import Register from './components/user/Register';
import { useEffect, useState } from 'react';
import { loadUser } from './actions/userActions';
import store from "./store";
import Profile from './components/user/Profile';
import UpdateProfile from './components/user/UpdateProfile';
import ForgotPassword from './components/user/ForgotPassword';
import NewPassword from './components/user/NewPassword';
import ConfirmOrder from './components/cart/ConfirmOrder';
import Payment from "./components/cart/Payment";




//Payment
import {Elements} from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import axios from "axios";
import OrderSuccess from './components/cart/OrderSuccess';
import ListOrders from './components/order/ListOrder';
import OrderDetails from './components/order/OrderDetails';

function App() {
const [stripeApiKey, setStripeApiKey] = useState("");

 useEffect(()=>{
  store.dispatch(loadUser());

async function getStripeApiKey(){
  const {data} = await axios.get("/api/v1/stripeapi");
  setStripeApiKey(data.stripeApiKey);
}

   getStripeApiKey();
   }, []);

  return (
     <Router>
     <div className='App'>
     <Header></Header>
   <div className="container container-fluid">
 
        <Routes>
             <Route path="/" element={<Home></Home>}exact></Route>
           <Route path="/eats/stores/search/:keyword" element={<Home></Home>}>exact</Route>
             <Route path="/cart" element={<Cart></Cart>}>exact</Route>
             <Route path="/eats/stores/:id/menus" element={<Menu></Menu>}exact></Route>
             <Route path="/delivery" element={<Delivery></Delivery>}>exact</Route>
             <Route path="/users/login" element={<Login></Login>}>exact</Route>
             <Route path="/users/signup" element={<Register></Register>}>exact</Route>
             <Route path="/users/me" element={<Profile></Profile>}>exact</Route>
             <Route path="/users/me/update" element={<UpdateProfile></UpdateProfile>}>exact</Route>
             <Route path="/users/forgetPassword" element={<ForgotPassword></ForgotPassword>}>exact</Route>
             <Route path="/users/resetPassword/:token" element={<NewPassword></NewPassword>}>exact</Route>
             <Route path="/confirm" element={<ConfirmOrder></ConfirmOrder>}>exact</Route>
             
              
             {stripeApiKey && (
                <Route
                path="/payment"
                element={
                  <Elements stripe={loadStripe(stripeApiKey)}>
                     <Payment/>
                  </Elements>
                }
                />

             )}
           
             <Route path="/success" element={<OrderSuccess></OrderSuccess>}></Route>

             <Route path="/eats/orders/me/myOrders" element={<ListOrders></ListOrders>}></Route>
             <Route path="/eats/orders/:id" element={<OrderDetails></OrderDetails>}></Route>
          </Routes>
         
    </div>
      <Footer></Footer>
   </div>
     </Router>
  
    
  );
}

export default App;











