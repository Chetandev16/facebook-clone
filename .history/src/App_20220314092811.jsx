import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Widget from "./components/Widget/Widget";
import { useState } from "react";
import Messenger from "./components/Messenger/Messenger";
import Login from "./components/Login/Login";
import { useStatevalue } from "./components/StateProvider";

function App() {
  const [{ user }, dispatch] = useStatevalue();
  const [state, setState] = useState(true);
  const [username, setUsername] = useState("");

  const handleChange = () => {
    setState(!state);
  };

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : state ? (
        <>
          <Header handleChange={handleChange} />
          <div className="app__body">
            <Sidebar handleChange={handleChange} />
            <Feed />
            <Widget />
          </div>
        </>
      ) : (
        <Messenger handleChange={handleChange} />
      )}
    </div>
  );
}

export default App;
