import React, { Component } from "react";

export default class SignInPage extends Component {
  
  state = {
    username: "",
    password: ""
  }
  
  signInForm = () => {
    return <form className="sign-in-form" onSubmit={this.handleSubmit}>
     <input onChange={this.handleUsernameChange} type="text" placeholder="Username"/>
     <input onChange={this.handlePasswordChange} type="password" placeholder="Password"/>
     <input type="submit" value="Sign-in"/>
   </form>
   }

   handleUsernameChange = (event) => {
    this.setState({ username: event.target.value })
   };

   handlePasswordChange = (event) => {
    this.setState({ password: event.target.value })
   };

   handleSubmit = (event) => {
    event.preventDefault()
    this.sendSignInDataToRails() 
  }

 //----------- (POST) Send SignIn Data from state To Rails -----------//
   sendSignInDataToRails = () => {
    let configObj = {
     method: "POST",
     headers: {
           "Content-Type": "application/json",
           "Accept": "application/json"
     },
     body: JSON.stringify(this.state) //We send the state as the body of the configObj
    }
    
    return fetch("http://localhost:3000/api/v1/sign-in", configObj)
    .then(resp => resp.json() )
    .then(json => this.props.signIn(json.username))
    .catch((error) => alert("Incorrect details - Please try again"));
  }
  
  render() {
    return (
      <div className="sign-in-page">
        This is the Sign in page - add a form here
         {/* Add below code to sign-in page */}
      <div> {this.signInForm()}  </div>
      </div>
    );
  }
}
