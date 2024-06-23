import React, { useState } from 'react'
import './App.css'
import { 
  Button
} from "@material-tailwind/react";

import Login from './components/phase-one/login';
import Register from './components/phase-one/register';
import Forgotpass from './components/phase-one/forgotpass';

function App() {
  const [ islopen, setLopen ] = useState(false);
  const [ isropen, setRopen ] = useState(false);
  const [ isfpassopen, setfpassOpen ] = useState(false);

  const toggleloginPopup = () =>{
    setLopen(!islopen);
  };

  const toggleregisterPopup = () => {
    setRopen(!isropen);
  };

  const toggleforgotpass = () => {
    setfpassOpen(!isfpassopen);
  }
  return (
    <>
      <div>
        <Button className='mr-2' onClick={toggleloginPopup}>Login</Button>
        <Button className='ml-5' onClick={toggleregisterPopup}>Register</Button>
        
        {islopen && (
            <Login closePopup={toggleloginPopup} openrPopup={toggleregisterPopup}  openfPopup={toggleforgotpass}/>
        )}

        {isropen && (
            <Register closePopup={toggleregisterPopup} openPopup={toggleloginPopup}/>
        )}

        {isfpassopen && (
            <Forgotpass closePopup={toggleforgotpass} openPopup={toggleloginPopup} />
        )}
        
      </div>
    </>
  )
}

export default App
