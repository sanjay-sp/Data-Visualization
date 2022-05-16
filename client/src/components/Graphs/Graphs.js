import React from "react";
import './Graph.css'

const Graph = ({imgUrl, chartType, clickFunction}) => {
    return <div className="graph">
        <div className="description">
        <img src={imgUrl}/>
        <p>{chartType}</p>
        </div>
        <button onClick={() => clickFunction(chartType)}>Add</button>
    </div>
}

export default Graph;