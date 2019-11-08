import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CarResults from './components/car-results';
import CarDetailed from './components/car-detailed';

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={CarResults} />
            <Route path="/car" component={CarDetailed} />
        </Switch>
    );
}

export default Routes;