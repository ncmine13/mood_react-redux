import React from 'react'
import ReactDOM from 'react-dom'
import { Header } from './components/partials/HeaderComponent'
import { Footer } from './components/partials/FooterComponent'
import { Login } from './components/LoginComponent'
import { Questionnaire } from './components/questions/QuestionnaireComponent'


class Main extends React.Component {
  constructor(props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
    this.state = {
      loggedIn: false
    }
  }
  handleLogin (e) {
    e.preventDefault()
    this.setState({
      loggedIn: true
    })
  }
  render () {
    const loggedIn = this.state.loggedIn
    return (
      <div>
        <Header headerText="Happiness begins here <3"/>
        { loggedIn ? <Questionnaire title="Questions:"/> : <Login handleLogin={ this.handleLogin } userPlaceholder="username" pwPlaceholder="password"/> }
        <Footer footerText="2018 NaomiWorks"/>
      </div>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);