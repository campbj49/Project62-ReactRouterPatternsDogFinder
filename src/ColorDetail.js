import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"

/** ColorDetails: displays list of links in the router
 * 
 * State:
 * -none
 * 
 * Props;
 * -color: color object from parent
 * 
 * App --> ColorDetails --> Item
 */
 function ColorDetails({color, list}) {
    const navigate = useNavigate();
    const {name} = useParams();
    if(name){
        for(let findColor of list){
            if(findColor.name === name) color = findColor;
        }
    }
    if(!color) navigate("/");
    else{
        console.log("why")
    return (
        <div className="color" id={color.name} style={{backgroundColor:color.name}}>
            <h1>
                This is {color.name}.
            </h1>
            <h2>
                Isn't it beautiful?
            </h2>
            <h2><a href="/colors">Go back</a></h2>
        </div>
    );}
}

export default ColorDetails;
