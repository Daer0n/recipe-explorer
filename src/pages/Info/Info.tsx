import React from 'react';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { RecipeInfo } from '@components/RecipeInfo/RecipeInfo';
import { useParams } from 'react-router-dom';

import { Container, Content } from './styled';

export const SearchRecipe = () => {
    const { recipeId, isFavorite, isCooked } = useParams();

    const favorite = isFavorite === 'true';
    const cooked = isCooked === 'true';

    return (
        <Container>
            <Header />

            <Content>
                <RecipeInfo id={recipeId} favorite={favorite} cooked={cooked} />
            </Content>

            <Footer />
        </Container>
    );
};
