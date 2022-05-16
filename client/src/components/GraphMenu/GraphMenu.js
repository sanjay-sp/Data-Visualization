import React from "react";
import './GraphMenu.css'
import piechart from '../../public/piechart.png';
import bargraph from '../../public/bargraph.png';
import funnelgraph from '../../public/funnel1.png';
import Graph from "../Graphs/Graphs";

const GraphMenu = ({clickFunction}) => {
    return <div className="graphmenu">
        <Graph imgUrl={piechart} chartType="Pie Chart" clickFunction={clickFunction}/>
        <Graph imgUrl={bargraph} chartType="Bar Chart" clickFunction={clickFunction}/>
        <Graph imgUrl={funnelgraph} chartType="Funnel Chart" clickFunction={clickFunction}/>
    </div>
}

export default GraphMenu;