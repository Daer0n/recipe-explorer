interface Images {
    LARGE?: string;
    REGULAR?: string;
    SMALL?: string;
    THUMBNAIL?: string;
}

export interface RecipeData {
    id: string;
    mealType: string[];
    label: string;
    calories: number;
    cuisineType: string[];
    ingredientLines: string[];
    ingredients: object[];
    url: string;
    images: Images;
}

export interface RecipeResponse {
    recipes: RecipeData[];
    nextPageUrl?: string;
}

const BASE_URL = 'https://api.edamam.com/api/recipes/v2';

const fetchWithAuth = async (url: string): Promise<Response> => {
    const appId = process.env.REACT_APP_APP_ID;
    const appKey = process.env.REACT_APP_APP_KEY;

    if (!appId || !appKey) {
        throw new Error('Missing app ID or app key in environment variables');
    }

    const authorizedUrl = new URL(url);
    authorizedUrl.searchParams.append('app_id', appId);
    authorizedUrl.searchParams.append('app_key', appKey);

    return fetch(authorizedUrl.toString());
};

export const RecipeService = {
    async getAll(
        query = '',
        diet?: string,
        dish?: string,
        nextPageLink?: string,
    ): Promise<RecipeResponse> {
        let url: URL;

        if (nextPageLink) {
            url = new URL(nextPageLink);
        } else {
            url = new URL(BASE_URL);
            url.searchParams.append('q', encodeURIComponent(query));
            url.searchParams.append('type', 'public');
            if (diet) url.searchParams.append('diet', diet);
            if (dish) url.searchParams.append('dishType', dish);
        }

        const response = await fetchWithAuth(url.toString());

        if (!response.ok) {
            throw new Error('Failed to fetch recipes');
        }

        const data = await response.json();
        const nextPageUrl = data._links?.next?.href;

        return {
            recipes: data.hits.map((hit: any) => this.mapRecipeData(hit.recipe)),
            nextPageUrl,
        };
    },

    async getRecipeById(id: string): Promise<RecipeData> {
        const response = await fetchWithAuth(`${BASE_URL}/${id}?type=public`);

        if (!response.ok) {
            throw new Error('Failed to fetch recipe');
        }

        const data = await response.json();
        return this.mapRecipeData(data.recipe);
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
            images: {
                LARGE: recipe.images?.LARGE?.url || '',
                REGULAR: recipe.images?.REGULAR?.url || '',
                SMALL: recipe.images?.SMALL?.url || '',
                THUMBNAIL: recipe.images?.THUMBNAIL?.url || '',
            },
        };
    },
};
