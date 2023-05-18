const BOOKS_API_KEY = import.meta.env.VITE_BOOKS_API_KEY;


const BookCard = ({ bookId, title, thumbnail, authors, publishedDate }) => {

  return (
    <a
      href={`https://www.googleapis.com/books/v1/volumes/${bookId}?key=${BOOKS_API_KEY}`}
    >
      <div className="group hover:bg-gray-100 hover:rounded-xl w-44 mr-5 mb-4 p-2">
        <div className="w-40 mb-6 h-60">
          <img
            className="group-hover:brightness-75 rounded shadow-thumbnail"
            //   src={
            //     thumbnail
            //       ? thumbnail
            //       : "https://www.svgrepo.com/show/438234/content-book-brochure-magazine-read-icon.svg"
            //   }
            // use the image from the api using the bookId - much higher res
            src={`https://books.google.com/books/publisher/content/images/frontcover/${bookId}?fife=w400-h600&source=gbs_api`}
            width={165}
            alt=""
          />
        </div>
        <p className=" font-inter font-medium text-base overflow-hidden text-ellipsis whitespace-nowrap">
          {title}
        </p>
        <p className="font-normal text-gray-500">
          {authors ? authors[0] : "Unknown Author"}
        </p>
        <p className=" text-xs text-gray-500">{publishedDate} </p>
      </div>
    </a>
  );
};

export default BookCard;
