import React from "react";
import "./People.css";

class People extends React.Component{
    
    render(){
        const people = this.props.data.people.peoplecards.map(e => {
            return (
                <div className="person">
                    <div className="personText">
                        <i className="fas fa-user fa-2x"></i>
                        <h3>{e.name}</h3>
                        <h4>{e.title}</h4>
                        <h4><i className="fas fa-phone"></i> {e.landline}</h4>
                        <h4><i className="fas fa-mobile-alt"></i> {e.mobile}</h4>
                        <h4>{e.email}</h4>
                    </div>
                </div>
            );
        });

        return (
            <div>
                <h2 className="peopleTitle">{this.props.data.people.title}</h2>
                <div className="peopleGrid" id="ihmiset">
                    {people}
                </div>
            </div>
        );
    }
}

export default People;