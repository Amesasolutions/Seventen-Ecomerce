import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,

} from "react-router-dom";

import Home from "./pages/home/home";
import Order from "./pages/Order/Order";
import Cart from "./pages/cart/Cart";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import NoPage from "./pages/nopage/NoPage";
import MyStates from "./context/data/MyStates";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import ProductInfo from "./pages/productInfo/ProductInfo";
import AddProduct from "./pages/admin/pages/AddProduct";
import UpdateProduct from "./pages/admin/pages/UpdateProduct";
import { ToastContainer } from "react-toastify";
import Allproducts from "./pages/allproducts/Allproducts";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <MyStates>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/order"
            element={
              <protectRoute>
                <Order />
              </protectRoute>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/allproducts" element={<Allproducts />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route
            path="/dashboard"
            element={
              <protectRouteAdmin>
                <Dashboard />
              </protectRouteAdmin>
            }
          />
          <Route path="/*" element={<NoPage />} />
          <Route
            path="/addProducts"
            element={
              <protectRouteAdmin>
                <AddProduct />
              </protectRouteAdmin>
            }
          />
          <Route
            path="/editProduct"
            element={
              <protectRouteAdmin>
                <UpdateProduct />
              </protectRouteAdmin>
            }
          />
        </Routes>
      </Router>
      <ToastContainer />
    </MyStates>
  );
}

export default App;

export const protectRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export const protectRouteAdmin = ({ children }) => {
  const addmin = JSON.parse(localStorage.getItem("user"));
  if (addmin.user.email === "aziizapdy5@gmail.com") {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

<protectRouteAdmin></protectRouteAdmin>;
