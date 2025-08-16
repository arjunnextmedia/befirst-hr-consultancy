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

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // loader lasts until progress bar finishes
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="App" id="scrool">
      <RouteLoaderWrapper>
      <AllRoute />
      </RouteLoaderWrapper>
      
      <ToastContainer />
      <HRChatbot />
      <Scrollbar />
    </div>
  );
};

export default App;
