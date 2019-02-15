import React from "react";
import data from "../Contact.json";
import "./People.css";

class People extends React.Component{
    //Also maybe add a picture for each person
    render(){
        const people = data.people.map(e => {
            return (
                <div className="person">
                    <h3>{e.name}</h3>
                    <h4>{e.title}</h4>
                    <h4>{e.landline}</h4>
                    <h4>{e.mobile}</h4>
                    <h4>{e.email}</h4>
                </div>
            );
        });

        return (
            <div className="peopleGrid" id="ihmiset">
                {people}
            </div>
        );
    }
}

export default People;