import "./App.css";
import SearchResults from "./SearchResults";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="grid grid-cols-6 h-screen">
      <div className="col-span-1 shadow-xl">
        <Sidebar />
      </div>
      <div className="col-span-5">
        <SearchResults />
      </div>
    </div>
  );
}

export default App;
