import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../Components/CartItem";
import Button from "../Components/Button";
import { Link } from "react-router-dom";
import style from "./Cart.module.scss";

function Cart() {
  const [cart, setCart] = useState([]);
  const state = useSelector((state) => state);

  // hook to update the cart state to include quantity of items when state changes
  useEffect(() => {
    setCart(
      state.cart.map((item) => {
        return { ...item, quantity: 1 };
      })
    );
  }, [state.cart]);

  // handling remove item from cart
  const handleRemove = (id) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex((item) => item.id === id);
      if (index === -1) {
        return prevCart;
      }
      const updatedCart = [...prevCart];
      updatedCart[index].quantity -= 1;
      if (updatedCart[index].quantity === 0) {
        updatedCart.splice(index, 1);
      }
      return updatedCart;
    });
  };

  // handling add item to cart
  const handleAdd = (id) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex((item) => item.id === id);
      if (index === -1) {
        return prevCart;
      }
      const updatedCart = [...prevCart];
      updatedCart[index].quantity += 1;
      return updatedCart;
    });
  };

  // calculating total price of items in cart
  const totalPrice = cart.reduce(
    (total, item) => total + item.amount * item.price,
    0
  );

  return (
    <main>
      <article className={style.cartContainer}>
        <section className={style.button}>
          <Link to="/">
            <button>
              {" "}
              <img src="/img/arrow.png" width="40px" height="40px" />
            </button>
          </Link>
        </section>
        <h2>CHECKOUT</h2>
        <hr style={{ background: "#869e8f", height: "1px", border: "none" }} />
        <section className={style.cartEmpty}>
          {/* show message if cart is empty */}
          {cart.length === 0 && <p>Your cart is empty</p>}
        </section>
        {/* render each item in the cart */}
        {cart &&
          cart.map((cartItem, i) => (
            <CartItem
              cartItem={cartItem}
              key={i}
              handleAdd={() => {
                handleAdd(cartItem.id);
              }}
              handleRemove={() => {
                handleRemove(cartItem.id);
              }}
            />
          ))}
        <hr style={{ background: "#869e8f", height: "1px", border: "none" }} />
      </article>
      {/* if cart is not empty, show total price and order button */}
      {cart.length > 0 && (
        <section className={style.totalPrice}>
          <p>Total amount: {totalPrice} :-</p>
          <Link to="/order">
            <Button title="ORDER" action={() => console.log("checkout")} />
          </Link>
        </section>
      )}
    </main>
  );
}

export default Cart;
