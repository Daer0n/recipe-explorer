import React from 'react';
import { Home } from '@pages/Home';
import { SearchRecipe } from '@pages/SearchRecipe';
import { Favorite } from '@pages/Favorite';

export const ROUTES = {
    home: {
        route: '/',
        element: <Home />,
    },
    info: {
        route: '/info',
        element: <SearchRecipe />,
    },
    favorites: {
        route: '/favorites',
        element: <Favorite />,
    },
};
