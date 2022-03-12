import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Widget from "./components/Widget/Widget";
import { useState } from "react";
import Login from "./components/Login/Login"
import { useStatevalue } from "./components/StateProvider";
function App() {
  const [{user}, dispatch] = useStatevalue();
  return (
    <div className="app">
      {console.log(process.env.REACT_APP_MY_API_KEY)}
      {!user ? (
        <Login />
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
