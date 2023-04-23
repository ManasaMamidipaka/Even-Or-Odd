/* eslint-disable react/button-has-type */
// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {num: 0, isEvenOrOdd: 'Even'}

  onIncrement = () => {
    this.setState(prevState => {
      const prevNum = prevState.num
      const randomNumber = Math.floor(Math.random() * 100)
      const changeEvenOrOdd =
        (prevNum + randomNumber) % 2 === 0 ? 'Even' : 'Odd'
      return {num: prevNum + randomNumber, isEvenOrOdd: changeEvenOrOdd}
    })
  }

  render() {
    const {num, isEvenOrOdd} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="count-heading"> Count {num}</h1>
          <p className="description"> Count is {isEvenOrOdd}</p>

          <button className="increase-btn" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="paragraph">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
