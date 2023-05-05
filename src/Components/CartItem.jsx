import React from "react";
import { useDispatch } from "react-redux";
import { addCoffee, removeCoffee } from "../actions/coffeeActions";
import style from "./CartItem.module.scss";

function CartItem({ cartItem }) {
  const dispatch = useDispatch();

  return (
    <main>
      <article className={style.cartContainer}>
        <section className={style.cartInfo}>
          <h3>
            {cartItem.title} á {cartItem.price} :-
          </h3>
        </section>
        <button onClick={() => dispatch(removeCoffee(cartItem))}>-</button>
        <p>{cartItem.amount}</p>
        <button onClick={() => dispatch(addCoffee(cartItem))}>+</button>
      </article>
    </main>
  );
}

export default CartItem;