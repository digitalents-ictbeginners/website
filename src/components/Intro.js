import React from "react";
import "./Intro.css";

class Intro extends React.Component {
    render(){
        return (
            <div className="introBlock">
                <div className="introInner">
                    <h2>Keitä olemme</h2>
                    <p>Digitalents-ICT-työpajalla alle 29 vuotiaat nuoret pääsevät 
                        kokeilemaan ohjelmointia ja tekemään harjoitus- ja tilaustöitä 
                        aiheen parissa. Nuorella ei tarvitse olla aikaisempaa osaamista, 
                        ja opetussuunnitelma räätälöidään osallistujan toiveiden 
                        ja mielenkiinnon mukaan. Opiskelu on monimuotoista, ja tapahtuu 
                        niin itsenäisesti kuin ryhmäprojektien parissa modernisti oppien.</p>
                    <h4>Oletko alle 29-vuotias ja kiinnostunut alasta?</h4>
                    <h3>Tule Mukaan!</h3>
                </div>
            </div>
        );
    }
}



export default Intro;