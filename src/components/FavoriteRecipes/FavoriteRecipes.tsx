import React, { useEffect, useState } from 'react';
import { SectionHeader } from '@components/SectionHeader/SectionHeader';
import { RecipeData } from '@api';
import { Recipe } from '@components/Recipe';
import { ReactComponent as Empty } from '@assets/images/Empty.svg';

import { Container, Wrapper, Content, EmptyContainer } from './styled';

export const FavoriteRecipes = () => {
    const [favoritesRecipes, setFavoritesRecipes] = useState([]);
    const [cookedRecipes, setCookedRecipes] = useState([]);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        const cooked = JSON.parse(localStorage.getItem('cooked') || '[]');

        setFavoritesRecipes(favorites);
        setCookedRecipes(cooked);
    }, []);

    return (
        <Container>
            <Wrapper>
                <SectionHeader title="Favorite dishes" />
                <Content>
                    {favoritesRecipes.length > 0 ? (
                        favoritesRecipes.map((recipe: RecipeData) => (
                            <Recipe recipe={recipe} key={recipe.id} />
                        ))
                    ) : (
                        <EmptyContainer>
                            Empty
                            <Empty />
                        </EmptyContainer>
                    )}
                </Content>
            </Wrapper>

            <Wrapper>
                <SectionHeader title="Cooked dishes" />
                <Content>
                    {cookedRecipes.length > 0 ? (
                        cookedRecipes.map((recipe: RecipeData) => (
                            <Recipe recipe={recipe} key={recipe.id} />
                        ))
                    ) : (
                        <EmptyContainer>
                            Empty
                            <Empty />
                        </EmptyContainer>
                    )}
                </Content>
            </Wrapper>
        </Container>
    );
};
