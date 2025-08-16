import React from 'react';
import AllRoute from '../router'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../sass/style.scss';
import HRChatbot from '../../components/HR-chatbot';
import Scrollbar from '../../components/scrollbar';


const App = () => { 

  return (
    <div className="App" id='scrool'>
          <AllRoute/>
          <ToastContainer/>
<HRChatbot />
            <Scrollbar/>

    </div>
  );
}

export default App;
