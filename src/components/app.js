import React, { Component } from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';

import Note from './note';
import { bake_cookie, read_cookie, delete_cookie} from 'sfcookies';

const cookie_key = 'NOTES';

class App extends Component {

    constructor() {
        super();

        this.state = {
            text: '',
            notes: []
        };
    }

    componentDidMount(){
        this.setState({notes: read_cookie(cookie_key)});
    }

    addToDo(){
        const { notes, text } = this.state;
        notes.push({text}); 

        this.setState({
            notes,
            text: '' 
        });

        bake_cookie(cookie_key, this.state.notes);

    }

    clearNotes(){
        this.setState({notes: []});
        delete_cookie(cookie_key);
    }

    render(){

        return(
            <div>
                    <h2>Note to self</h2>
                    <Form inline>
                        <FormControl value={this.state.text} onChange={event => {
                            this.setState({text:event.target.value})
                            }}/>
                            {' '}
                        <Button className="submit" onClick={() => this.addToDo()}>Add</Button>
                    </Form>
                    <ul>
                            {this.state.notes.map((note, noteIndex) => { 
                                return (
                                    <Note key={noteIndex} note={note} />
                     
                                )
                            })}
                    </ul>
                    <hr />
                    <Button className="clear" onClick={() => this.clearNotes()}>Clear notes</Button> 

                </div>
        )
    }
}

export default App;