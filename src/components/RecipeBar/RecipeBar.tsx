import React from 'react';
import { RecipeData } from '@api';
import { Recipe } from '@components/Recipe/Recipe';
import { SectionHeader } from '@components/SectionHeader/SectionHeader';

import { Container, Content } from './styled';

interface RecipeBarProps {
    recipes: RecipeData[];
}

export const RecipeBar: React.FC<RecipeBarProps> = ({ recipes }) => {
    return (
        <Container>
            <SectionHeader title="Founded dishes" />

            <Content>
                {recipes.map((recipe) => (
                    <Recipe key={recipe.id} recipe={recipe} />
                ))}
            </Content>
        </Container>
    );
};
