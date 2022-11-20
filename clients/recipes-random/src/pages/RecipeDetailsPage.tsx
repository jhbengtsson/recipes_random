import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IRecipe } from '../models/Recipe'
import '../custom.css'

const RecipeDetailsPage = () => {
    const params = useParams()

    const [recipe, setRecipe] = useState<IRecipe|undefined>() 
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const recipeJson = localStorage.getItem(params.id?? "")
        if(recipeJson !== null){
            setRecipe(JSON.parse(recipeJson))
            return
        }
        setRecipe(undefined)
        
    }, [params.id])

    useEffect(() => {
        setLoading(false)
    }, [recipe])

    if(loading){
        return(
            <p>HENTER MAD...</p>
        )
    }
    else{
        return(
            <>
                {recipe === undefined ? 
                    <p>Ingen mad... 😭</p>
                    :
                    <div className="recipe-details-container">
                        <h2>{recipe.Title}</h2>
                        <h3>{recipe.Headline}</h3>
                        <p>{recipe.Description}</p>
                    </div>
                }
            </>
        )
    }


}

export default RecipeDetailsPage;