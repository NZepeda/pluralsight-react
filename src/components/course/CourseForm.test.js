import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseFrom from './CourseForm';

function setup(saving){
    let courseFormProps = {
        course: {}, 
        saving: saving,
        errors: {},
        onSave: () => {},
        onChange: () => {}
    };

    let renderer = TestUtils.createRenderer();
    renderer.render(<CourseFrom {...courseFormProps}/>);

    let output = renderer.getRenderOutput();

    return {
        renderer,
        output,
        courseFormProps
    };
}

describe ('Course Form via React Test Utils', () => {

    it('renders a forma and an h1', () => {
        const {output} = setup();
        expect(output.type).toBe('form');

        let [ h1 ] = output.props.children;
        expect(h1.type).toBe('h1');

    });

    it('Save button is labeled save when not saving', () => {
        const {output} = setup(false);
        const submitButton = output.props.children[5];
        expect(submitButton.props.value).toBe('Save');
    });

    it('Save button is labeled saving... when saving', () => {
        const {output} = setup(true);
        const submitButton = output.props.children[5];
        expect(submitButton.props.value).toBe('Saving...');
    });
});