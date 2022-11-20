import React from "react";
import Recipe from "../../../../common/core/Pantry/Drawers/Recipe";
import RecipeThumb from "../components/RecipeThumb";
import { IRecipe } from "../models/Recipe";

interface RecipePageProps {
    recipes: Array<IRecipe>;
    amount?: number;
    searchParams?: string;
}

const RecipePage = ({recipes, amount=1, searchParams=""}: RecipePageProps) => {
    
    return(
        <div>
            {
                recipes.map((recipe, index) => {
                    return(
                        <RecipeThumb 
                            key={index}
                            title={recipe.Title}
                            headline={recipe.Headline}
                        />
                    )
                })
            }
        </div>
    )
}

export default RecipePage;