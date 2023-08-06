import { useEffect, useState } from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';



const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('https://react-food-order-app-2016d-default-rtdb.firebaseio.com/meals.json');

      // if the response is not ok
      if (!response.ok) {
        // throw a new error with message
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();

      const loadedMeals = [];

      // push new object into initally empty array
      for (const key in responseData) {
        loadedMeals.push({
          id: key, // key will be id of meal
          name: responseData[key].name, // name will be fetched from responseData at that given key and get the name 
          description: responseData[key].description,
          price: responseData[key].price,
        })
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    }
      fetchMeals().catch((error) => { 
        setIsLoading(false);
        setHttpError(error.message); // set the error to the error we got);
      });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    )
  }

  if (httpError) {
    return <section className={classes.MealsError}>
      <p>{httpError}</p>
    </section>
  }

  const mealsList = meals.map((meal) =>
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  );


  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {mealsList}
        </ul>
      </Card>Ï
    </section>
  );
};


export default AvailableMeals;