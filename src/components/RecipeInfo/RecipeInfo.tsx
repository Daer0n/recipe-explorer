import React, { useEffect, useState } from 'react';
import { useFetching } from '@hooks';
import { RecipeData, RecipeService } from '@api';
import { FavoriteButton } from '@components/FavoriteButton';
import { CookedButton } from '@components/CookedButton';
import { useThemeContext } from '@context';
import { ReactComponent as ZipLight } from '@assets/images/ZipLight.svg';
import { ReactComponent as ZipDark } from '@assets/images/ZipDark.svg';
import { ReactComponent as MedalLight } from '@assets/images/MedalLight.svg';
import { ReactComponent as MedalDark } from '@assets/images/MedalDark.svg';
import { Loader } from '@components/Loader';

import {
    Container,
    Content,
    MealType,
    Label,
    HeaderContainer,
    ButtonContainer,
    InfoContainer,
    Info,
    IngredientContainer,
    Title,
    ProductContainer,
    Products,
    ProductImage,
    LinkContainer,
    ShadowLink,
    Ingredients,
    Ingredient,
    Circle,
    RecipeImage,
} from './styled';

interface Ingredient {
    text?: string;
    image?: string;
    foodId?: string;
}

interface RecipeInfoProps {
    id: string | undefined;
}

export const RecipeInfo: React.FC<RecipeInfoProps> = ({ id }) => {
    const [recipe, setRecipe] = useState<RecipeData | undefined>(undefined);
    const [isFavorite, setIsFavorite] = useState(false);
    const [isCooked, setIsCooked] = useState(false);
    const { theme } = useThemeContext();
    const [fetchRecipe, isRecipeLoading, recipeError] = useFetching(async () => {
        if (id) {
            const recipeData: RecipeData = await RecipeService.getRecipeById(id);
            setRecipe(recipeData);
        }
    });

    useEffect(() => {
        fetchRecipe();
    }, [id, fetchRecipe]);

    if (isRecipeLoading) {
        return (
            <Container>
                <Loader />
            </Container>
        );
    }

    if (!recipe) {
        return null;
    }

    if (recipeError) {
        return <div>Error {recipeError}</div>;
    }

    return (
        <Container>
            <Content>
                <HeaderContainer>
                    <MealType>Meal type - {recipe.mealType}</MealType>

                    <ButtonContainer>
                        <FavoriteButton
                            isFavorite={isFavorite}
                            setIsFavorite={setIsFavorite}
                            recipe={recipe}
                        />
                        <CookedButton
                            isCooked={isCooked}
                            setIsCooked={setIsCooked}
                            recipe={recipe}
                        />
                    </ButtonContainer>
                </HeaderContainer>

                <Label>{recipe.label}</Label>

                <InfoContainer>
                    <Info>
                        {theme === 'dark' ? <ZipDark /> : <ZipLight />}
                        {recipe.calories.toFixed(0)} calories
                    </Info>
                    <Info>
                        {theme === 'dark' ? <MedalDark /> : <MedalLight />}
                        Cuisine Type - {recipe.cuisineType[0]}
                    </Info>
                </InfoContainer>

                <IngredientContainer>
                    <Title>Ingredients</Title>
                    <Ingredients>
                        {recipe.ingredientLines.map((ingredient: string) => (
                            <Ingredient key={ingredient}>
                                <Circle />
                                {ingredient}
                            </Ingredient>
                        ))}
                    </Ingredients>
                </IngredientContainer>

                <ProductContainer>
                    <Title>Products</Title>
                    <Products>
                        {recipe.ingredients.map((ingredient: Ingredient) => (
                            <ProductImage
                                src={ingredient.image || ''}
                                alt={ingredient.text || 'Ingredient image'}
                                key={ingredient.foodId}
                            />
                        ))}
                    </Products>
                </ProductContainer>

                <LinkContainer>
                    <ShadowLink href={recipe.url}>Recipe link</ShadowLink>
                </LinkContainer>
            </Content>
            <RecipeImage src={recipe.images.LARGE} />
        </Container>
    );
};
