import React from 'react'

export class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }
  }
  render () {
    return (
      <div className="loginWrapper">
        <input type="text" placeholder={ this.props.userPlaceholder } value={this.state.username} />
        <input type="text" placeholder={ this.props.pwPlaceholder } value={this.state.password} />
        <div onClick={this.props.handleLogin} className="button">Submit</div>
      </div>
    )
  }
}
