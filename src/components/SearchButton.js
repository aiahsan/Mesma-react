import React, { Component } from "react";


class SearchButton extends Component {

    render() {
        return(
            <div>
           <form id="suchfeld">
        <label htmlFor="suchen"></label>
        <input type="text" id="suchen" placeholder="Suchbegriff" />
    </form>
            </div>
        )
    }
}

export default SearchButton