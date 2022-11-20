import React, { useState, useEffect } from 'react';
import Recipe from '../../../../common/core/Pantry/Drawers/Recipe';
import RecipeThumb from '../components/RecipeThumb';
import { IRecipe } from '../models/Recipe';
import { Link, useNavigate } from 'react-router-dom'

const RecipePage = () => {
    const navigate = useNavigate()
    
    const [recipes, setRecipes] = useState<Array<IRecipe>>([]);

    useEffect(() => {
        const url =
            window.location.protocol +
            '//' +
            window.location.hostname +
            ':3001';

        fetch(url + "/api/recipe", {
            headers: {},
            referrerPolicy: 'strict-origin-when-cross-origin',
            body: null,
            method: 'GET',
        })
            .then((response) => response.json())
            .then((json) => {
                setRecipes(json);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    function AddToLocalStorage(recipe: IRecipe){        
        localStorage.removeItem(recipe.Id)

        const recipeJson = JSON.stringify(recipe)
        localStorage.setItem(recipe.Id, recipeJson)
    }

    return (
        <div>
            {recipes.map((recipe, index) => {
                AddToLocalStorage(recipe)
                return (
                    <RecipeThumb
                        key={index}
                        onRecipeClick={() => {
                            navigate(recipe.Id)
                        }}
                        title={recipe.Title}
                        headline={recipe.Headline}
                    />
                );
            })}
        </div>
    );
};

export default RecipePage;
