import React, { useState, useEffect } from 'react';
import { RecipeData } from '@api';
import { ReactComponent as Core } from '@assets/images/Core.svg';
import { ReactComponent as ActiveCore } from '@assets/images/ActiveCore.svg';
import { ReactComponent as Tick } from '@assets/images/Tick.svg';
import { ReactComponent as ActiveTick } from '@assets/images/ActiveTick.svg';
import { useNavigate } from 'react-router-dom';
import { FavoriteButton } from '@components/FavoriteButton';
import { CookedButton } from '@components/CookedButton';

import { Container, RecipeImage, RecipeLabel, ButtonContainer, InfoContainer } from './styled';

interface RecipeProps {
    recipe: RecipeData;
}

export const Recipe: React.FC<RecipeProps> = ({ recipe }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [isCooked, setIsCooked] = useState(false);
    const navigate = useNavigate();

    const truncatedLabel =
        recipe.label.length > 20 ? `${recipe.label.slice(0, 18)}...` : recipe.label;

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        const cooked = JSON.parse(localStorage.getItem('cooked') || '[]');

        setIsFavorite(favorites.some((fav: RecipeData) => fav.id === recipe.id));
        setIsCooked(cooked.some((cookedItem: RecipeData) => cookedItem.id === recipe.id));
    }, [recipe.id]);

    return (
        <Container onClick={() => navigate(`/info/${recipe.id}/${isFavorite}/${isCooked}`)}>
            <RecipeImage src={recipe.images.REGULAR} alt={recipe.label} />
            <InfoContainer>
                <RecipeLabel>{truncatedLabel}</RecipeLabel>
                <ButtonContainer>
                    <FavoriteButton
                        isFavorite={isFavorite}
                        setIsFavorite={setIsFavorite}
                        recipe={recipe}
                    />
                    <CookedButton isCooked={isCooked} setIsCooked={setIsCooked} recipe={recipe} />
                </ButtonContainer>
            </InfoContainer>
        </Container>
    );
};
