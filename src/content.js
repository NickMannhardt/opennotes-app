import React from 'react';
import ReactDOM from 'react-dom';
import "./content.css"

class Main extends React.Component {
    render() {
        return (
            <div className={'my-extension'}>
                <h1>Hello world</h1>
            </div>
        )
    }
}

const app = document.createElement('div');
app.id = "opennotes-app-root";

document.body.appendChild(app);
ReactDOM.render(<Main />, app);