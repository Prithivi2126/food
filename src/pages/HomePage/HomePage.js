import React from 'react';
import "./HomePage.scss";
import { useMealContext } from '../../context/MealContext';
import Loader from "../../components/loader/Loader";
import CategoryList from "../../components/category/CategoryList";
import NotFound from "../../components/notFound/NotFound";
import MealList from "../../components/meal/MealList";

const HomePage = () => {
  const {categories, meals, categoryLoading, mealsLoading} = useMealContext();

  return (
    <main className='main-content'>
      {/* { (mealsLoading) ? <Loader /> : (meals === null) ? <NotFound /> : (meals?.length) ? <MealList meals = {meals} /> : "" } */}
      { (categoryLoading) ? <Loader /> : <CategoryList categories = {categories} /> }
    </main>
  )
}

export default HomePage;