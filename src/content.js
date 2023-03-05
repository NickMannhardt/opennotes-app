/*global chrome*/
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { TextField, Button, CircularProgress } from '@material-ui/core'
import "./content.css"


export class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: '',
            outputText: '',
            loading: false
        }
    }

    async getExpandedAbbreviations(text) {
        /**
         * Sends the text to be expanded as a message to be received
         * by the offscreen script which will then pass it along to 
         * the sandbox page.
         */
        this.setState({loading: true})

        const response = await chrome.runtime.sendMessage({
            command: 'translate',
            sender: 'content-script',
            target: 'sandbox',
            body: text
        })

        this.setState({loading: false})
        return response
        
    }
    render() {
        return (
            <div className={'my-extension'}>
                <h1>OpenNotes</h1>
                <div className={'UserInput'}>
                    <TextField 
                        id="input" 
                        label="Input Text" 
                        variant="filled"
                        multiline
                        onChange={(event) => {
                            this.setState({
                                inputText: event.target.value
                            })
                        }}
                    />
                    <br/>
                    <Button 
                        color="primary" 
                        variant="contained"
                        onClick={() => {
                            this.getExpandedAbbreviations(this.state.inputText).then((response) => {
                                this.setState({
                                    outputText: response.body
                                })
                            });
                        }}
                    >
                        Test
                    </Button>
                    <br/>
                    <div className={'OutputContainer'}>
                        { this.state.loading
                            ? <CircularProgress />
                            : <div>Output: {this.state.outputText}</div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const app = document.createElement('div');
app.id = "opennotes-app-root";

document.body.appendChild(app);
ReactDOM.render(<Main />, app);