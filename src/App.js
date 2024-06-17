import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
// import Alert from './components/Alert';
import { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// }from "react-router-dom";


let name="niharika";
function App() {
  const[mode,setMode]=useState("light");
  // const[alert,setAlert]=useState(null);
  // const showAlert=(message,type)=>{
  //   setAlert({
  //     msg:message,
  //     type:type
  //   })
  // }
  const toggleMode=()=>{ 
    if(mode==='light'){ 
      setMode('dark')
      document.body.style.backgroundColor="grey";
      document.title='dark mode';
      // showAlert("Dark mode has been enabled","primary");
    }else{
      setMode('light')
      document.body.style.backgroundColor="white";
      document.title='light mode';
      // showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="Text Utilities" aboutText="About US" mode={mode} toggleMode={toggleMode}/>
    {/* <Alert alert={alert}/> */}
    <div classNameName="container">
      
        {/* <Route path='/about'>
        <About/>
        </Route> */}
        {/* <Routes>
        <Route path='/'>
        <TextForm heading="Enter the text to analyze" mode={mode}></TextForm>
        </Route> */}
        {/* <Routes>
            <Route exact path='/about' element={<About />} />
            <Route exact path='/' element={<TextForm heading="Enter the text to analyze" mode={mode} />} />

        </Routes> */}
    {/* <About></About> */}
    <TextForm heading="Enter the text to analyze" mode={mode}/>
    </div>
    {/* </Router> */}
    </>
  );
}
export default App;
