import React from 'react';
import { Home } from '@pages/Home';
import { SearchRecipe } from '@pages/SearchRecipe';
import { Favorite } from '@pages/Favorite';
import { NotFound } from '@pages/NotFound';

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
    notFound: {
        route: '*',
        element: <NotFound />,
    },
};
