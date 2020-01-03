import React, {Component} from 'react'

class Questionnaire3 extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      entertainment: '',
      health: '',
      pets: '',
      miscellaneous: ''
    }
  }

  handleChange = event => {
    this.setState({...this.state, [event.target.name]: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.history.push('/summary')
    console.log(this.state)
  }

  render() {
    const questionnairePage3 = [
      {
        questionNumber: 8,
        name: 'health',
        title:
          'How much do you typically spend each month on healthcare? (Including medical appointments, insurance. medications, and dental)',
        value: this.state.health,
        isRequired: true
      },
      {
        questionNumber: 9,
        name: 'entertainment',
        title:
          'How much do you typically spend each month on entertainment? (Including theatre, TV/streaming services, and concerts/festivals)',
        value: this.state.entertainment,
        isRequired: true
      },
      {
        questionNumber: 10,
        name: 'pets',
        title:
          'How much do you spend each month on pets? (Including veternary care, food, and supplies)',
        value: this.state.pets,
        isRequired: true
      },
      {
        questionNumber: 11,
        name: 'miscellaneous',
        title:
          'How much do you spend each month on other expenses not covered earlier? (Including gym memberships, hobbies, etc.)',
        value: this.state.miscellaneous,
        isRequired: true
      }
    ]
    return (
      <div>
        <h3>Page 3 of 3</h3>
        <form className="questionnaire-container" onSubmit={this.handleSubmit}>
          {questionnairePage3.map(current => {
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

export default Questionnaire3
