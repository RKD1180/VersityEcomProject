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

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route
            path="/dashboard"
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
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
