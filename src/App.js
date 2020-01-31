import React, {useEffect, useState} from 'react';
import './App.css';
import * as Constants from './constants';
const App =() =>{

  let api_url = `${Constants.API_URL}?q=chicken&app_id=${Constants.APP_ID}&app_key=${Constants.APP_KEY}&from=0&to=10`;

  useEffect(() =>{
    console.log("Use effect usage");
  });

  return(
    <div className="App">
      <h1>Recipe React App</h1>
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default App;
