import React from "react";
import data from "../Business.json";
import TextBlock from "../components/TextBlock";

class Business extends React.Component {
    render(){
        const textBlocks = data.content.map(e => {
            return <TextBlock data={e}/>
          });
        return (
            <div>
                {textBlocks}
            </div>
        );
    }
}

export default Business;