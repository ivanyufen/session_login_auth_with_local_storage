import React from 'react';

class home extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.username ?
                    <h1>Welcome, {this.props.username}</h1>
                    :
                    <React.Fragment>Silakan login terlebih dahulu!</React.Fragment>}

            </React.Fragment>
        )
    }
}

export default home;