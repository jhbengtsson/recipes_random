import React from "react";

interface RecipeThumbProps {    
    title:string,
    headline:string
}

const RecipeThumb = ({title, headline}: RecipeThumbProps) => {
  
  return(
      <div>
        <h2>{title}</h2>
        <p>{headline}</p>
      </div>
  )
}

export default RecipeThumb;