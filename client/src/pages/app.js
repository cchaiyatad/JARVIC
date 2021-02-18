import React, { Component } from 'react';
import "./app.css"
import CounterService from "../api/counterApi"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { counters: [] }
  }

  componentDidMount() {
    console.log(CounterService.getCounters());
  }


  render() {
    return (
      <React.Fragment>
        <div>
          <h1>Just A Rather Very Intelligent Counter</h1>
          <h2>J.A.R.V.I.C</h2>
        </div>
      </React.Fragment >
    );
  }
}

export default App;
