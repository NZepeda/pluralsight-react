// ===============================================================
// This component handles the App template used on every page.
// This can be considered the 'Root' of the app.
// ===============================================================

import React, {PropTypes} from 'react';
import Header from './common/Header';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header />
                {this.props.children}
            </div>
        );
    }
}

// If a component makes use of props, it should have its propTypes
// defined like so.
App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;