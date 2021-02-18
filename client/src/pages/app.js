import React, { Component } from 'react'
import "./app.css"
import CounterService from "../api/counterApi"
import Counter from "../components/counter"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { counters: [] }
  }

  componentDidMount() {
    CounterService.getCounters()
      .then(data => this.setState({ counters: data }))
      .catch((err) => {
        console.log(err)
        alert("Error: Check your connection and try again")
      })

    window.addEventListener('beforeunload', (event) => {
      event.preventDefault()
      event.returnValue = ''
      this.handleSaveValue()
    })
  }

  handleAddCounter = () => {
    const counters = [...this.state.counters]
    if (counters.length >= 5) {
      alert("Error: You can't have more than 5 counters")
      return
    }

    CounterService.postCounter()
      .then(data => {
        counters.push(data)
        this.setState({ counters: counters })
      })
      .catch((err) => {
        console.log(err)
        alert("Error: Check your connection and try again")
      })
  }

  handleDeleteCounter = (idx) => {
    const id = this.state.counters[idx].id

    CounterService.deleteCounter(id)
      .then(_ => {
        const counters = this.state.counters.filter((c) => c.id !== id)
        this.setState({ counters: counters })
      })
      .catch((err) => {
        console.log(err)
        alert("Error: Check your connection and try again")
      })
  }

  //if value = 0 mean reset
  handleChangeValue = (idx, value) => {
    const counters = [...this.state.counters]

    counters[idx].value = value == 0 ? 0 : counters[idx].value + value

    this.setState({ counters })
  }

  handleSaveValue = () => {
    CounterService.putCounters(this.state.counters)
      .catch((err) => {
        console.log(err)
        alert("Error: Check your connection and try again")
      })
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <h1>Just A Rather Very Intelligent Counter</h1>
          <h2>J.A.R.V.I.C</h2>
          {this.state.counters.map((counter, index) =>
            <Counter
              key={counter.id}
              value={counter.value}
              index={index}
              onChangeValue={this.handleChangeValue}
              onDelete={this.handleDeleteCounter}
            />)}
          <button onClick={() => this.handleAddCounter()}>
            Add a counter
          </button>
        </div>
      </React.Fragment >
    )
  }
}

export default App
