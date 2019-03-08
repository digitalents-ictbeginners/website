import React from "react";
import "./People.css";
import Person from "./Person";

class People extends React.Component{
    
    render(){
        const people = this.props.data.people.peoplecards.map(e => {
            return (
                <Person key={e.id} data={e} />
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