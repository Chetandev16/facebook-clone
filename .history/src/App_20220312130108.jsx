import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/Feed/Feed"
function App() {
  return (
    <div className="app">
      {/* <h1> Facebook Clone </h1> */}
      <Header />
      <div className="app__body">
        <Sidebar/>
        <Feed/>
      </div>
    </div>
  );
}

export default App;
