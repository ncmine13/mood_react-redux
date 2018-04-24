import React from 'react'
import questions from '../../data/questions'
import { QuestionButton } from './QuestionButtonComponent'

export class Questionnaire extends React.Component {
  constructor(props) {
    super(props)
    this.handleQuestionChange = this.handleQuestionChange.bind(this)
    this.state = {
      activeQuestionIndex: 0
    }
  }
  handleQuestionChange (prev) {
    let question = this.state.activeQuestionIndex + ( prev ? -1 : 1 )
    if (question >= 0) {
      this.setState({activeQuestionIndex: question})
    }
  }
  render () {
    return (
      <div className="question-wrapper">
        <h1>{this.props.title}</h1>
        <div>
          <p>{ this.state.activeQuestionIndex + 1 + ".  " + questions[this.state.activeQuestionIndex].content }</p>
          <QuestionButton handleQuestionChange = { this.handleQuestionChange } />
        </div>
      </div>
    )
  }
}