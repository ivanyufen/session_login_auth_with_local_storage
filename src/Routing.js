import React from 'react';
import Home from './home';
import { Route, Link } from 'react-router-dom';

class Routing extends React.Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={"HomeView"} />
                <Route
                    path='/home'
                    render={(props) => (
                        //lempar props ke component Home kalau user sudah login
                        <Home {...props} username={this.props.username} />
                    )}
                />
            </div>
        )
    }
}

export default Routing;