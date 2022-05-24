import React, { useRef } from "react";
import './Graph.css'

const Graph = ({imgUrl, chartType, clickFunction, dragEnd}) => {
    const dragElem = useRef();

    const handleDrag = (e) => {
        console.log(e.target.name);
    }



    return <div className="graph">
        <div className="description">
        <img src={imgUrl} name={chartType} onDragStart={handleDrag} draggable="true"/>
        <p>{chartType}</p>
        </div>
        <button onClick={() => clickFunction(chartType)}>Add</button>
    </div>
}

export default Graph;