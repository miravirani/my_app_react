import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import DownloadFile from './Component/downloadFile';
import { socketContext, socket } from './Component/Context/socket';
import ButtonTask from './Component/buttonTask';

function App() {

  return (
    <>
      {/* <Navigations/> */}
      {/* <UseRef/> */}
      {/* <ButtonTask/> */}
      <socketContext.Provider value={socket}>
        {/* <DownloadFile /> */}
        <ButtonTask/>
      </socketContext.Provider>
    </>
  );
}


export default App;
