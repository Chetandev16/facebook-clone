import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className="app">
      {/* <h1> Facebook Clone </h1> */}
      <Header />
      <div className="app__body">
        <Sidebar/>
        {/* Sidebar */}
        <Feed/>
      </div>
    </div>
  );
}

export default App;
