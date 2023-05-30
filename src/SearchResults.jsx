import { useEffect, useState } from "react";
import "./App.css";
import BookCard from "./BookCard";

const BOOKS_API_KEY = import.meta.env.VITE_BOOKS_API_KEY;
console.log(BOOKS_API_KEY);

function SearchResults() {
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function searchBooks() {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&printType=books&maxResults=40&startIndex=0&key=${BOOKS_API_KEY}`
      );
      const json = await res.json();
      console.log(json.items);
      setSearchResults(json.items);
    }
    searchBooks();
  }, [query]);

  return (
    <div className="ml-6">
      <form onChange={(e) => setQuery(e.target.value)}>
        <input
          className=" border-2 w-[90%] m-8 h-12 p-2 rounded bg-gray-200"
          type="text"
          placeholder="Search by title, author, ISBN & topic"
          value={query}
          name=""
          id="search"
        />
      </form>
      <div className="flex flex-wrap >">
        {searchResults?.map((book) => (
          <BookCard
            key={book.id}
            bookId={book.id}
            title={book.volumeInfo.title}
            authors={book.volumeInfo?.authors}
            // split the publishedDate to only display the year
            publishedDate={book.volumeInfo.publishedDate?.split("-")[0]}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
