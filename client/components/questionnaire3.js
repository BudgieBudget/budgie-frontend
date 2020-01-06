import React, {Component} from 'react'
import SubQuestions from './subcategories-questions'

class Questionnaire3 extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      health: {
        name: 'health',
        overallMonthly: '',
        subcategories: []
      },
      pet: {
        name: 'pet',
        overallMonthly: '',
        subcategories: []
      },
      miscellaneous: {
        name: 'miscellaneous',
        overallMonthly: '',
        subcategories: []
      }
    }
  }

  handleChange = event => {
    this.setState({
      ...this.state,
      [event.target.name.toLowerCase()]: {
        name: event.target.name,
        overallMonthly: event.target.value
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.history.push('/summary')
    console.log(this.state)
  }

  render() {
    const questionnairePage3 = [
      {
        questionNumber: 7,
        name: 'Health',
        title:
          'How much do you typically spend each month on healthcare? (Including medical appointments, insurance. medications, and dental)',
        value: this.state.health.overallMonthly,
        isRequired: true,
        subcategories: [
          {name: 'Medical', monthly: ''},
          {name: 'Dental', monthly: ''}
        ]
      },
      {
        questionNumber: 8,
        name: 'Pet',
        title:
          'How much do you spend each month on pets? (including veternary care and food)',
        value: this.state.pet.overallMonthly,
        isRequired: true,
        subcategories: [{name: 'Food', monthly: ''}, {name: 'Vet', monthly: ''}]
      },
      {
        questionNumber: 9,
        name: 'Miscellaneous',
        title:
          'How much do you spend each month on other expenses not covered earlier? (including gym memberships and/or hobbies)',
        value: this.state.miscellaneous.overallMonthly,
        isRequired: true,
        subcategories: [
          {name: 'Hobby', monthly: ''},
          {name: 'Gym', monthly: ''}
        ]
      }
    ]
    return (
      <div>
        <h3>Page 3 of 3</h3>
        <form className="questionnaire-container" onSubmit={this.handleSubmit}>
          {questionnairePage3.map(current => {
            return (
              <div key={current.questionNumber}>
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
                <p />
                {current.subcategories ? (
                  <SubQuestions
                    subcategories={current.subcategories}
                    onChange={this.handleChange}
                  />
                ) : null}
              </div>
            )
          })}
          <h6>*starred questions are required</h6>
          <button type="submit">Save and go to your summary results</button>
        </form>
      </div>
    )
  }
}

export default Questionnaire3
