const BOOKS_API_KEY = import.meta.env.VITE_BOOKS_API_KEY;

const fetchBook = async ({ queryKey }) => {
  const id = queryKey[1];
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes/${id}?key=${BOOKS_API_KEY}`
  );

  if (!res.ok) {
    throw new Error(`error searching for books`);
  }

  return res.json();
};

export default fetchBook;
