import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/Feed/Feed"
import Widget from "./components/Widget/Wideget";
function App() {
  return (
    <div className="app">
      {/* <h1> Facebook Clone </h1> */}
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
