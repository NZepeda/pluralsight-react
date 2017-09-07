import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {

    constructor(props, context){
        super(props, context);
    }
    
    courseRow(course, index){
        return(<div key={index}>{course.title}</div>);
    }

    render(){
        
        return (
            <div>
                <h1>Courses</h1>
                <CourseList courses={this.props.courses} />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps){
    return {
        courses : state.courses
    };
}

// Determines what functions are available in the component
function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

