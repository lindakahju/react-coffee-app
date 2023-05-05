import { useDispatch } from "react-redux";
import Button from "./Button";
import { addCoffee } from "../actions/coffeeActions";
import style from "./CoffeeCard.module.scss";
import { Link } from "react-router-dom";

function CoffeeCard({ coffee }) {
  const dispatch = useDispatch();

  function orderCoffee() {
    dispatch(addCoffee(coffee));
  }

  return (
    <article className={style.coffeeCardContainer}>
      <img src={coffee.image} />
      <section className={style.coffee}>
        <h3>{coffee.title}</h3>
        <p>{coffee.price}:-</p>
      </section>
      <section className={style.coffeeCardBtn}>
        <Link to={`/coffeeinfo/${coffee.id}`}>
          <Button title="INFO" />
        </Link>
        <Button title="BUY" action={orderCoffee} />
      </section>
    </article>
  );
}

export default CoffeeCard;
