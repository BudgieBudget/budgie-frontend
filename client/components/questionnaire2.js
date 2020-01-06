import React, {Component} from 'react'
import SubQuestions from './subcategories-questions'

class Questionnaire2 extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      food: {
        name: 'food',
        overallMonthly: '',
        subcategories: [
          {name: 'groceries', monthly: ''},
          {name: 'dining', monthly: ''}
        ]
      },
      shopping: {
        name: 'shopping',
        overallMonthly: '',
        subcategories: [
          {name: 'clothing', monthly: ''},
          {name: 'electronics', monthly: ''},
          {name: 'home', monthly: ''}
        ]
      },
      publicTransit: {
        name: 'publicTransit',
        overallMonthly: '',
        subcategories: [
          {name: 'train', monthly: ''},
          {name: 'bus', monthly: ''}
        ]
      },
      personalTransport: {
        name: 'personalTransport',
        overallMonthly: '',
        subcategories: [
          {name: 'gas', monthly: ''},
          {name: 'tolls', monthly: ''},
          {name: 'maintenance', monthly: ''}
        ]
      }
    }
  }

  handleChange = event => {
    for (let keys in this.state) {
      if (keys === event.target.name) {
        this.setState({
          ...this.state,
          [event.target.name]: {
            name: event.target.name,
            overallMonthly: event.target.value,
            subcategories: [...event.target.subcategories]
          }
        })
      }
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    //this checks to see if the subcategories add up to the overall total:
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
        name: 'food',
        title:
          'How much do you typically spend each month on food? (Including groceries, drinks, and dining out,)',
        value: this.state.food.overallMonthly,
        subState: this.state.food.subcategories,
        subcategories: [
          {name: 'groceries', monthly: ''},
          {name: 'dining', monthly: ''}
        ]
      },
      {
        questionNumber: 5,
        name: 'shopping',
        title:
          'How much do you typically spend each month on shopping? (Including clothing, electronics, and home essentials, etc.)',
        value: this.state.shopping.overallMonthly,
        subState: this.state.shopping.subcategories,
        subcategories: [
          {name: 'clothing', monthly: ''},
          {name: 'electronics', monthly: ''},
          {name: 'home', monthly: ''}
        ]
      },
      {
        questionNumber: 6,
        name: 'publicTransit',
        title:
          'How much do you spend each month on public transportation? (Including bus, train, and subway)',
        value: this.state.publicTransit.overallMonthly,
        subState: this.state.publicTransit.subcategories,
        subcategories: [
          {name: 'train', monthly: ''},
          {name: 'bus', monthly: ''}
        ]
      },
      {
        questionNumber: 7,
        name: 'personalTransport',
        title:
          'How much do you spend each month on personal transportation? (Including gas, maintenance, and tolls)',
        value: this.state.personalTransport.overallMonthly,
        subState: this.state.personalTransport.subcategories,
        subcategories: [
          {name: 'gas', monthly: ''},
          {name: 'tolls', monthly: ''},
          {name: 'maintenance', monthly: ''}
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
