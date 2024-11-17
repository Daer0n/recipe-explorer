import React, { useState } from 'react';
import { SearchInput } from '@components/SearchInput';
import { SearchItem } from '@components/SearchItem';
import { RecipeBar } from '@components/RecipeBar';
import { DietType, DishType } from '@enums';
import { RecipeService, RecipeData } from '@api';
import { Loader } from '@components/Loader';
import { useFetching } from '@hooks';

import { Container, SearchItemContainer, Title, Wrapper, Item } from './styled';

export const SearchBar = () => {
    const [inputValue, setInputValue] = useState('');
    const [dietTypeValue, setDietTypeValue] = useState('');
    const [dishTypeValue, setDishTypeValue] = useState('');
    const [recipes, setRecipes] = useState<RecipeData[]>([]);
    const [fetchRecipe, isRecipeLoading, recipeError] = useFetching(async () => {
        const recipesArray: RecipeData[] = await RecipeService.getAll(
            inputValue,
            dietTypeValue,
            dishTypeValue,
        );
        setRecipes(recipesArray);
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleDietTypeInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDietTypeValue(event.target.value);
    };

    const handleDishTypeInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDishTypeValue(event.target.value);
    };

    return (
        <Container>
            <Wrapper>
                <Title>Discover Recipe & Delicious Food</Title>

                <SearchInput
                    value={inputValue}
                    onChange={handleInputChange}
                    onClick={fetchRecipe}
                />

                <SearchItemContainer>
                    <Item>
                        <SearchItem
                            placeholder="Select by diet"
                            value={dietTypeValue}
                            onChange={handleDietTypeInputChange}
                            searchType={Object.values(DietType)}
                        />
                    </Item>

                    <Item>
                        <SearchItem
                            placeholder="Select by dish type"
                            value={dishTypeValue}
                            onChange={handleDishTypeInputChange}
                            searchType={Object.values(DishType)}
                        />
                    </Item>
                </SearchItemContainer>

                {isRecipeLoading && <Loader />}
                {recipeError && <div>Error fetching recipes: {recipeError}</div>}
            </Wrapper>
            {recipes.length > 0 && <RecipeBar recipes={recipes} />}
        </Container>
    );
};
