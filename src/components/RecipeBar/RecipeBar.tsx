import React from 'react';
import { RecipeData } from '@api';
import { Recipe } from '@components/Recipe/Recipe';

import { Container, Title, Line, Content, TitleContainer } from './styled';

interface RecipeBarProps {
    recipes: RecipeData[];
}

export const RecipeBar: React.FC<RecipeBarProps> = ({ recipes }) => {
    return (
        <Container>
            <TitleContainer>
                <Line />
                <Title>Founded dishes</Title>
            </TitleContainer>
            <Content>
                {recipes.map((recipe) => (
                    <Recipe key={recipe.id} recipe={recipe} />
                ))}
            </Content>
        </Container>
    );
};
