import React, {useEffect, useState} from 'react';
import './App.css';
import * as Constants from './constants';

import RecipeHeader from './header/Header';
import QueryRecipe from './query/SearchRecipe';
import RecipeLayout from './layout/Layout';

const App =() =>{

  let api_url = `${Constants.API_URL}?q=chicken&app_id=${Constants.APP_ID}&app_key=${Constants.APP_KEY}&from=0&to=10`;

  const [recipesList, setRecipesList] = useState([]);

  useEffect(() =>{
    getRecipes();
  },[]);

  const getRecipes = async () => {
    const response = await fetch("./search-data.json");
    const data = await response.json();
    setRecipesList(data.hits);
  }

  return(
    <div className="App">
      <RecipeHeader />

      <div className="App-Body">
        <QueryRecipe/>
        <RecipeLayout recipes={recipesList}/>
      </div>

    </div>
  )
}

export default App;
