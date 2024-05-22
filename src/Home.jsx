import Sidebar from "./Sidebar";
import SearchResults from "./SearchResults";

const Home = () => {
  return (
    <div className="grid grid-cols-[240px_1fr] grid-rows-[1fr] h-screen ">
        <Sidebar />
      <div className="">
        <SearchResults />
      </div>
    </div>
  );
};

export default Home;
