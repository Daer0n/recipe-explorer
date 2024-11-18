import React from 'react';
import { ReactComponent as Tick } from '@assets/images/Tick.svg';
import { ReactComponent as ActiveTick } from '@assets/images/ActiveTick.svg';
import { RecipeData } from '@api';

import { Container } from './styled';

interface CookedButtonProps {
    isCooked: boolean;
    setIsCooked: (isFavorite: boolean) => void;
    recipe: RecipeData;
}

export const CookedButton: React.FC<CookedButtonProps> = ({ isCooked, setIsCooked, recipe }) => {
    const toggleCooked = (event: React.MouseEvent) => {
        event.stopPropagation();
        const cooked = JSON.parse(localStorage.getItem('cooked') || '[]');

        if (isCooked) {
            const updatedCooked = cooked.filter((item: RecipeData) => item.id !== recipe.id);
            localStorage.setItem('cooked', JSON.stringify(updatedCooked));
        } else {
            cooked.push(recipe);
            localStorage.setItem('cooked', JSON.stringify(cooked));
        }

        setIsCooked(!isCooked);
    };

    return <Container onClick={toggleCooked}>{isCooked ? <ActiveTick /> : <Tick />}</Container>;
};
