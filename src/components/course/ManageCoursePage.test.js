import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {ManageCoursePage }from './ManageCoursePage';

describe('Manage Course Page', () =>{
    it('sets an error message when trying to save an empty course title', () => {

        const manageCoursePageProps = {
            authors: [],
            actions: {saveCourse: () => {return Promise.resolve();}},
            course: {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''}
        };

        const wrapper = mount(<ManageCoursePage {...manageCoursePageProps}/>);
        const saveButton = wrapper.find('input').last();
        expect(saveButton.prop('type')).toBe('submit');
        saveButton.simulate('click');
        expect(wrapper.state().errors.title).toBe('Title must have at least 5 characters');
    });
});