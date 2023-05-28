import React from "react";
import './Body.css'

const Body=({image,boxmodel})=>{
    return (
        <div className="pa4 black-80 center">
          <img  src={image} alt="" id="picture" style={{width:'500px',height:'auto'}}/>
          <div className="bounding-box" style={{top:boxmodel.top_row, right:boxmodel.right_col, bottom:boxmodel.bottom_row,left:boxmodel.left_col}}>  </div>
        </div>
    )
}

export default Body;
