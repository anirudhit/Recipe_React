import React, {useEffect, useState} from 'react';
import './App.css';
import * as Constants from './constants';

import RecipeHeader from './header/Header';
import QueryRecipe from './query/SearchRecipe';
import RecipeLayout from './layout/Layout';

const App =() =>{

  const [recipesList, setRecipesList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('chicken');

  useEffect(() =>{
    getRecipes();
  },[searchQuery]);

  const getRecipes = async () => {
    let api_url = `${Constants.API_URL}?q=${searchQuery}&app_id=${Constants.APP_ID}&app_key=${Constants.APP_KEY}&from=0&to=10`;
    //const response = await fetch("./search-data.json");
    const response = await fetch(api_url);
    const data = await response.json();
    setRecipesList(data.hits);
  }

  const handleSearchRecipeClick = (searchQuery) => {
    setSearchQuery(searchQuery);
  }


  return(
    <div className="App">
      <RecipeHeader />

      <div className="App-Body">
        <QueryRecipe onSearchRecipeClick={handleSearchRecipeClick}/>
        <RecipeLayout recipes={recipesList}/>
      </div>

    </div>
  )
}

export default App;
