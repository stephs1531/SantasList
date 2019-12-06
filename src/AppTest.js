import React from 'react';
import logo from './logo.svg';
import './App.css';

class AppTest extends React.Component {
    
    state = {
        choice: "Santa's Checking his list..."
    };

   

    CheckListClick = () => {
         //set variable for array of santa's options
        const options = ["nice", "not sure", "naughty"];
        //random selection form array
        var selection = options[Math.floor(Math.random() * options.length)];

        this.setState({ choice: selection });
    };

render() {
    //const variable goes here
    //set variable for array of santa's options
    const options = ["nice", "not sure", "naughty"];

    return(
        <div className="full-app">
            {/* jsx stuff goes here */}
            <p className="card-text">{this.state.choice}</p>

            <button className="btn btn-primary" onClick={this.CheckListClick}>
            Check List
          </button>
        </div>
    );
}

}

export default AppTest;