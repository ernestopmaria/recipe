import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App =()=> {

  const APP_ID = "8f809bfe";
  const APP_KEY = "c2bd663000e60f666031d5b8c0c8eb8d";

  const [recipes, setRecipes] = useState([]);

  const [counter, setCounter] = useState(0);

  useEffect(()=>{
    getRecipes();
  }, []);

  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  return (
    <div className="App">
      <form className ="search-form">
        <input className="search-bar" type="text"/>
        <button  className ="search-botton" type="submit">
          Search
          </button>
 
      </form>
      {recipes.map(recipe =>(
        <Recipe/>
      ))}
    </div>
  );
}

export default App;
