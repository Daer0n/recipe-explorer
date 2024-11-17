import React, { useState, useEffect } from 'react';
import { RecipeData } from '@api';
import { ReactComponent as Core } from '@assets/images/Core.svg';
import { ReactComponent as ActiveCore } from '@assets/images/ActiveCore.svg';
import { ReactComponent as Tick } from '@assets/images/Tick.svg';
import { ReactComponent as ActiveTick } from '@assets/images/ActiveTick.svg';

import { Container, RecipeImage, RecipeLabel, ButtonContainer, Button } from './styled';

interface RecipeProps {
    recipe: RecipeData;
}

export const Recipe: React.FC<RecipeProps> = ({ recipe }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [isCooked, setIsCooked] = useState(false);

    const truncatedLabel =
        recipe.label.length > 26 ? `${recipe.label.slice(0, 23)}...` : recipe.label;

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        const cooked = JSON.parse(localStorage.getItem('cooked') || '[]');

        setIsFavorite(favorites.includes(recipe.id));
        setIsCooked(cooked.includes(recipe.id));
    }, [recipe.id]);

    const toggleFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

        if (isFavorite) {
            const updatedFavorites = favorites.filter((id: string) => id !== recipe.id);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        } else {
            favorites.push(recipe.id);
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }

        setIsFavorite(!isFavorite);
    };

    const toggleCooked = () => {
        const cooked = JSON.parse(localStorage.getItem('cooked') || '[]');

        if (isCooked) {
            const updatedCooked = cooked.filter((id: string) => id !== recipe.id);
            localStorage.setItem('cooked', JSON.stringify(updatedCooked));
        } else {
            cooked.push(recipe.id);
            localStorage.setItem('cooked', JSON.stringify(cooked));
        }

        setIsCooked(!isCooked);
    };

    return (
        <Container>
            <RecipeImage src={recipe.images.SMALL} alt={recipe.label} />
            <RecipeLabel>{truncatedLabel}</RecipeLabel>
            <ButtonContainer>
                <Button onClick={toggleFavorite}>{isFavorite ? <ActiveCore /> : <Core />}</Button>
                <Button onClick={toggleCooked}>{isCooked ? <ActiveTick /> : <Tick />}</Button>
            </ButtonContainer>
        </Container>
    );
};
