import "./App.css";
import BookDetails from "./BookDetails";
import Discover from "./Discover";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Ereader from "./Ereader";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 15,
      cacheTime: 1000 * 60 * 60,
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/ereader/:id" element={<Ereader />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
