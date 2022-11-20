import React from "react";
import '../custom.css';

interface RecipeThumbProps {    
    title:string,
    headline:string,
    onRecipeClick:() => void;
}

const RecipeThumb = ({title, headline, onRecipeClick}: RecipeThumbProps) => {
  
  return(
      <div className="recipe-thumb-container"
        onClick={onRecipeClick}
      >
        <h2>{title}</h2>
        <p>{headline}</p>
      </div>
  )
}

export default RecipeThumb;