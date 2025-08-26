import React, { useState, useEffect } from 'react';
import AllRoute from '../router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../sass/style.scss';
import HRChatbot from '../../components/HR-chatbot';
import Scrollbar from '../../components/scrollbar';
import Loader from '../../components/Loader';
import '../../components/Loader/loader.css';
import RouteLoaderWrapper from '../../app/RouteLoaderWrapper';
import ConsentModal from '../../components/consentModal';

const App = () => {


  return (
    <div className="App" id="scrool">
      <RouteLoaderWrapper>
      <AllRoute />
      </RouteLoaderWrapper>
      
      <ToastContainer position="top-right" autoClose={3000}/>
      <HRChatbot />
      {/* <Scrollbar /> */}
      <ConsentModal/>
    </div>
  );
};

export default App;
