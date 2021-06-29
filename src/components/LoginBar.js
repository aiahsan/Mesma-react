import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn,logout } from '../redux/actionMethodes/AuthenticationActions'
// import * as authenticationActions from '../redux/actionMethodes/AuthenticationActions'
import { bindActionCreators } from "redux";

import {Link} from 'react-router-dom'

class LoginBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {

        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    handleSubmit(e) {

        e.preventDefault();
        const { username, password } = this.state;
        // const {authenticateUserAction} = this.props;

        this.props.signIn({
            password, email: username
        })
        console.log(this.props)
        // authenticateUserAction(username, password);
        console.log("Pushed submit")
    }

    render() {
        const user = this.props.user;

        return (
            <div>
                <section id="loginbar">
                    <div className="login-container">
                        {user ? <button type="button" onClick={()=> this.props.logout()} >Logout</button> : <><form action="/action_page.php">
                            <input type="text" placeholder="Benutzername" name='username' onChange={this.handleChange} />
                            <input type="password" placeholder="Passwort" name='password' onChange={this.handleChange} />
                            <button type="submit" onClick={this.handleSubmit} >Login</button>
                        </form>
                            <li id="registrieren"><Link to="register">Noch kein Mitglied? Jetzt registrieren!</Link></li>
                        </>
                        }


                    </div>
                </section>
            </div>
        )
    }
}

// const mapDispatchToProps = dispatch => bindActionCreators({
//     authenticateUserAction: authenticationActions.authenticateUser
// }, dispatch)

const mapStateToProps = state => {
    console.log(state);
    return state
}

const ConnectedLoginBar = connect(mapStateToProps, {
    signIn,
    logout
})(LoginBar)

export default ConnectedLoginBar
