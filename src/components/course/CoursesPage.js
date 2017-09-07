import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {

    constructor(props, context){
        super(props, context);

        this.state = {
            course: {title:""}
        };

        // If you have any functions, they should get binded to the component
        // in the constructor.

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }
    
    // This will fire every time the user updates the field
    onTitleChange(event){
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course });
    }

    onClickSave(){
        this.props.actions.createCourse(this.state.course);
    }

    courseRow(course, index){
        return(<div key={index}>{course.title}</div>);
    }

    render(){
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>

                <input 
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title} />
                
                <input
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave} />
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

