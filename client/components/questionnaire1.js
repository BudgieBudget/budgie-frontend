import React, {Component} from 'react'
import SubQuestions from './subcategories-questions'

class Questionnaire1 extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      income: {
        name: 'income',
        overallMonthly: ''
      },
      housing: {
        name: 'housing',
        overallMonthly: ''
      },
      utilities: {
        name: 'utilities',
        overallMonthly: ''
      },
      detailedUtilities: [
        {name: 'electricity', overallMonthly: ''},
        {name: 'water', overallMonthly: ''},
        {name: 'sewage', overallMonthly: ''},
        {name: 'heat', overallMonthly: ''},
        {name: 'internet', overallMonthly: ''},
        {name: 'cellPhone', overallMonthly: ''}
      ]
    }
  }

  // handleChange = event => {
  //   this.setState({...this.state, [event.target.name]: event.target.value})
  // }

  handleChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: {
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
        name: 'income',
        title: 'Please enter your earnings per month',
        value: this.state.income.overallMonthly,
        isRequired: true
      },
      {
        questionNumber: 2,
        name: 'housing',
        title: 'How much do you spend each month on rent/housing?',
        value: this.state.housing.overallMonthly,
        isRequired: true
      },
      {
        questionNumber: 3,
        name: 'utilities',
        title:
          'How much do you spend each month on utilties? (Including electric, gas, water, internet, phone, etc.)',
        value: this.state.utilities.overallMonthly,
        isRequired: true,
        subcategories: [
          {
            name: 'gas'
            // value: this.state.utilities[0].monthly
          },
          {
            name: 'electric'
            // value: this.state.utilities[1].monthly
          },
          {
            name: 'water'
            // value: this.state.utilities[2].monthly
          },
          {
            name: 'internet'
            // value: this.state.utilities[3].monthly
          }
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
