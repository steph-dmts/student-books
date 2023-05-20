import "./App.css";
import BookDetails from "./BookDetails";
import SearchResults from "./SearchResults";
import Sidebar from "./Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchResults />} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
      {/* <div className="grid grid-cols-6 h-screen">
        <div className="col-span-1 shadow-xl">
          <Sidebar />
        </div>
        <div className="col-span-5">
          <SearchResults />
        </div>
      </div> */}
    </BrowserRouter>
  );
}

export default App;
