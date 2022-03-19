import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '../pages/home';
import DetailsPage from '../pages/details';
import CreatePage from '../pages/create';
import EditPage from '../pages/edit';
const ROUTES = [
    {
        route: '/',
        component: <HomePage />
    },
    {
        route: '/details',
        component: <DetailsPage />
    },
    {
        route: '/create',
        component: <CreatePage />
    },
    {
        route: '/edit/:id',
        component: <EditPage />
    }
];
const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                {ROUTES.map((route, index) => (
                    <Route
                        key={`key-${index}`}
                        path={route.route}
                        exact
                        element={route.component}
                    />
                ))}
            </Routes>
        </BrowserRouter>
    );
};

export default Navigation;
