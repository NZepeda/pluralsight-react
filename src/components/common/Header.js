// ====================================================================
// It is generally good practice to have 'common' components. These 
// components are typically used sitewide. 
// ====================================================================

import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';


// An IndexLink is a like a Link, except it is only active when the current route is exactly the 
// linked route. It is equivalent to the <Link> with the onlyActiveOnIndex prop set.
const Header = ({loading}) => {
    return(
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {"   |   "}
            <Link to="/about" activeClassName="active">About</Link>
            {"   |   "}
            <Link to="/courses" activeClassName="active">Courses</Link>
            
            {loading && <LoadingDots interval={100} dots={20}/>}
        </nav>
    );
};

Header.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Header;