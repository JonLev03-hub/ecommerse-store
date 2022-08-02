import "./App.css";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Navbar from "./components/Navbar";
import ProductPage from "./pages/ProductPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import {useSelector} from "react-redux"

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  const user = useSelector(state=> state.user.currentUser )
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<Success />} />

          <Route
            path="/login"
            element={user ? <Navigate replace to="/" /> : <Login />}
          />
          <Route
            path="/register"
            element={user ? <Navigate replace to="/" /> : <Register />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
