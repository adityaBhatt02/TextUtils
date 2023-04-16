import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);
  let toggleMode = () => {
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(0 7 36)";
      showAlert("Dark mode enabled","success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled","success");
    }
  };

  let showAlert = (message,type) => {
    setalert({
      msg : message,
      type : type
    })

    setTimeout(() => {
     setalert(null);
    }, 1500);

  }
  return (
    <>
      <Navbar
        title="TextUtils"
        about="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert
        alert = {alert}
      />
      <div className="container my-3">
        <TextForm 
        heading="Enter the text to analyze below" 
        mode={mode}
        showAlert={showAlert} />
      </div>
      {/* <About/> */}
    
    </>
  );
}

export default App;
