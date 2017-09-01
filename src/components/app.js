import React, { Component } from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';

import Note from './note';

/*
const roar = (msg) => console.log(msg);
roar('grrr');
*/

class App extends Component {

    constructor() {
        super();

        this.state = {
            text: '',
            notes: []
        };
    }

    addToDo(){
        const { notes, text } = this.state;
        notes.push({text}); 

        this.setState({
            notes,
            text: '' 
        });

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
                        <Button onClick={() => this.addToDo()}>Submit</Button>
                    </Form>
                    <ul>
                            {this.state.notes.map((note, noteIndex) => { 
                                return (
                                    <Note key={noteIndex} note={note} />
                     
                                )
                            })}
                    </ul>
                </div>
        )
    }
}

export default App;