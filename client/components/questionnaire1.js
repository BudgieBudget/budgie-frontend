import React, {Component} from 'react'

class Questionnaire1 extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      income: '',
      housing: '',
      utilities: ''
    }
  }

  handleChange = event => {
    this.setState({...this.state, [event.target.name]: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.history.push('/questionnaire-page2')
    console.log(this.state)
  }

  render() {
    const questionnairePage1 = [
      {
        questionNumber: 1,
        name: 'income',
        title: 'Please enter your earnings per month',
        value: this.state.income,
        isRequired: true
      },
      {
        questionNumber: 2,
        name: 'housing',
        title: 'How much do you spend each month on rent/housing?',
        value: this.state.housing,
        isRequired: true
      },
      {
        questionNumber: 3,
        name: 'utilities',
        title:
          'How much do you spend each month on utilties? (Including electric, gas, water, internet, phone, etc.)',
        value: this.state.utilities,
        isRequired: true
      }
    ]
    return (
      <div>
        <h3>Page 1 of 3</h3>
        <form className="questionnaire-container" onSubmit={this.handleSubmit}>
          {questionnairePage1.map(current => {
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

export default Questionnaire1
