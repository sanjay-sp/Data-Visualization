import React, { useState } from "react";
import EmptyContent from "../Content/EmptyContent";
import GraphContent from "../Content/GraphContent";
import './Panel.css'

const Panel = ({panelStatus, name, deleteGraph, clickFunction}) => {

    return <div className="panel" onDrop={()=>clickFunction(panelStatus)}>
        {panelStatus=="empty" ? <EmptyContent/> : 
        <GraphContent name={name} 
            panelStatus={panelStatus}
            deleteGraph={deleteGraph}
        />}
    </div>
}

export default Panel;