import React, {Component} from 'react'

class SubQuestions extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      isClosed: true
    }
  }

  // handleClick = (event) => {
  //   this.setState({
  //     isClosed : !this.state.Closed
  //   })
  // }

  handleClick(event) {
    event.preventDefault()
    this.setState(currentState => ({isClosed: !currentState.isClosed}))
  }

  render() {
    let onChange = this.props.onChange
    let subcategories = this.props.subcategories
    return (
      <div>
        <button type="toggle" onClick={this.handleClick}>
          Toggle to enter detailed breakdowns
        </button>
        {!this.state.isClosed
          ? subcategories.map(current => {
              return (
                <div key={current.name}>
                  <label htmlFor={current.name}>{current.name}</label>
                  <input
                    name={current.name}
                    type="number"
                    value={current.monthly}
                    onChange={onChange}
                  />
                </div>
              )
            })
          : null}
      </div>
    )
  }
}

export default SubQuestions
