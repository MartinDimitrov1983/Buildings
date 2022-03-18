import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import DetailsPage from '../pages/details'
import CreatePage from '../pages/create'
import EditPage from '../pages/edit'
const ROUTES = [
    {
        route: '/',
        component: HomePage,
    },
    {
        route: '/details',
        component: DetailsPage,
    },
    {
        route: '/create',
        component: CreatePage,
    },
    {
        route: '/edit/:id',
        component: EditPage,
    },
]
const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                {ROUTES.map((route, index) => (
                    <Route
                        key={`key-${index}`}
                        path={route.route}
                        exact
                        component={route.component}
                    />
                ))}
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation
