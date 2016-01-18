var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var CreateHistory = require('history/lib/createHashHistory');

var History = new CreateHistory({
   queryKey: false
});

var BasePage = require('./components/BasePage.jsx');
var HomePage = require('./components/HomePage.jsx');
var PokePage = require('./components/PokePage.jsx');

var Routes = (
    <Router history={History}>
        <Route path="/" component={BasePage}>
            <IndexRoute component={HomePage} />
            <Route path="/pokemon/:pokeId" component={PokePage} />
        </Route>
    </Router>
);

module.exports = Routes;
