import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import StartPage from "./pages/StartPage";
import Header from "./Components/Header";
import CoffeeInfo from "./pages/CoffeeInfo";
import Cart from "./pages/Cart";
import OrderConfirmation from "./pages/OrderConfirmation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fillStock } from "./actions/coffeeActions";

function App() {
  const dispatch = useDispatch();
  const [drinks, setDrinks] = useState([]);

  // load coffee data from data.json
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setDrinks(data));
  }, []);

  // fill the stock with drinks when the state is updated
  useEffect(() => {
    if (drinks.length > 0) {
      dispatch(fillStock(drinks));
    }
  }, [drinks]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<StartPage />} />
          <Route path="/coffeeinfo/:id" element={<CoffeeInfo />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<OrderConfirmation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
