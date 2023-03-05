/*global chrome*/
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { TextField, Button, CircularProgress } from '@material-ui/core';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import "./content.css";


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
            <div>
                <div className={'my-extension'}>
                    <div className={'header'}>
                        <Button
                            onClick={toggle}
                        >
                            Close 
                            <CloseOutlinedIcon />
                        </Button>
                    </div>
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
                <div className={'backgroundShadow'} />
            </div>
        )
    }
}

const app = document.createElement('div');
app.id = "opennotes-app-root";

app.style.display = 'none';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'clicked_browser_action') {
        toggle();
    }
});

function toggle() {
    if (app.style.display === 'none') {
        app.style.display = 'block';
    } else {
        app.style.display = 'none';
    }
}

document.body.appendChild(app);
ReactDOM.render(<Main />, app);