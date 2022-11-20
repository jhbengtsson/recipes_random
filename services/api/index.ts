import express, { Express, Request, Response } from 'express';
import cors from 'cors'

import dotenv from 'dotenv';
import { GetRecipeObjects } from './recipes/recipeController';

const configOptions = {
    path: '../../.env',
    override: true,
};

dotenv.config(configOptions);

const app: Express = express();
const port = process.env.API_PORT;

app.use(cors())


app.get('/', async (req: Request, res: Response) => {
    const recipes = await GetRecipeObjects();
    console.log(recipes.length)
    res.send(recipes);
});     

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
