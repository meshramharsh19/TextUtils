
import { useState } from 'react';
import './App.css'; 
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alerts from './components/Alerts';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom"



function App() {
  const [Mode,setMode] = useState('light'); //wather dark mode is enable or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1300);
  }
  const toggleMode=()=>{
    if(Mode === 'light'){
    setMode ('dark');
    document.body.style.backgroundColor = "rgb(24 47 58)";
    showAlert("Dark mode has been Enabled", "success")
    document.title = 'TextUtils - Dark Mode'
  } 
  else {
    setMode ('light');
    document.body.style.backgroundColor = "white"
    showAlert("Light mode has been Enabled", "success")
    document.title = 'TextUtils - Light Mode'
  }
  }

  return (
    <>
    <Router>
      <Navbar
        title="TextUtils2"
        aboutText="TextAbouts"
        mode={Mode}
        toggleMode={toggleMode}
      />
      <alert alert={alert} />
      <div className="container my-4" mode={Mode}>
        <Routes>
          <Route exact path="/about" element={<About />}></Route>
          <Route
            exact path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter Text to analyze "
                mode={Mode}
              />
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  </>
  );
}

export default App;
