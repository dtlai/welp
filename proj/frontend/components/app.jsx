import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import HomepageContainer from './homepage/homepage_container'
// import SearchContainer from './search/search_container';
// import BenchShowContainer from './bench_show/bench_show_container';
// import BenchFormContainer from './bench_form/bench_form_container';
import { AuthRoute, DefaultRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        {/* <header>
            <Link to="/" className="header-link">
                <h1>Delp</h1>
            </Link>
            <GreetingContainer />
        </header> */}
        <header>
            <Link to="/" className="logo-link">
                {/* <h1>Delp</h1> */}
                <img src="https://i.imgur.com/C3eAHw6.png"/>
            </Link>
            <GreetingContainer />
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            {/* <AuthRoute exact path="/" component={HomepageContainer} /> */}
            <DefaultRoute path="*" />
            {/* <ProtectedRoute exact path="/benches/new" component={BenchFormContainer} />
            <Route path="/benches/:benchId" component={BenchShowContainer} />
            <Route exact path="/" component={SearchContainer} /> */}
        </Switch>
    </div>
);

export default App;
