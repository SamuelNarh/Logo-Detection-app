import React from "react";
import './Input.css'

const Input=({onInputChange,onSubmit})=>{
    return (
        <div className="pa4 black-80">
            <div className="measure center">
             <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" onChange={onInputChange}/>
             <button onClick={onSubmit} >DETECT</button>
            </div>
        </div>
    )
}

export default Input;
