import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import CreatPoint from './pages/CreatePoint'

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} exact path="/" />
            <Route component={CreatPoint} exact path="/create-point" />
        </BrowserRouter>
    )
}

export default Routes