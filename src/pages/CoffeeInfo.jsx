import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Button from "../Components/Button";
import { addCoffee } from "../actions/coffeeActions";
import style from "./CoffeeInfo.module.scss";

function CoffeeInfo() {
  const [coffee, setCoffee] = useState(null);
  const params = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state;
  });

  // find coffee with matching id
  useEffect(() => {
    let coffeeMatch = state.drinks.find((c) => c.id == params.id);
    setCoffee(coffeeMatch);
  }, [state]);

  function orderCoffee() {
    dispatch(addCoffee(coffee));
  }

  return (
    <main>
      <article className={style.coffeeInfoContainer}>
        {coffee ? (
          <article>
            <section className={style.button}>
              <Link to="/">
                <button>
                  <img src="/img/arrow.png" width="40px" height="40px" />
                </button>
              </Link>
            </section>
            <h2>{coffee.title}:</h2>
            <p>{coffee.desc}</p>
            <p className={style.coffeeIngredients}>
              Ingredients: {coffee.ingredients.join(", ")}
            </p>
            <section className={style.buyBtn}>
              <Button title="BUY" action={orderCoffee} />
            </section>
          </article>
        ) : (
          <p>Loading coffee...</p>
        )}
      </article>
    </main>
  );
}

export default CoffeeInfo;
