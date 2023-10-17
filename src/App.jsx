/* eslint-disable no-mixed-operators */

import Lottie from 'lottie-react'
import four2 from './assest/email.json';
import { useRef } from 'react';
import './App.css';

function App() {
  const notFoundRef = useRef()
  return (
    <>
      <div className="fourHeader">
        <div className='four'>
      <div className='pageTitle'>The Page not found. Click here to go to <a href='/' className='fourLink'>Home</a></div>
        <Lottie 
        lottieRef={notFoundRef} animationData={four2}
        />
      </div>
      </div>
    </>
  );
}

export default App;
