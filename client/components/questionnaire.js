import React, {Component} from 'react'
import * as Survey from 'survey-react'

const surveyJSON = {
  pages: [
    {
      name: 'page1',
      elements: [
        {
          type: 'text',
          name: 'question1',
          title: 'Please enter your earnings per month',
          isRequired: true
        },
        {
          type: 'text',
          name: 'question2',
          title: 'How much do you typically spend each month on food?',
          description: 'Including groceries, drinks, dining out, etc.',
          isRequired: true,
          validators: [
            {
              type: 'numeric',
              text: 'Only number values accepted'
            }
          ],
          inputType: 'number'
        },
        {
          type: 'multipletext',
          name: 'question3',
          title:
            'Optional: What is the breakdown of your food spendings per month?',
          items: [
            {
              name: 'text1',
              inputType: 'number',
              title: 'Groceries',
              validators: [
                {
                  type: 'numeric',
                  text: 'Enter as dollar amount'
                }
              ]
            },
            {
              name: 'text2',
              inputType: 'number',
              title: 'Dining out',
              validators: [
                {
                  type: 'numeric',
                  text: 'Enter as dollar value'
                }
              ]
            },
            {
              name: 'text3',
              inputType: 'number',
              title: 'Other',
              validators: [
                {
                  type: 'numeric',
                  text: 'Enter as dollar amount'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'page2',
      elements: [
        {
          type: 'text',
          name: 'question4',
          title: 'How much do you spend each month on rent/housing?',
          isRequired: true
        },
        {
          type: 'text',
          name: 'question5',
          title: 'On average, how much do you spend each month on utilities?',
          description: 'Including electric, gas, water, internet, phone, etc.',
          isRequired: true
        },
        {
          type: 'multipletext',
          name: 'question6',
          title:
            'Optional: What is the breakdown of your utilities each month?',
          description: 'If not applicable, enter 0',
          items: [
            {
              name: 'text1',
              title: 'Gas'
            },
            {
              name: 'text2',
              title: 'Electric'
            },
            {
              name: 'text3',
              title: 'Water'
            },
            {
              name: 'text4',
              title: 'Internet'
            },
            {
              name: 'text5',
              title: 'Phone'
            },
            {
              name: 'text6',
              title: 'Other'
            }
          ]
        }
      ]
    },
    {
      name: 'page3',
      elements: [
        {
          type: 'text',
          name: 'question7',
          title: 'How much do you spend on healthcare per month?',
          description:
            'Including insurance, prescriptions, dental, vision, etc.',
          isRequired: true,
          validators: [
            {
              type: 'numeric',
              text: 'Please enter numbers only'
            }
          ],
          inputType: 'number'
        },
        {
          type: 'text',
          name: 'question8',
          title: 'How much do you spend on childcare per month?',
          description: 'Including supplies, daycare, babysitting, etc.',
          isRequired: true
        },
        {
          type: 'text',
          name: 'question10',
          title: 'How much do you spend on pets and pet care per month?',
          description: 'Including food, supplies, veterinary care, etc.',
          inputType: 'number'
        },
        {
          type: 'text',
          name: 'question11',
          title: 'How much do you spend on household necessities?',
          description:
            'Such as toiletries, kitchen ware, cleaning supplies, etc.',
          inputType: 'number'
        },
        {
          type: 'text',
          name: 'question9',
          title: 'Entertainment and recreation?',
          description:
            'i.e. Movies, subscriptions, events, games, memberships, hobbies?',
          validators: [
            {
              type: 'numeric'
            }
          ],
          inputType: 'number'
        }
      ]
    }
  ]
}

class Questionnaire extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isComplete: false
    }
    this.onCompleteSurvey = this.onCompleteSurvey.bind(this)
  }

  onCompleteSurvey = survey => {
    console.log(JSON.stringify(survey.data))
    console.log(JSON.stringify(survey))
    this.setState({
      isComplete: true
    })
  }

  render() {
    const survey = new Survey.Model(surveyJSON)
    const surveyRender = !this.state.isComplete ? (
      <Survey.Survey
        json={surveyJSON}
        showCompletedPage={false}
        onComplete={() => this.onCompleteSurvey(survey)}
      />
    ) : (
      <div>Your questionnaire has been completed</div>
    )
    return (
      // <Survey.SurveyWindow json={surveyJSON} onComplete={this.sendDataToServer}/>,
      // document.getElementById("surveyContainer")
      <div id="surveyContainer">
        <link
          href="https://surveyjs.azureedge.net/1.1.29/survey.css"
          type="text/css"
          rel="stylesheet"
        />
        <script src="https://surveyjs.azureedge.net/1.1.29/survey.jquery.min.js" />
        {surveyRender}
      </div>
    )
  }
}

export default Questionnaire
