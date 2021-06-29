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
import { get_articles, add_article,update_article } from '../redux/actionMethodes/articlesActionMethods'
import {withRouter} from 'react-router-dom'
const DisplayingErrorMessagesSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    // author: Yup.string().required('Required'),
});


class App extends Component {

    constructor(props)
    {
        super(props);

    }
    componentDidMount() {
            console.log(this.props.location)
        if (this.props.articles.length <= 0)
            this.props.get_articles()
    }

    postData = async (datapost) => {
        this.props.update_article(datapost);



    }
    render() {

        const user = this.props.user;


        return (
            <div className="App">
                <LoginBar />
                <TopBar />
                <NavBar />
                <SearchButton />


                <section id="beitragschreiben">


                    <article>
                        <Formik
                            initialValues={{
                                name: this.props.location&&this.props.location.state&&this.props.location.state.user&&this.props.location.state.user.name?this.props.location.state.user.name:"",
                                description:this.props.location&&this.props.location.state&&this.props.location.state.user&&this.props.location.state.user.description?this.props.location.state.user.description:"",
                                _id:this.props.location&&this.props.location.state&&this.props.location.state.user&&this.props.location.state.user._id?this.props.location.state.user._id:"",
                                author:this.props.location&&this.props.location.state&&this.props.location.state.user&&this.props.location.state.user.author?this.props.location.state.user.author:"",
                            }}
                            validationSchema={DisplayingErrorMessagesSchema}
                            onSubmit={async (values, { setSubmitting }) => {
                                await this.postData(values)
                            }}
                        >
                            {({ errors, touched, handleChange, handleBlur, values, handleSubmit, setFieldValue, getFieldProps,initialValues }) => {
                                return <div id="Beitrag">
                                    <label for="Thema">Thema</label>
                                    <input type="text" id="thema"  {...getFieldProps("name")} placeholder="Thema" /><br></br>
                                    {touched.name && errors.name && <p style={{ color: 'red', marginTop: 10 }}>{errors.name}</p>}

                                    <label for="Text">Text</label>
                                    <textarea cols="100" {...getFieldProps("description")} rows="30" id="text" placeholder="Text hier eingeben"></textarea><br></br>
                                    {touched.description && errors.description && <p style={{ color: 'red', marginTop: 10 }}>{errors.description}</p>}

                                    <button type="button" onClick={handleSubmit}>Beitrag absenden</button>
                                    <button type="reset">Eingaben zurücksetzen</button>

                                </div>

                            }}
                        </Formik>


                    </article>


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
    console.log(state);
    return state
}

export default withRouter(connect(mapStateToProps, {
    get_articles,
    add_article,
    update_article

})(App));

