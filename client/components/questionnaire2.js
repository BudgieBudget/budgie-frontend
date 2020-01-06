import React, {Component} from 'react'
import SubQuestions from './subcategories-questions'

class Questionnaire2 extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      entertainment: {
        name: 'entertainment',
        overallMonthly: '',
        subcategories: []
      },
      publicTransit: {
        name: 'publicTransit',
        overallMonthly: '',
        subcategories: []
      },
      personalTransport: {
        name: 'personalTransport',
        overallMonthly: '',
        subcategories: []
      }
    }
  }

  handleChange = event => {
    let stateName = event.target.name // i.e. Public Transportation
    let newStateName = '' //want to get publicTransportation
    for (let i = 0; i < stateName.length; i++) {
      let currentLetter = stateName[i]
      if (i === 0) {
        currentLetter = currentLetter.toLowerCase()
      }
      if (currentLetter !== ' ') {
        newStateName += currentLetter
      }
    }
    this.setState({
      ...this.state,
      [newStateName]: {
        name: event.target.name,
        overallMonthly: event.target.value
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    //---this will check to see if the subcategories add up to the overall total---
    // for (let keys in this.state){
    //   let total = Number(keys.overallMonthly)
    //   let check = 0;
    //   keys.subcategories.map(current => {
    //     if (current.monthly.length > 0){
    //       current.monthly = Number(current.monthly)
    //       check += current.monthly
    //     }
    //     }
    //   )
    //   if (total !== check){
    //     alert(`Your overall monthly amount in ${keys.name} does not match the added total of the subcategories in ${keys.name}. Please make changes.`)
    //   }
    // }
    console.log(this.state)
    this.props.history.push('/questionnaire-page3')
  }

  render() {
    const questionnairePage2 = [
      {
        questionNumber: 4,
        name: 'Entertainment',
        title:
          'How much do you typically spend each month on entertainment? (Including theater and/or streaming services)',
        value: this.state.entertainment.overallMonthly,
        isRequired: true,
        subcategories: [
          {name: 'Theater', monthly: ''},
          {name: 'Streaming Services', monthly: ''}
        ]
      },
      {
        questionNumber: 5,
        name: 'Public Transit',
        title:
          'How much do you spend each month on public transportation? (Including bus, train, and subway)',
        value: this.state.publicTransit.overallMonthly,
        isRequired: true,
        subcategories: [
          {name: 'Train / Subway', monthly: ''},
          {name: 'Bus', monthly: ''}
        ]
      },
      {
        questionNumber: 6,
        name: 'Personal Transport',
        title:
          'How much do you spend each month on personal transportation? (Including gas, maintenance, and tolls)',
        value: this.state.personalTransport.overallMonthly,
        subcategories: [
          {name: 'Gas', monthly: ''},
          {name: 'Tolls', monthly: ''},
          {name: 'Maintenance', monthly: ''}
        ]
      }
    ]
    return (
      <div>
        <h3>Page 2 of 3</h3>
        <form className="questionnaire-container" onSubmit={this.handleSubmit}>
          {questionnairePage2.map(current => {
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

export default Questionnaire2
