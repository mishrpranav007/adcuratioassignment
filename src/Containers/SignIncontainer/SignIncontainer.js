import React ,{ Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';

import "./index.css";

const initialState = {
    email: "",
    password: "",
    emailError: "",
    passwordError: ""
};
class SignIncontainer extends Component{

   state = initialState;

    handleChange = event => {
        const isCheckbox = event.target.value === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox ? event.target.checked : event.target.value
        });
    };

    validate = () => {
        let emailError  = "";
        let passwordError = "";

        if(!this.state.email.includes("@")){
                emailError = "Enter valid email"
        }
        if(this.state.email === " ")
        {
            emailError = "Email field is empty"
        }
        if(this.state.password === " ")
        {
            passwordError = "Password field is empty"
        }
        if(this.state.password.length <= 8)
        {
            passwordError = "Passsword must be greater than 8 characters"
        }
        

        if(emailError)
        {
            this.setState({ emailError });
            return false;
        }

        if(passwordError)
        {
            this.setState({ passwordError });
            return false;
        }

        return true;

    };

    handleSubmit = event => {

        event.preventDefault();
        const isValid = this.validate();

        if(isValid){
            console.log(this.state);
            this.setState({ initialState });
            this.props.history.push("/dashboard");

        }
        
    };

      render(){
        return(
            <div className="background">
                <div className="authBox">
               <div className="leftBox">
                   <div className="bgGreen" />
                    <div className="imageAuth" />
               </div>
               <div className="rightBox">
                   <div className="box">
                       <div className="titleAuth">Login App</div>
                        <form onSubmit={this.handleSubmit}>
                        <div className="inputSBox">
                           <input 
                              className="inputS" 
                              name="email" 
                              placeholder="Email Id" 
                              value={this.state.email} 
                              onChange={this.handleChange}
                              />

                              <div style={{fontSize: 14,color: "red",marginLeft: "5px",marginTop:"5px"}}>
                                  {this.state.emailError}
                              </div>
                       </div>

                       <div className="inputSBox">
                           <input 
                             className="inputS" 
                             name="password"
                             placeholder="Password" 
                             value={this.state.password}
                             onChange={this.handleChange}
                             />

                             <div style={{fontSize: 14,color: "red",marginLeft: "5px",marginTop:"5px"}}>
                                  {this.state.passwordError}
                              </div>
                       </div>

                       <div className="contentBox">
                           <div className="checkBox">
                               <input type="checkbox" className="checkbox" />
                               <label className="checkboxLabel">Remember me</label>
                           </div>

                           <div className="text1">Forgot Password!</div>
                       </div>

                       <div className="btnAuth" onClick={this.handleSubmit}>Login</div>
                     </form>
                   </div>
               </div>
           </div>
            </div>

        );
      }
   
}

SignIncontainer.propTypes = {
    history: PropTypes.shape({
        push : PropTypes.func.isRequired
    }).isRequired
};
export default withRouter(SignIncontainer);