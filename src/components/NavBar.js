import React, { Component } from "react";
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class NavBar extends Component {

    render() {
        return(
            <div>
                 <header>
        <h1>Cakes&amp;Cookies</h1>
    </header>
    <nav className="nav">
        <Link class="active" to={'/'}>Home</Link>
        {this.props.user?<Link to={'/profile'}>Profil</Link>
:<></>}
        
        <a href="*">Kategorien</a>
        <a href="*">Galerie</a>
       
        <Link to={'/forum'}>Forum</Link>
        <a href="*">FAQ</a>
        <a href="*">Kontakt</a>
        <a href="*">Über Uns</a>
        
    </nav>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return state
}

export default connect(mapStateToProps)(NavBar);
