import Recipe, { IRecipe } from '../Pantry/Drawers/Recipe'
import UrlUtil from './UrlUtil';
import log from './Log';

class GetRecipes {
    Recipes: IRecipe[] = [];
    AccessToken: string;
    Raw = [];
    Skip = 0;
    Take = 20;
    Total = 0;

    constructor(AccesToken: string) {
        this.AccessToken = AccesToken;
    }

    //Gets the total amount of recipes
    async Browse(): Promise<number> {
        const url: string = UrlUtil.Generate(this.Take, this.Skip);

        let count = 0;

        await fetch(url, {
            method: 'GET',
            headers: {
                'User-Agent': 'PostmanRuntime/',
                Authorization: `Bearer ${this.AccessToken}`,
            },
            redirect: 'follow',
        })
            .then((response) => response.json())
            .then((json) => (count = json.total))
            .catch(() => log('Nothing in the fridge! 😥', 'ERROR'));
        this.Total = count;
        return count;
    }

    //Get a json object of recipes using skip and take params
    async Shop(): Promise<void> {
        const trips = Math.ceil(this.Total / this.Take);
        const promises = []
        
        for (let i = 1; i < trips; i++) {
            
            promises.push(this.ShopSimultaneously(this.Take, this.Skip))
            
            this.Skip += this.Take
        }

        await Promise.all(promises)
        console.log(this.Raw.length)
    }

    async ShopSimultaneously(take: number, skip: number) : Promise<void> {
        const url: string = UrlUtil.Generate(take, skip);

        await fetch(url, {
            method: 'GET',
            headers: {
                'User-Agent': 'PostmanRuntime/',
                Authorization: `Bearer ${this.AccessToken}`,
            },
            redirect: 'follow',
        })
            .then((response) => response.json())
            .then((json) => {
                this.Raw = this.Raw.concat(json.items);
                Promise.resolve()
            })
            .catch((error) =>
                log(`Nothing in the fridge! 😥 \n ${error}`, 'ERROR')
            );
    }

    //Create array of recipe models based on json arrays in Raw
    SliceAndDice(): void {
        for (let i = 0; i < this.Raw.length; i++) {
            const recipeJson = this.Raw[i];
            
            this.Recipes.push(
                new Recipe(
                    recipeJson["id"], 
                    recipeJson["name"], 
                    recipeJson["headline"], 
                    recipeJson["description"]
                    )
                )
        }
    }
}

export default GetRecipes;
