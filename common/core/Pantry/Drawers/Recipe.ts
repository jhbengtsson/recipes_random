export interface IRecipe {
    Id: string;
    Title: string;
    Headline: string;
    Description: string;
}

class Recipe implements IRecipe {
    Id: string;
    Title: string;
    Headline: string;
    Description: string;

    constructor(
        Id: string,
        Title: string,
        Headline: string,
        Description: string
    ) {
        this.Id = Id;
        this.Title = Title;
        this.Headline = Headline;
        this.Description = Description;
    }

    getFullTitle(): string {
        return this.Title + ' ' + this.Headline;
    }
}

export default Recipe;
