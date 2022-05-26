import "./App.css";
import Header from "./component/layout/Header/Header.js";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Webfront from "webfontloader";
import React from "react";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.jsx";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
import LoginSignup from "./component/User/LoginSignup.js";
import Store from "./Store";
import { loadUser } from "./actions/userAction";
import UserOption from "./component/layout/Header/UserOption.js";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile.js";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile.js";
import UpdatePassword from "./component/User/UpdatePassword.js";
import ForgotPassword from "./component/User/ForgotPassword.js";
import ResetPassword from "./component/User/ResetPassword.js";
import Cart from "./component/Cart/Cart.js";
import Shipping from "./component/Cart/Shipping.js";
import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
import Payment from "./component/Cart/Payment.js";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess.js";
import UserOrders from "./component/Order/UserOrders.js";
import OrderDetails from "./component/Order/OrderDetails.js";
import Dashboard from "./component/admin/Dashboard.js";
import ProductList from "./component/admin/ProductList.js";
import UpdateProduct from "./component/admin/UpdateProduct.js";
import NewProduct from "./component/admin/NewProduct.js";
import OrderList from "./component/admin/OrderList .js";
import ProcessOrder from "./component/admin/ProcessOrder.js";
import UsersList from "./component/admin/UsersList.js";
import UpdateUser from "./component/admin/UpdateUser.js";
import ProductReviews from "./component/admin/ProductReviews.js";
import Contact from "./component/layout/Contact/Contact.js";
import About from "./component/layout/About/About.js";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    Webfront.load({
      google: {
        families: ["Montserrat", "Lato", "Source Serif Pro"],
      },
    });
    Store.dispatch(loadUser());

    getStripeApiKey();
  }, []);

  window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOption user={user} />}

      {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <ProtectedRoute exact path="/process/payment" element={<Payment />} />
        </Elements>
      )}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/contact" element={<Contact />} />

        <Route exact path="/about" element={<About />} />

        <Route exact path="/password/forgot" element={<ForgotPassword />} />
        <Route
          exact
          path="/password/reset/:token"
          element={<ResetPassword />}
        />

        <Route exact path="/login" element={<LoginSignup />} />
        <Route exact path="/cart" element={<Cart />} />

        <Route
          path="/order/:id"
          element={isAuthenticated ? <OrderDetails /> : <LoginSignup />}
        />
        <Route
          path="/order/confirm"
          element={isAuthenticated ? <ConfirmOrder /> : <LoginSignup />}
        />
      </Routes>
      <ProtectedRoute exact path="/account" element={<Profile />} />
      <ProtectedRoute exact path="/user/update" element={<UpdateProfile />} />
      <ProtectedRoute
        exact
        path="/password/update"
        element={<UpdatePassword />}
      />
      <ProtectedRoute exact path="/login/shipping" element={<Shipping />} />
      <ProtectedRoute exact path="/success" element={<OrderSuccess />} />
      <ProtectedRoute exact path="/orders" element={<UserOrders />} />
      <ProtectedRoute
        isAdmin={true}
        exact
        path="/admin/dashboard"
        element={<Dashboard />}
      />

      <ProtectedRoute
        isAdmin={true}
        exact
        path="/admin/products"
        element={<ProductList />}
      />
      <ProtectedRoute
        isAdmin={true}
        exact
        path="/admin/product"
        element={<NewProduct />}
      />
      <ProtectedRoute
        isAdmin={true}
        exact
        path="/admin/product/:id"
        element={<UpdateProduct />}
      />
      <ProtectedRoute
        isAdmin={true}
        exact
        path="/admin/orders"
        element={<OrderList />}
      />
      <ProtectedRoute
        isAdmin={true}
        exact
        path="/admin/order/:id"
        element={<ProcessOrder />}
      />
      <ProtectedRoute
        isAdmin={true}
        exact
        path="/admin/users"
        element={<UsersList />}
      />
      <ProtectedRoute
        isAdmin={true}
        exact
        path="/admin/user/:id"
        element={<UpdateUser />}
      />

      <ProtectedRoute
        isAdmin={true}
        exact
        path="/admin/reviews"
        element={<ProductReviews />}
      />
      <Footer />
    </Router>
  );
}

export default App;
