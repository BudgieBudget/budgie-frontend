import React, {Component} from 'react'
import SubQuestions from './subcategories-questions'

class Questionnaire1 extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      food: {
        name: 'Food',
        overallMonthly: ''
      },
      utilities: {
        name: 'Utilities',
        overallMonthly: ''
      },
      shopping: {
        name: 'Shopping',
        overallMonthly: ''
      }
    }
  }

  handleChange = event => {
    this.setState({
      //this works for now but maybe refactor to use this.setState({prevState}) instead of ...this.state
      ...this.state,
      [event.target.name.toLowerCase()]: {
        name: event.target.name,
        overallMonthly: event.target.value
      }
    })
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
        name: 'Food',
        title:
          'How much do you typically spend each month on food? (including groceries, drinks, and dining out,)',
        value: this.state.food.overallMonthly,
        isRequired: true,
        subcategories: [
          {name: 'Groceries', monthly: ''},
          {name: 'Dining', monthly: ''}
        ]
      },
      {
        questionNumber: 2,
        name: 'Utilities',
        title:
          'How much do you spend each month on utilities? (including electricity, water, gas/heat, sewage, internet, and cell phone)',
        value: this.state.utilities.overallMonthly,
        isRequired: true,
        subcategories: [
          {name: 'Water', monthly: ''},
          {name: 'Gas / Heat', monthly: ''},
          {name: 'Sewage', monthly: ''},
          {name: 'Electricity', monthly: ''},
          {name: 'Internet', monthly: ''},
          {name: 'Cell Phone', monthly: ''}
        ]
      },
      {
        questionNumber: 3,
        name: 'Shopping',
        title:
          'How much do you typically spend each month on shopping? (including clothing, electronics, and home essentials)',
        value: this.state.shopping.overallMonthly,
        isRequired: true,
        subcategories: [
          {name: 'Clothing', monthly: ''},
          {name: 'Electronics', monthly: ''},
          {name: 'Home', monthly: ''}
        ]
      }
    ]
    return (
      <div>
        <h3>Page 1 of 3</h3>
        <form className="questionnaire-container" onSubmit={this.handleSubmit}>
          {questionnairePage1.map(current => {
            return (
              <div key={current.questionNumber}>
                <label htmlFor={current.name}>
                  Question {current.questionNumber}: {current.title}*
                </label>
                <input
                  name={current.name}
                  type="string"
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
          <button type="submit">Save and go to next page</button>
        </form>
      </div>
    )
  }
}

export default Questionnaire1
