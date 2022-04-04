import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Deliverto from "./components/Deliverto";
import Cart from "./components/Cart";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import PrivateRoute from "./components/PrivateRoute";
import ReturnsandOrders from "./components/ReturnsandOrders";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/" element={<PrivateRoute />}>
            <Route exact path="/home" element={<Home />} />
            <Route
              exact
              path="/returnsandorders"
              element={<ReturnsandOrders />}
            />
          </Route>
          <Route path="/Deliverto" element={<Deliverto />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
