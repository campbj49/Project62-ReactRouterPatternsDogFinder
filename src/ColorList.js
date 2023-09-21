import { useState } from "react";
import { useParams } from "react-router-dom"
import ColorDetails from "./ColorDetail";

/** ColorList: displays list of links in the router
 * 
 * State:
 * -none
 * 
 * Props;
 * -none
 * 
 * App --> ColorList --> Item
 */
 function ColorList({list}) {
    //construct an HTML element out of the passed color list
    let HTMLList =[];
    for(let color of list){
        HTMLList.push(<p key={color.name}><a href={"/colors/"+color.name}>{color.name}</a></p>)
    }
    return (
        <div className="ColorList">
            <h1>Welcome to the color factory</h1>
            <h2><a href="/colors/new">Add a color</a></h2>
            {HTMLList}
        </div>
    );
}

export default ColorList;
