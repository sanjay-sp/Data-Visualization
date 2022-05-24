import React, { useState } from "react";
import EmptyContent from "../Content/EmptyContent";
import GraphContent from "../Content/GraphContent";
import './Panel.css'

const Panel = ({panelStatus, name, deleteGraph, dbData}) => {
    document.addEventListener('dragend', (e) => {
        if (e.target.name!=='panel') {
            console.log('Panel at',e.target.name);
        }
        console.log({name})})
    return <div className="panel">
        {panelStatus!=="empty" ? <GraphContent name={name} 
            panelStatus={panelStatus}
            deleteGraph={deleteGraph}
            dbData={dbData}
        /> : <EmptyContent/> } 
        
    </div>
}

export default Panel;