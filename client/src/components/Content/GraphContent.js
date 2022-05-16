import React from "react";
import Chart from "../Chart";

const GraphContent = ({name, deleteGraph, panelStatus}) => {
    const month = ["Jan","Feb", "March","April", "May"]
    return <div>
        <h1>{panelStatus}</h1>
        <button onClick={()=>deleteGraph(name)}>Delete</button>
        <Chart chartType={panelStatus} months={month}/>
    </div>
}

export default GraphContent;