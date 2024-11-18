import React from 'react';
import { ReactComponent as Core } from '@assets/images/Core.svg';
import { ReactComponent as ActiveCore } from '@assets/images/ActiveCore.svg';
import { RecipeData } from '@api';

import { Container } from './styled';

interface FavoriteButtonProps {
    isFavorite: boolean;
    setIsFavorite: (isFavorite: boolean) => void;
    recipe: RecipeData;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
    isFavorite,
    setIsFavorite,
    recipe,
}) => {
    const toggleFavorite = (event: React.MouseEvent) => {
        event.stopPropagation();
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

        if (isFavorite) {
            const updatedFavorites = favorites.filter((item: RecipeData) => item.id !== recipe.id);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        } else {
            favorites.push(recipe);
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }

        setIsFavorite(!isFavorite);
    };

    return <Container onClick={toggleFavorite}>{isFavorite ? <ActiveCore /> : <Core />}</Container>;
};
