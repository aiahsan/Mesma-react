import React, { Component } from 'react';

import { connect } from 'react-redux';

import LoginBar from '../components/LoginBar'
import TopBar from '../components/TopBar'
import NavBar from '../components/NavBar'
import MainContent from '../components/MainContent'
import SearchButton from '../components/SearchButton'
import SectionContent from '../components/SectionContent'
import Footer from '../components/Footer'


class App extends Component {

  
  render() {
    const user = this.props.user;
   

  return (
    <div className="App">
      <LoginBar />
      <TopBar />
      <NavBar />
      <SearchButton />
      <MainContent />      <SectionContent />
      <Footer />

    </div>
  );
}
}
const mapStateToProps = state => {
    console.log(state);
    return state
}

export default connect(mapStateToProps)(App);
