import Recipe, {IRecipe} from '../../../common/core/Pantry/Drawers/Recipe'
import ServerAuth from '../../../common/core/Utensils/ServerAuth'
import GetRecipes from '../../../common/core/Utensils/GetRecipes'

export async function GetRecipeObjects() : Promise<Array<IRecipe>> {
    const auth = await ServerAuth.GetAccessToken()

    const getRecipes = new GetRecipes(auth)
    await getRecipes.Browse();
    await getRecipes.Shop();
    
    getRecipes.SliceAndDice();
    
    return getRecipes.Recipes
}