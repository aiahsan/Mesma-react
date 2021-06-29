import React, { Component } from "react";
import { get_users } from '../redux/actionMethodes/userActionmethod'
import { get_articles ,delete_article} from '../redux/actionMethodes/articlesActionMethods'
import { connect } from 'react-redux';
import { repository } from "../utiles/repository";
import {withRouter} from 'react-router-dom'
class SectionContent extends Component {

    constructor(props)
    {
        super(props);
    }
    componentDidMount() {
        if (this.props.users.length <= 0)
            this.props.get_users();
        if (this.props.articles.length <= 0)
            this.props.get_articles()
    }
    handleDelete = (id) => {
        if (window.confirm("Press a button!")) 
        {
            this.props.delete_article(id)
        } else {

        }
    }
    handleUpdate = (data) => {
        const { history } = this.props;

        history.push({
            pathname: '/update/forum',
            state: { user: data }
        });
        //   this.props.history.push("/update/forum",{user:id})
    }
    render() {
        return (
            <div>
                <section id="divided">

                    <article>
                        <h2>Neueste Beiträge</h2>

                        {this.props.articles.map((x, i) => <div>
                            <div> <p key={i}><a href="*">{x.name ? x.name : ""}</a></p></div>
                            <div style={{ marginLeft: 20 }}>
                                <button className="" onClick={() => this.handleDelete(x._id)}>Delete</button>
                                <button className="" onClick={() => this.handleUpdate(x)}>Update</button>
                            </div>
                        </div>
                        )}
                        {/* <p><a href="*">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore
        magna aliquyam erat, sed diam voluptua.</a></p>
                        <p><a href="*">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore
        magna aliquyam erat, sed diam voluptua.</a></p>
                        <p><a href="*">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore
        magna aliquyam erat, sed diam voluptua.</a></p>
                        <p><a href="*">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore
        magna aliquyam erat, sed diam voluptua.</a></p>
                        <p><a href="*">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore
        magna aliquyam erat, sed diam voluptua.</a></p>
                        <p><a href="*">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore
        magna aliquyam erat, sed diam voluptua.</a></p>
                        <p><a href="*">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore
        magna aliquyam erat, sed diam voluptua.</a></p>
                        <p><a href="*">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore
        magna aliquyam erat, sed diam voluptua.</a></p> */}
                    </article>
                    <aside>
                        <h2>Top Nutzer</h2>

                        {this.props.users.map((x, i) => <p key={i}>{i + 1}.<a href="*">{x.username ? x.username : ""}</a></p>
                        )}
                        {/* <p>2.<a href="*">Lorem ipsum dolor sit amet</a></p>
    <p>3.<a href="*">Lorem ipsum dolor sit amet</a></p>
    <p>4.<a href="*">Lorem ipsum dolor sit amet</a></p>
    <p>5.<a href="*">Lorem ipsum dolor sit amet</a></p>
    <p>6.<a href="*">Lorem ipsum dolor sit amet</a></p>
    <p>7.<a href="*">Lorem ipsum dolor sit amet</a></p>
    <p>8.<a href="*">Lorem ipsum dolor sit amet</a></p>
    <p>9.<a href="*">Lorem ipsum dolor sit amet</a></p>
    <p>10.<a href="*">Lorem ipsum dolor sit amet</a></p>
     */}
                    </aside>
                </section>

            </div>
        )
    }
}
const mapStateToProps = state => {
    return state
}

export default withRouter(connect(mapStateToProps, {
    get_users,
    get_articles,
    delete_article

})(SectionContent));


