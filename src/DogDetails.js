import { useState } from "react";
import { useParams } from "react-router-dom"

/** DogDetails: displays list of links in the router
 * 
 * State:
 * -none
 * 
 * Props;
 * -dog: dog object from parent
 * 
 * App --> DogDetails --> Item
 */
 function DogDetails({dog, list}) {
    const {name} = useParams();
    if(name){
        for(let findDog of list){
            if(findDog.src === name) dog = findDog;
        }
    }
    
    let facts = []
    for(let fact of dog.facts)
        facts.push(<li>{fact}</li>)
    return (
        <div className="dog" id={dog.src}>
            <h1>
                <a href={"/dogs/"+dog.src}>Name: {dog.name}</a>
            </h1>
            <h2>
                Age: {dog.age}
            </h2>
            <ul>
                {facts}
            </ul>
        </div>
    );
}

export default DogDetails;
