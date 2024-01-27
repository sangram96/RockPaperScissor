import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import ShowScreen from "./components/ShowScreen";
import MyContext from "./context/MyContext";
import { useState } from "react";
function App() {
  const [data, setData] = useState({
    score: 0,
    UserSelection: null,
    ComputerSelection: null,
  });
  const updataContext = (newData) => {
    setData(newData);
  }
  return (
    <MyContext.Provider
      value={{ data, updataContext }}
    >
      <div className="App">
        <Header />
      </div>
    </MyContext.Provider>
  );
}

export default App;
