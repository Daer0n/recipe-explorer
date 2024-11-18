import React from 'react';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { RecipeInfo } from '@components/RecipeInfo/RecipeInfo';
import { useParams } from 'react-router-dom';

import { Container, Content } from './styled';

export const SearchRecipe = () => {
    const { recipeId } = useParams();

    return (
        <Container>
            <Header />

            <Content>
                <RecipeInfo id={recipeId} />
            </Content>

            <Footer />
        </Container>
    );
};
