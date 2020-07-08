import React, { Component } from "react";

export default class SignInPage extends Component {
  
  state = {
    username: "",
    password: ""
  }
  
  //Add this function & its invokation to sign in page
  signInForm = () => {
    return <form className="sign-in-form" onSubmit={this.handleSubmit}>
     <input type="text" placeholder="Username"/>
     <input type="password" placeholder="Password"/>
     <input type="submit" value="Sign-in"/>
   </form>
   }
   
   handleSubmit = (event) => {
     event.preventDefault()
     this.setState( {
       username: event.target[0].value,
       password: event.target[1].value
     } , () => console.log(this.state))
   
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
