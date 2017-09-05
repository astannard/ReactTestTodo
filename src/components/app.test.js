import React from 'react';
import {mount} from 'enzyme';
import App from './app';

describe('App', () => {
    let app = mount(<App />);

    it('renders app title', () => {
        console.log(app.debug());

        expect(app.find('h2').text()).toEqual('Note to self');
    });

    it('renders the clear button', () => {
        expect(app.find('.btn').at(1).text()).toEqual('Clear notes');
    });
    
    describe('when rendering the form', () => {
        it('creates a form control', () => {
            expect(app.find('Form').exists()).toBe(true);
        });

        it('renders a FormControl component', () => {
            expect(app.find('FormControl').exists()).toBe(true);
        });

        it('renders a submit button', () => {
            expect(app.find('.btn.submit').exists()).toBe(true);
            expect(app.find('.btn.submit').text()).toEqual('Add');
        })
    });

});
