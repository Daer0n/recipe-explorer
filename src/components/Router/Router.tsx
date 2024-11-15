import React from 'react';
import { ROUTES } from '@constants';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTES.home.route} element={ROUTES.home.element} />
                <Route path={ROUTES.info.route} element={ROUTES.info.element} />
                <Route path={ROUTES.favorites.route} element={ROUTES.favorites.element} />
                <Route path={ROUTES.notFound.route} element={ROUTES.notFound.element} />
            </Routes>
        </BrowserRouter>
    );
};
