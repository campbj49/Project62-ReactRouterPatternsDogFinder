import { useState } from "react";
import { useNavigate} from "react-router-dom"
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
    const navigate = useNavigate();
    function anchorSub(e){
      navigate(e.target.id);
    }
    //construct an HTML element out of the passed color list
    let HTMLList =[];
    for(let color of list){
        HTMLList.push(<p key={color.name} onClick={anchorSub} id={"/colors/"+color.name}>{color.name}</p>)
    }
    return (
        <div className="ColorList">
            <h1>Welcome to the color factory</h1>
            <h2 onClick={anchorSub} id="/colors/new">Add a color</h2>
            {HTMLList}
        </div>
    );
}

export default ColorList;
