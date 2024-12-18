import React, { useState } from 'react';
import { SearchInput } from '@components/SearchInput';
import { SearchItem } from '@components/SearchItem';
import { RecipeBar } from '@components/RecipeBar';
import { DietType, DishType } from '@enums';
import { RecipeService, RecipeData, RecipeResponse } from '@api';
import { Loader } from '@components/Loader';
import { useFetching } from '@hooks';

import {
    Container,
    SearchItemContainer,
    Title,
    Wrapper,
    Item,
    ShowMoreButton,
    EmptyResponse,
} from './styled';

export const SearchBar = () => {
    const [inputValue, setInputValue] = useState('');
    const [dietTypeValue, setDietTypeValue] = useState('');
    const [dishTypeValue, setDishTypeValue] = useState('');
    const [recipes, setRecipes] = useState<RecipeData[]>([]);
    const [nextPageLink, setNextPageLink] = useState<string | undefined>('');
    const [isEmptyResponse, setIsEmptyResponse] = useState(false);
    const [fetchRecipe, isRecipeLoading, recipeError] = useFetching(async () => {
        const response: RecipeResponse = await RecipeService.getAll(
            inputValue,
            dietTypeValue,
            dishTypeValue,
            nextPageLink,
        );
        setNextPageLink(response.nextPageUrl);

        if (response.recipes.length === 0) {
            setIsEmptyResponse(true);
        } else {
            setIsEmptyResponse(false);
        }

        setRecipes((prevRecipes) => [...prevRecipes, ...response.recipes]);
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

    const handleShowMore = () => {
        fetchRecipe();
    };

    const handleSearch = async () => {
        setRecipes([]);
        setIsEmptyResponse(false);
        await fetchRecipe();
    };

    return (
        <Container>
            <Wrapper>
                <Title>Discover Recipe & Delicious Food</Title>

                <SearchInput
                    value={inputValue}
                    onChange={handleInputChange}
                    onClick={handleSearch}
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
            </Wrapper>

            {isEmptyResponse && <EmptyResponse>No recipes found for your request</EmptyResponse>}

            {recipes.length > 0 && <RecipeBar recipes={recipes} />}

            {recipes.length > 0 && !isRecipeLoading && nextPageLink && (
                <ShowMoreButton onClick={handleShowMore}>Show more</ShowMoreButton>
            )}
            {isRecipeLoading && <Loader />}
        </Container>
    );
};
