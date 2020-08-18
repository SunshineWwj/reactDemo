import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import routes from './utils/router';

class App extends React.Component {
    componentDidMount() {
        console.log(routes);
    }
    render() {
        return (
            <div>
                <Switch>
                    {routes.map((r, i) => {
                        if(r.exact)
                            return (
                                <Route
                                    path={r.goPath}
                                    exact
                                    key={i}
                                    render={props => {
                                        const Component = r.component();
                                        return <Component {...props} />;
                                    }}/>
                            );
             
                        return (
                            <Route
                                path={r.goPath}
                                key={i}
                                render={props => {
                                    const Component = r.component();
                                    return <Component {...props} />;
                                }}/>
                        );
                    })}
                </Switch>
            </div>
        );
    }
}
export default connect(null, null)(App);
