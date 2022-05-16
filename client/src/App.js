import './App.css';

import Panel from './components/Panels/Panel';
import GraphMenu from './components/GraphMenu/GraphMenu';
import { useEffect, useState } from 'react';

function App() {
 
  const [panel1, setPanel1] = useState("empty");
  const [panel2, setPanel2] = useState("empty");
  const [data, setData] = useState('');

  const panelCheckHandler = (chartType) => {
    if (panel1 == "empty") {
      setPanel1(chartType);
    } else if(panel1 !== "empty" && panel2 =="empty") {
      setPanel2(chartType);
    } else {
      alert(`Both panels are full. Please delete a chart to add`);
    }
  }

  const deleteGraph = (name)=> {
    if (name=="panel1") {
      setPanel1("empty")
    } else {
      setPanel2("empty")
    }
  }

  useEffect(async ()=>{
    let res = await fetch('http://localhost:5000/getData')
    console.log(res.json());
  });
  return (
    <div className="App">
      <Panel 
        panelStatus={panel1} 
        name="panel1" 
        deleteGraph={deleteGraph}
        clickFunction={panelCheckHandler}/>
      <Panel panelStatus={panel2} name="panel2" deleteGraph={deleteGraph} clickFunction={panelCheckHandler}/>
      <GraphMenu clickFunction={panelCheckHandler}/>
      {/* <FunnelChart /> */}
    </div>
  );
}

export default App;
