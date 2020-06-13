import React, {useEffect, useState} from 'react';

import './App.css';

const App =()=> {

  const APP_ID = "8f809bfe";
  const APP_KEY = "c2bd663000e60f666031d5b8c0c8eb8d";



  const [counter, setCounter] = useState(0);

  useEffect(()=>{
  }, []);

  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="App">
      <form className ="search-form">
        <input className="search-bar" type="text"/>
        <button  className ="search-botton" type="submit">
          Search
          </button>
 
      </form>
    </div>
  );
}

export default App;
