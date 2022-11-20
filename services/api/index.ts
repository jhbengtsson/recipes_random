import express, { Express, Request, Response } from 'express';
import cors from 'cors'

import dotenv from 'dotenv';
import { GetRecipeObjects } from './recipes/recipeController';
import path from 'path';

const configOptions = {
    path: '../../.env',
    override: true,
};

dotenv.config(configOptions);

const app: Express = express();
const port = process.env.API_PORT;

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, '../../clients/recipes-random/build')))


app.get('/api/recipe', async (req: Request, res: Response) => {
    const recipes = await GetRecipeObjects();
    res.send(recipes);
});     

app.post('/api/login', async (req: Request, res: Response) => {
    console.log(req.body)
    if(req.body.email === "recipes@random.com" && req.body.password === "ØlkaGen"){
        res.send("true");    
    }
    else{
        res.status(403).send("FORBIDDEN")
    }
}); 

app.get('/', async (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../../clients/recipes-random/build', 'index.html'))
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});