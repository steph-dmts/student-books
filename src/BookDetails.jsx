import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import fetchBook from "./fetchBook";
import Sidebar from "./Sidebar";
import SearchResults from "./SearchResults";

const BookDetails = () => {
  const { id } = useParams();
  const result = useQuery(["bookDetails", id], fetchBook);

  if (result.isLoading) {
    return <Sidebar />;
  }

  const book = result.data.volumeInfo;
  console.log(book);
  return (
    <div className="grid grid-cols-6 h-screen">
      <div className="col-span-1 shadow-xl">
        <Sidebar />
      </div>
      <div className="col-span-5 mt-10">
        <div className="grid grid-cols-[24%_4%_66%] mx-auto px-14 max-w-[90rem]">
          <div className="">
            <SearchResults />
            <img
              className="rounded-xl shadow-3xl"
              src={`https://books.google.com/books/publisher/content/images/frontcover/${id}?fife=w400-h600&source=gbs_api`}
              width={280}
              alt=""
            />
            <div>
              <p>{book.pageCount}</p>
              <p>{book.language}</p>
              <p>ePub (mobile friendly)</p>
              <p>Available on iOs & Android</p>
            </div>
          </div>
          <div></div>

          <div>
            <p className=" font-serif text-4xl font-bold">{book.title}</p>
            <p>{book.authors[0]}</p>
            <Link to={`/ereader/${id}`}  className=" bg-amber-500 p-1 m-2 rounded">Read</Link>
            <button>Want to read</button>
            <button>share</button>
            <div>
              <p>Book details</p>
              <div
                className="[&>p]:mt-4"
                dangerouslySetInnerHTML={{ __html: book.description }}
              ></div>
            </div>

            <div>Table of contents</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
