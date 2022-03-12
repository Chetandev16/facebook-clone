import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/Feed/Feed"
import Widget from "./components/Widget/Widget";
import { useState } from "react";
function App() {
  const [user, setUser] = useState(false);
  return (
    <div className="app">
      {!user ? <h1>Login page</h1>}
      <Header />
      <div className="app__body">
        <Sidebar/>
        <Feed/>
        <Widget/>
      </div>
    </div>
  );
}

export default App;
