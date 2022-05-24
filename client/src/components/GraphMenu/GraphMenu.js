import React from "react";
import './GraphMenu.css'
import piechart from '../../public/piechart.png';
import bargraph from '../../public/bargraph.png';
import funnelgraph from '../../public/funnel1.png';
import Graph from "../Graphs/Graphs";

const GraphMenu = ({clickFunction, dragEnd}) => {
    return <div className="graphmenu">
        <Graph imgUrl={piechart} chartType="Pie Chart" clickFunction={clickFunction} dragEnd={dragEnd}/>
        <Graph imgUrl={bargraph} chartType="Bar Chart" clickFunction={clickFunction} dragEnd={dragEnd}/>
        <Graph imgUrl={funnelgraph} chartType="Funnel Chart" clickFunction={clickFunction} dragEnd={dragEnd}/>
    </div>
}

export default GraphMenu;