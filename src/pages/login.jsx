import React, { Component } from 'react';

import { connect } from 'react-redux';

import LoginBar from '../components/LoginBar'
import TopBar from '../components/TopBar'
import NavBar from '../components/NavBar'
import MainContent from '../components/MainContent'
import SearchButton from '../components/SearchButton'
import SectionContent from '../components/SectionContent'
import Footer from '../components/Footer'
import * as Yup from 'yup';
import { Formik } from 'formik';
import { repository } from '../utiles/repository'
import {  signIn } from '../redux/actionMethodes/AuthenticationActions'

const DisplayingErrorMessagesSchema = Yup.object().shape({
    email: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
    // author: Yup.string().required('Required'),
});


class App extends Component {
   
    postData = async (datapost) => {
        console.log(datapost)
        const { data, status } = await repository.login(datapost).then(x => x).then(x => x)
        if (status == 201) {
            this.props.signIn({
                password:datapost.password , email: datapost.email
            })
            datapost.email = "";
            datapost.password = "";

        }
        alert(data.message)


    }
    render() {

        const user = this.props.user;


        return (
            <div className="App">
                <LoginBar />
                <TopBar />
                <NavBar />
                <SearchButton />


                <section id="Einloggen">


                <Formik
                            initialValues={{
                                email: '',
                                password: '',
                            }}
                            validationSchema={DisplayingErrorMessagesSchema}
                            onSubmit={async (values, { setSubmitting }) => {
                                await this.postData(values)
                            }}
                        >
                            {({ errors, touched, handleChange, handleBlur, values, handleSubmit, setFieldValue, getFieldProps }) => {


                                    return <div class="loginfenster">
                                    <h3>LogIn</h3>
                            
                                    <div id="Einloggen">
                            
                                        <label for="benutzername"></label>
                                        <input type="text"  {...getFieldProps("email")} placeholder="Benutzername" size="30" maxlength="15" required/><br></br>
                                        {touched.email && errors.email && <p style={{ color: 'red', marginTop: 10 }}>{errors.email}</p>}

                                        <label for="passwort"></label>
                                        <input type="password" {...getFieldProps("password")} placeholder="Passwort" size="30" maxlength="15" required/>
                                        {touched.password && errors.password && <p style={{ color: 'red', marginTop: 10 }}>{errors.password}</p>}

                                    </div>
                                    <li><a href="#">Passwort vergessen?</a></li>
                                    <br></br>
                                    <div id="Klick">
                            
                                        <label for="Einloggen"></label>
                                        <button type="button" onClick={handleSubmit}>Einloggen</button>
                            
                                    </div>
                                    
                                    <li><a href="#">Noch kein Mitglied? Jetzt registrieren!</a></li>
                            
                            
                            
                            
                                </div>
                            

                            }}
                        </Formik>



                    <aside>
                        <h3>Top Beiträge</h3>
                        <div id="top">
                            {this.props.articles.map((x, i) => <p key={i}><a href="*">{x.name ? x.name : ""}</a></p>
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
                </section> <Footer />

            </div>
        );
    }
}
const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, {
    signIn

})(App);
