import { useState } from "react";
import { useParams } from "react-router-dom"
import DogDetails from "./DogDetails";

/** DogList: displays list of links in the router
 * 
 * State:
 * -none
 * 
 * Props;
 * -none
 * 
 * App --> DogList --> Item
 */
 function DogList({list}) {
    //construct an HTML element out of the passed dog list
    let HTMLList =[];
    for(let dog of list){
        HTMLList.push(<DogDetails dog={dog} key={dog.src}/>)
    }
    return (
        <div className="DogList">
            {HTMLList}
        </div>
    );
}

export default DogList;
