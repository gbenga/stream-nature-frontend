import React, { Component } from "react";

export default class Homepage extends Component {
  //Add this to sign in component
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
     username: event.target.value[0],
     password: event.target.value[1]
   } , () => console.log(this.state))
 
 }

  render() {
    return (
      <div className="homepage"> 
      <h2>Hello, [insert name of user here] - how's it going?</h2>
      {/* Add below code to sign-in page */}
      <div> {this.signInForm()}  </div>
      </div>
    );
  }
}

