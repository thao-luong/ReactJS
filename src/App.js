import React from 'react';
import './App.css';
import '@gooddata/react-components/styles/css/main.css';
// import  KPI  from './Component/KPI.js'
// import Pivot from './Component/PivotTable.js'
// import TableNormal from './Component/Table'
// import BbChart from './Component/BubbleChart'
import AMColumnChart from './Component/AMTest'
 function App() {
   return(
    <div>
        {/* <KPI/>
        <Pivot/>
        <TableNormal/>
        <BbChart/> */}
        <AMColumnChart/>
    </div> 
   )
 }
 export default App;
 

