import React from 'react';
import {mount} from 'enzyme';
import App from './app';

describe('App', () => {
    let app = mount(<App />);

    it('renders app title', () => {
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

    describe('When creating a new note', () => {

        let testNote = 'test note';

        beforeEach(() => {
            app.find('FormControl').simulate('change', {
                target: {value: testNote}
            });
        });

        it("state text updated when note input typed in", () => {
            expect(app.state().text).toEqual(testNote);
        });

        describe('and the new note is submitted', () => {
            beforeEach(() => {
                app.find('.submit').simulate('click');
            })

            it('new note text is added to task list ', () => {
                expect(app.state().notes[0].text).toEqual(testNote);
            });


            describe('and the clicking clear removes the notes', () => {
                beforeEach(() => {
                    app.find('.btn.clear').simulate('click');
                });
                
                it('clicking clear, clears notes', () => {
                    expect(app.state().notes.length).toEqual(0);
                });
                
            });
        });

    });

});
