import React, { Component } from "react";


class MainContent extends Component {

    render() {
        return(
            <div>
                 <main>
        <div className="hauptbild">
            <img id="hauptbild" src= "images/cookies.jpg" alt="Hauptbild" />
        </div>
        <article>
            <h3><a href="*">Allgemein</a></h3>

            <img id="allgemein" src="images/allgemein.jpg" alt="Allgemein" />

        </article>

        <article>
            <h3><a href="*">Was backe ich heute?</a></h3>
            <img id="forum" src="images/heute.jpg" alt="Heute" />
        </article>

        <article>
            <h3><a href="*">Muffins &amp; Cupcakes</a></h3>
            <img id="cupcake" src="images/cupcake.jpg" alt="Cupcake" />
           
        </article>

        <article>
            <h3><a href="*">Torten &amp; Kuchen</a></h3>
            <img id="torte" src="images/torte.jpg" alt="Torte" />
            
        </article>

        <article>
            <h3><a href="*">Buttercreme &amp; Co</a></h3>
            <img id="buttercreme" src="images/buttercreme.png" alt="Buttercreme" />
           
        </article>

        <article>
            <h3><a href="*">Herzhafte Rezepte</a></h3>
            <img id="herzhaft" src="images/herzhaft.jpg" alt="Herzhaft" />
            
        </article>

        <article>
            <h3><a href="*">Regeln &amp; Richtlinien</a></h3>
            <img id="regeln" src="images/regeln.jpg" alt="Regeln" />
           
        </article>

        <article>
            <h3><a href="*">Tipps &amp; Tricks</a></h3>
            <img id="tipps" src="images/tipps.png" alt="Tipps" />
           
        </article>
    </main>

            </div>
        )
    }
}

export default MainContent