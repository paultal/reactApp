import React from 'react';
//import logo from './logo.svg';
import {Button,TextField} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import logo from './logo2.png'; // with import


class Login extends React.Component{
  state = {
    user : ""
  }
  

  handleUserChange = (event) => {
    this.setState({
      user:event.target.value
    })
  }

  onEnterPress = (e)=>{
    if(e.key === "Enter"){
      this.props.login(this.state.user)
        }
}

  render(){
    return(
     <center>
        <div>
          <br></br>
          <img src={logo} height="15%" width="15%"></img>
        <br></br>
        <br></br>
        <br></br>
        <TextField
          variant="filled"
         // className={classes.margin}
          id="input-with-icon-textfield"
          label="Your Name"
          value={this.state.user}
          onChange={this.handleUserChange}
          onKeyPress={this.onEnterPress}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <br></br>
        <Button variant="contained" color="primary" onClick={()=>{this.props.login(this.state.user)}}>
          Login
        </Button>
      </div>
     </center>
    )
  }
}

export default Login;
