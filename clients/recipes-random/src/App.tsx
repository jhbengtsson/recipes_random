import React, { useEffect, useState } from 'react';
import './custom.css';
import RecipePage from './pages/RecipePage';
import Logo from './components/Logo';
import { IRecipe } from './models/Recipe';

function App() {
  
  const [recipes, setRecipes] = useState<Array<IRecipe>>([]);

  useEffect(() => {
    const url = window.location.protocol + "//" + window.location.hostname + ":3001";
    console.log(url)
    fetch(url, {
      "headers": {},
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": null,
      "method": "GET"    
    })
    .then((response) => response.json())
    .then((json) => {
      setRecipes(json)
    })
    .catch((error) => {
      console.error(error)
    })
  }, [])

  return (
    <div className='page-container'>
      <Logo />
      <RecipePage
        recipes={recipes}
      />
    </div>
  );
}



export default App;
