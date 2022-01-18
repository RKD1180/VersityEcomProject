import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Componnent/About/About";
import Home from "./Componnent/Home/Home/Home";
import Footer from "./Componnent/Shared/Footer/Footer";
import Header from "./Componnent/Shared/Navigation/Header";
import AllProducts from "./Componnent/AllProducts/AllProducts";
import Dashboard from "./Componnent/Dashboard/Dashboard";
import AddProduct from "./Componnent/Dashboard/AddProduct/AddProduct";
import Login from "./Componnent/Login/Login/Login";
import Registration from "./Componnent/Login/Registration/Registration";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import PrivateRoute from "./Componnent/Login/Login/PrivateRoute/PrivateRoute";
import Order from "./Componnent/Dashboard/Order/Order";
import Realme from "./Componnent/AllProducts/Realme/Realme";
import Samsung from "./Componnent/AllProducts/Samsung/Samsung";
import Xiaomi from "./Componnent/AllProducts/Xiaomi/Xiaomi";
import ProductDetails from "./Componnent/ProductDetails/ProductDetails";
import UserProfile from "./Componnent/UserProfile/UserProfile";
import PaymentSuccess from "./Componnent/PaymentSuccess/PaymentSuccess";
import MakeAdmin from "./Componnent/Dashboard/MakeAdmin/MakeAdmin";
import ContactUs from "./Componnent/ContactUs/ContactUs";
import ManageAllProducts from "./Componnent/Dashboard/ManageAllProducts/ManageAllProducts";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/manageallproduct" element={<ManageAllProducts />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route
            path="/dashboard/:email"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/addproduct"
            element={
              <PrivateRoute>
                <AddProduct />
              </PrivateRoute>
            }
          />
          <Route
            path="/allorders"
            element={
              <PrivateRoute>
                <Order></Order>
              </PrivateRoute>
            }
          />

          <Route
            path="/userprofile"
            element={
              <PrivateRoute>
                <UserProfile></UserProfile>
              </PrivateRoute>
            }
          />
          <Route path="/realme" element={<Realme></Realme>} />
          <Route path="/samsung" element={<Samsung></Samsung>} />
          <Route path="/xiaomi" element={<Xiaomi></Xiaomi>} />
          <Route
            path="/productsDetails/:id"
            element={<ProductDetails></ProductDetails>}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/makeadmin" element={<MakeAdmin></MakeAdmin>} />
          <Route
            path="/success/:id"
            element={<PaymentSuccess></PaymentSuccess>}
          />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
