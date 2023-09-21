import { useState } from "react";
/**
 * NewColorForm: Creates and handles the form for making a new box
 * 
 * Props: 
 * -onSubmit: function for passing the form data up to the parent
 * 
 * States:
 * -message: current value typed into the form
 * 
 * App --> ColorList --> NewColorForm
 */

function NewColorForm({list}){
    //data and handlChange() modified from example
    const [formData, setFormData] = useState({val:"#000000"});
    //keeps input val props up to date
    const handleChange = evt => {
        const [ name, value ] = [evt.target.id, evt.target.value];
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };

    
  function onSubmit(e){
    e.preventDefault();
    console.log(formData)
    console.log("Everything is working so far")
    
  }

    return(
        <form onSubmit={onSubmit}>
            <label htmlFor="name">Color Name</label>
            <input required type="text" id="name" onChange={handleChange}></input><br/>
            <label htmlFor="val">Hex code</label>
            <input required type="color" id="val" onChange={handleChange}></input><br/>
            <button>Create To Do</button>
        </form>
    )
}

export default NewColorForm;