import { useSelector } from "react-redux";
import CoffeeCard from "../Components/CoffeeCard";
import { useEffect, useState } from "react";
import style from "./StartPage.module.scss";

function StartPage() {
  const [drinks, setDrinks] = useState([]);
  const [drinksFromStore, setDrinksFromStore] = useState([]);
  const state = useSelector((state) => {
    return state;
  });

  // hook to update the drinks when the state changes
  useEffect(() => {
    setDrinks(state.drinks);
    setDrinksFromStore(state.drinks);
  }, [state]);

  // function for handling inputs in search bar, filtering coffee names (title)
  function handleSearchInput(input) {
    setDrinks(drinksFromStore);
    let drinksCopy = [...drinksFromStore];
    let filteredDrinks = drinksCopy.filter((coffee) =>
      coffee.title.toLowerCase().includes(input.toLowerCase())
    );
    setDrinks(filteredDrinks);
  }

  return (
    <main>
      <section className={style.searchContainer}>
        <input
          placeholder="what coffee are you looking for?"
          onChange={(e) => handleSearchInput(e.target.value)}>
        </input>
      </section>
      {/* Render each coffee in the drinks array from data.json */}
      <section className={style.coffeeCards}>
        {drinks &&
          drinks.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
      </section>
    </main>
  );
}

export default StartPage;
