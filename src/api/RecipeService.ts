export interface RecipeData {
    id: string;
    mealType: string[];
    label: string;
    calories: number;
    cuisineType: string[];
    ingredientLines: string[];
    ingredients: object[];
    url: string;
}

export const RecipeService = {
    baseUrl: 'https://api.edamam.com/api/recipes/v2',

    async getAll(
        query: string = '',
        diet?: string,
        dish?: string,
        page: number = 0,
        pageSize: number = 10,
    ): Promise<RecipeData[]> {
        const from = page * pageSize;
        const to = from + pageSize;

        const response = await fetch(
            `${this.baseUrl}?q=${encodeURIComponent(query)}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}&type=any&from=${from}&to=${to}`,
        );

        if (!response.ok) {
            throw new Error('Failed to fetch recipes');
        }

        const data = await response.json();

        return data.hits.map((hit: any) => this.mapRecipeData(hit.recipe));
    },

    async getRecipeById(id: string): Promise<RecipeData> {
        const response = await fetch(
            `${this.baseUrl}/${id}?app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`,
        );

        if (!response.ok) {
            throw new Error('Failed to fetch recipe');
        }

        const data = await response.json();
        return this.mapRecipeData(data);
    },

    mapRecipeData(recipe: any): RecipeData {
        return {
            id: recipe.uri.split('#')[1],
            mealType: recipe.mealType || [],
            label: recipe.label,
            calories: recipe.calories || 0,
            cuisineType: recipe.cuisineType || [],
            ingredientLines: recipe.ingredientLines || [],
            ingredients: recipe.ingredients || [],
            url: recipe.url,
        };
    },
};
