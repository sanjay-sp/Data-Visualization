import React, { useRef } from "react";
import CanvasJSReact from "./canvasjs.react";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const FunnelChart = () => {
    var dataPoint;
		var total;
		const options = {
			animationEnabled: true,
			title:{
				text: "Sales Analysis"
			},
			data: [{
				type: "funnel",
				// toolTipContent: "<b>{label}</b>: {y} <b>({percentage}%)</b>",
				indexLabelPlacement: "inside",
				// indexLabel: "{label} ({percentage}%)",
				dataPoints: [
					{ y: 1400, label: "Prospects" },
					{ y: 1212, label: "Qualified Prospects" },
					{ y: 1080, label: "Proposals" },
					{ y: 665,  label: "Negotiation" },
					{ y: 578, label: "Final Sales" }
				]
			}]
		}
		// calculate percentage
		dataPoint = options.data[0].dataPoints;
		total = dataPoint[0].y;
		for(var i = 0; i < dataPoint.length; i++) {
			if(i == 0) {
				options.data[0].dataPoints[i].percentage = 100;
			} else {
				options.data[0].dataPoints[i].percentage = ((dataPoint[i].y / total) * 100).toFixed(2);
			}
		}
    return <div>
        <CanvasJSChart options = {options}
					//  useRef={ref => chart = ref}
                    // ref={chart}

				/>
				{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
			
    </div>
}

export default FunnelChart;