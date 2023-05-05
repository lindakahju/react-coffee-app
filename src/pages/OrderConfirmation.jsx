import { useEffect } from "react";
import order from "/img/order-confirmation.png";
import { useNavigate } from "react-router-dom";
import style from "./OrderConfirmation.module.scss";

function OrderConfirmation() {
  const navigate = useNavigate();

  // order confirmation displays for 5 seconds, then redirecting to StartPage
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <article className={style.orderConfirmation}>
      <h2>ORDER CONFIRMATION</h2>
      <h3>THANK YOU</h3>
      <img src={order} alt="order" />
      <p>Freshly brewed coffee is on its way to you!</p>
    </article>
  );
}

export default OrderConfirmation;
