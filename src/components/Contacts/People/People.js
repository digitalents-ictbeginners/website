import React from "react";
import "./People.css";
import Person from "./Person";

class People extends React.Component{
    
    render(){
        const data = this.props.data;

        //Map from data into Person components
        const people = data.peoplecards.map(e => {
            return (
                <Person key={e.id} data={e} />
            );
        });
        //Render the layout with the Person elements
        return (
            <div className="people">
                <div id={data.id} className="peopleAnchor" />
                <h2 className="peopleTitle">{data.title}</h2>
                <div className="peopleGrid">
                    {people}
                </div>
            </div>
        );
    }
}

export default People;