import { useState, useEffect } from "react";
import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import axios from "axios";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_FIREBASE_API_URL}meals.json`
        );

        const loadedMeals = [];

        for (const key in response.data) {
          loadedMeals.push({
            ...response.data[key],
            id: key,
          });
        }

        setMeals(loadedMeals);
      } catch (error) {
        console.error(error);
        setHttpError(error.message);
      }
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return (
      <section className={styles["meals-loading"]}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={styles["meals-error"]}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map(meal => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
