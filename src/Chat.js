import React from 'react'
import { subscribeToTimer,login,sendMessage,subscribeToMessage } from './api';
import {Input,Button,Paper} from '@material-ui/core'
import './App.css'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import 'bootstrap/dist/css/bootstrap.min.css';



function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

class Chat extends React.Component{
    state = {
        messages : [],
        message : ""
    };
    constructor(props) {
        super(props);
        login(this.props.user)
        subscribeToMessage((message)=>{
            //console.log(`Message received : ${message}`)
            this.setState({
                messages:[...this.state.messages,message]
            })
        })
        // subscribeToTimer(1000,(err, timestamp) => this.setState({ 
        //     timestamp 
        // }));
    }

    onEnterPress = (e)=>{
        if(e.key === "Enter"){
            this.sendMessage()
        }
    }

    sendMessage = () => {
        sendMessage(this.state.message)

        this.setState({
            message : ""
        })
    }

    changeMessage = (event) => {
        this.setState({
            message: event.target.value
        })
    }

    render(){
        const {user} = this.props
        return(
            <div>
                <Paper elevation={10} style={{padding:10}}>
                    {/* <p>
                    Your user is : {user}
                    </p>
                     {this.state.messages.map((message,index)=>{
                        return(
                            <p key={index}>
                            {`${message.user} : ${message.message}`}
                            </p>
                        )
                    }) }
                    { <Input 
                        value={this.state.message}
                        onChange={this.changeMessage}
                        placeholder="Your message ... " 
                        inputProps={{ 'aria-label': 'description' }} 
                        onKeyPress={this.onEnterPress}
                    /> }
                    { <Button onClick={this.sendMessage}>SEND</Button> } */}

                    

<React.Fragment>
      <CssBaseline />
      <ElevationScroll {...this.props}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6">Synopsis Chat</Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container>
      <div className="chatWindow">
        <ul className="chat" id="chatList">
          {this.state.messages.map((message,index) => (
            <div key={index}>
              {user === message.user ? (
                <li className="self">
                  <div className="msg">
                    <p>{message.user}</p>
                    <div className="message"> {message.message}</div>
                  </div>
                </li>
              ) : (
                <li className="other">
                  <div className="msg">
                    <p>{message.user}</p>
                   <div className="message"> {message.message} </div>
                  </div>
                </li>
              )}
            </div>
          ))}
        </ul>
        <div className="chatInputWrapper">
            <input
              className="textarea input"
              type="text"
              value={this.state.message}
                        onChange={this.changeMessage}
                        placeholder="Your message ... " 
                        onKeyPress={this.onEnterPress}
            />
        </div>
      </div>
      </Container>
    </React.Fragment>

 
      
                </Paper>
            </div>
        )
    }
}

export default Chat