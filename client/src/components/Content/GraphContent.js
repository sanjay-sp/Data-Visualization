import React from "react";
import Chart from "../Chart";

const GraphContent = ({name, deleteGraph, panelStatus, dbData}) => {
    const month = ["Jan","Feb", "March","April", "May"]
    console.log(dbData);
    console.log(panelStatus);
    return <div>
        <h1>{panelStatus}</h1>
        <button onClick={()=>deleteGraph(name)}>Delete</button>
        <Chart chartType={panelStatus} months={month} dbData={dbData}/>
    </div>
}

export default GraphContent;