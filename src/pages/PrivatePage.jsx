import React, { Component } from 'react';


import LoginBar from '../components/LoginBar'
import TopBar from '../components/TopBar'
import NavBar from '../components/NavBar'

import SearchButton from '../components/SearchButton'
import SectionContent from '../components/SectionContent'
import Footer from '../components/Footer'
import     {get_articles} from '../redux/actionMethodes/articlesActionMethods'
import { connect } from 'react-redux';

class App extends Component {
   
    constructor(props) {
        super(props);
        this.state = {user: {
            username:'',
            password:'',
            firstname:'',
            lastname:'',
            dob:'',
            email:'',
            about:'',

        }};
      }
    componentDidMount() {
       
        if (this.props.articles.length <= 0)
            this.props.get_articles()
    }
  render() {

  return (
    <div className="App">
      <LoginBar />
      <TopBar />
      <NavBar />
      <SearchButton />
      <section id="profil">


<article>
    <h1 style={{fontSize: 'xx-large'}}>Mein Bereich</h1>
    <h2>Persönliche Daten</h2>

    <div class="profilbild">
        <img id="profilbild" src="images/profilbild.png"/>
    </div>

    <form id="Nutzerdaten">

        <label for="benutzername"></label>
        <input type="text" id="Benutzername" placeholder="Benutzername"/><br></br>
        <label for="passwd"></label>
        <input type="password" id="passwd" placeholder="Passwort" size="20" maxlength="15" required/><br></br>
        <label for="Vorname"></label>
        <input type="text" id="Vorname" placeholder="Vorname"/><br></br>
        <label for="Nachname"></label>
        <input type="text" id="Nachname" placeholder="Nachname"/><br></br>
        <label for="Geburtsdatum"></label>
        <input type="text" id="Geburtsdatum" placeholder="Geburtsdatum"/><br></br>
        <label for="E-Mail"></label>
        <input type="text" id="E-Mail" placeholder="E-Mail"/><br></br>
        <label for="Übermich"></label><br></br>
        <textarea id="text" name="Übermich" placeholder="Über Mich" cols="30" rows="5"></textarea>

    </form>

    <h2>Favoriten</h2>

    <h2>Eigene Beiträge</h2>

</article>


<aside>
    <h3>Top Beiträge</h3>
    <div id="top">

    {this.props.articles.map((x, i) => <p key={i}><a href="*">{x.name?x.name:""}</a></p>
                        )}
        {/* <p><a href="#">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua.</a></p>
        <p><a href="#">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua.</a></p>
        <p><a href="#">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua.</a></p>
        <p><a href="#">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua.</a></p>
            <p><a href="#">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua.</a></p>
            <p><a href="#">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua.</a></p> */}

    </div>
</aside>
</section>

      <Footer />

    </div>
  );
}
}
const mapStateToProps = state => {
    console.log(state);
    return state
}

export default connect(mapStateToProps,{
    get_articles

})(App);
