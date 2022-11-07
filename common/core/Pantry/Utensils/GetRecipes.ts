import { IRecipe } from '../Drawers/Recipe';
import UrlUtil from './UrlUtil';
import log from './Log';

class GetRecipes {
    Recipes: IRecipe[] = [];
    AccessToken: string;
    Raw: any;
    Skip = 0;
    Take = 250;
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
        const trips = Math.round(this.Total / this.Take + 0.51);

        log('TEST1', 'INFO');
        for (let i = 1; i < trips; i++) {
            const url: string = UrlUtil.Generate(this.Take, this.Skip);
            await fetch(url, {
                method: 'GET',
                headers: {
                    'User-Agent': 'PostmanRuntime/',
                    Authorization: `Bearer ${this.AccessToken}`,
                },
                redirect: 'follow',
            })
                .then((response) => response.json())
                .then((json) =>
                    log(
                        `WHATS IN THE FRIDGE! ${json.items[i].name}!!`,
                        'SUCCESS'
                    )
                )
                .catch(() => log('Nothing in the fridge! 😥', 'ERROR'));
        }

        log('TEST2', 'INFO');
        /*
      OkHttpClient client = new OkHttpClient().newBuilder()
              .followRedirects(false)
              .build();

      Request request = new Request.Builder()
              .url(url)
              .addHeader("Authorization", "Bearer "+AccessToken)
              .build();

      Call call = client.newCall(request);
      Response response = call.execute();

      String jsonString = response.body().string();
      JSONObject obj = new JSONObject(jsonString);
      JSONArray tmp = obj.getJSONArray("items");
      Raw.putAll(tmp);

      Skip += Take;
      System.out.println(i + "/" + trips + " - " + tmp.length());
    }
  */
    }

    //Create array of recipe models based on json arrays in Raw
    SliceAndDice(): void {
        console.log('');
    }

    Cook(): void {
        console.log('');
    }

    Serve(): void {
        console.log('');
    }
}

export default GetRecipes;
