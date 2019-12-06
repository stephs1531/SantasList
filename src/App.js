import React from 'react';
import logo from './logo.svg';
import './App.css';


// const options = ["nice", "not sure", "naughty"]
// var selection = options[Math.floor(Math.random() * options.length)];

function result() {
  //set variable for array of santa's options
  const options = ["nice", "not sure", "naughty"]
  //randomly select one of the options from the array
  var selection = options[Math.floor(Math.random() * options.length)];
  // return (selection);
  console.log(selection);
  //attach selection to state? or at least a <p>?
}

class App extends React.Component {
    // Setting the component's initial state
    state = {
      //state would be your result and would update when the button click function is complete
      //can this initially be set to empty/null?
      firstName: "",
      lastName: ""
    };

    // handleButtonClick = event => {
    //   function result() {
    //     const options = ["nice", "not sure", "naughty"]
    //     var selection = options[Math.floor(Math.random() * options.length)];
    //     // return (selection);
    //     console.log(selection);
    //   }
      
    // }

render() {

  // options for results




    return (
      <div className="App">
        {/* <p>{selection}</p> */}
        {/* when button clicks, run result() function */}
        <button onClick={result}>Get result!</button>

        {/* once function is done, change state to the result */}

        {/* css animations */}
        {/* 1. start with 3 boxes/shapes in red */}
        {/* 2. randomly animate boxes to turn red for a random time between 5-10 seconds */}
        {/* 3. after animation is done, light up whichever box corresponds with the correct result green */}

      
      </div>
    );
  }
}

export default App;
