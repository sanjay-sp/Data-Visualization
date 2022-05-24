import './App.css';

import Panel from './components/Panels/Panel';
import GraphMenu from './components/GraphMenu/GraphMenu';
import { useEffect, useRef, useState } from 'react';

function App() {
 
  const [panel1, setPanel1] = useState("empty");
  const [panel2, setPanel2] = useState("empty");
  const [data, setData] = useState([]);


  const panelCheckHandler = (chartType) => {
    if (panel1 == "empty") {
      getData();
      setPanel1(chartType)
    } else if(panel1 !== "empty" && panel2 =="empty") {
      getData();
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

  const handleDragEnd = (name) => {

    console.log(name);
}

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropogation();
    console.log('Dragover detected');
  }

 const getData = () => {
       fetch('http://localhost:5000/getData').then((data) => {
      return data.json();
    }).then((res)=>{
      setData(JSON.stringify(res));
    })
 }
  return (
    <div className="App">
      <Panel 
        panelStatus={panel1} 
        name="panel1" 
        deleteGraph={deleteGraph}
        clickFunction={panelCheckHandler}
        onDrop={handleDragEnd}/>
      <Panel panelStatus={panel2} 
            name="panel2" 
            deleteGraph={deleteGraph} 
            clickFunction={panelCheckHandler}
            dbData={data}
            onDragOver={handleDragOver}
            onDragEnter={handleDragOver}
            onDrop={()=>handleDragEnd("panel2")}/>
      <GraphMenu clickFunction={panelCheckHandler} dragEnd={handleDragEnd}/>
      {/* <FunnelChart /> */}
    </div>
  );
}

export default App;
