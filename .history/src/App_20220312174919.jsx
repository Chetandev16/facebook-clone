import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Widget from "./components/Widget/Widget";
import { useState } from "react";
import Login from "./components/Login/Login"
function App() {
  const [user, setUser] = useState(true);
  return (
    <div className="app">
      {!user ? (
        <Login/>
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widget />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
