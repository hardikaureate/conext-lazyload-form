import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
// import Myform from './Myform';
// import CompA from './CompA';
// import Header from './Header';


const Headers = React.lazy(() => import('./Header'));
const CompAA = React.lazy(() => import('./CompA'));
const Myformm = React.lazy(() => import('./Myform'));

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header> */}
      <Suspense fallback={<div>Loading................</div>}>
        <Headers/>
        <Myformm />
        <CompAA />
      </Suspense>
    </div>
  );
}

export default App;