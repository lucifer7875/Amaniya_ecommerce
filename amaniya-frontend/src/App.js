import "./App.css";
import Index from "./components/index/index";
import Login from "./components/login/login";
import Registerd from "./components/register/register";
import Home from "./components/home/home";
import Items from "./components/home/Items";
import Mobile from "./components/home/Items/phone";
import Laptop from "./components/home/Items/laptop";
import Kitchen from "./components/home/Items/Kitchen";
import Fashion from "./components/home/Items/Fashion";
import Books from "./components/home/Items/book";
import Electronics from "./components/home/Items/electronics";
import NewReleases from "./components/home/Items/newReleases";
import Today from "./components/home/Items/todays";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Registerd />}></Route>
          <Route path="/home" element={<Home />}>
            <Route path="items" element={<Items />}></Route>
            <Route path="today's_Deals" element={<Today />}></Route>
            <Route path="mobile" element={<Mobile />}></Route>
            <Route path="laptop" element={<Laptop />}></Route>
            <Route path="Kitchen&Home" element={<Kitchen />}></Route>
            <Route path="fashion" element={<Fashion />}></Route>
            <Route path="books" element={<Books />}></Route>
            <Route path="electronics" element={<Electronics />}></Route>
            <Route path="newReleases" element={<NewReleases />}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
