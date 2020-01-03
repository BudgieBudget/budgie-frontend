import React, {Component} from 'react'

class Questionnaire2 extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      food: '',
      shopping: '',
      publicTransit: '',
      personalTransport: ''
    }
  }

  handleChange = event => {
    this.setState({...this.state, [event.target.name]: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.history.push('/questionnaire-page3')
    console.log(this.state)
  }

  render() {
    const questionnairePage2 = [
      {
        questionNumber: 4,
        name: 'food',
        title:
          'How much do you typically spend each month on food? (Including groceries, drinks, and dining out,)',
        value: this.state.food,
        isRequired: true
      },
      {
        questionNumber: 5,
        name: 'shopping',
        title:
          'How much do you typically spend each month on shopping? (Including clothing, electronics, and home essentials, etc.)',
        value: this.state.shopping,
        isRequired: true
      },
      {
        questionNumber: 6,
        name: 'publicTransit',
        title:
          'How much do you spend each month on public transportation? (Including bus, train, and subway)',
        value: this.state.publicTransit,
        isRequired: true
      },
      {
        questionNumber: 7,
        name: 'personalTransport',
        title:
          'How much do you spend each month on personal transportation? (Including gas, maintenance, and tolls)',
        value: this.state.personalTransport,
        isRequired: true
      }
    ]
    return (
      <div>
        <h3>Page 2 of 3</h3>
        <form className="questionnaire-container" onSubmit={this.handleSubmit}>
          {questionnairePage2.map(current => {
            return (
              <p key={current.questionNumber}>
                <label htmlFor={current.name}>
                  Question {current.questionNumber}: {current.title}*
                </label>
                <input
                  name={current.name}
                  type="number"
                  value={current.value}
                  onChange={this.handleChange}
                  required
                />
              </p>
            )
          })}
          <h6>*starred questions are required</h6>
          <button type="submit">Save and go to next page</button>
        </form>
      </div>
    )
  }
}

export default Questionnaire2
