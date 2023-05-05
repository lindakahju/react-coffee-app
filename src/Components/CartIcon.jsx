import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./cartIcon.module.scss";
import { useSelector } from "react-redux";

function CartIcon() {
  const [cartCount, setCartCount] = useState(0);
  const state = useSelector((state) => {
    return state;
  });

  // hook to update the cart count when the state changes
  useEffect(() => {
    setCartCount(state.cart.length);
  }, [state]);

  return (
    <section className={style.cartIconContainer}>
      <Link to="/cart" className={style.link}>
        <img src="/img/cart.png" width="40px" height="40px" />
        {cartCount > 0 ? (
          <span className={style.cartCounter}>
            <p>{cartCount}</p>
          </span>
        ) : null}
      </Link>
    </section>
  );
}

export default CartIcon;
