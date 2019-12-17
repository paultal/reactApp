import React from 'react';
//import logo from './logo.svg';
import Login from './Login'
import Chat from './Chat'

class App extends React.Component{
  state = {
    user : null
  }

  login = (user) => {
    this.setState({
      user:user
    })
  }

  render(){
    return(
      <div>
        {this.state.user === null && (
          <Login login={this.login}/>
        ) || (
          <Chat user={this.state.user}/>
        )}
      </div>
    )
  }
}

export default App;
