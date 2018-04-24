import React from 'react'

export class QuestionButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nextBtnTxt: 'Next',
      prevBtnTxt: 'Prev'
    }
  }
  render () {
    return (
      <div className="button-wrapper">
        <div className="button" onClick={() => this.props.handleQuestionChange(true)}>{this.state.prevBtnTxt}</div>
        <div className="button" onClick={() => this.props.handleQuestionChange(false)}>{this.state.nextBtnTxt}</div>
      </div>
    )
  }
}