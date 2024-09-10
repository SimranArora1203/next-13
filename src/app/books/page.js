import Link from 'next/link';

export default function BooksPage() {
  const books = [
    { id: 1, title: 'Book 1', author: 'Author 1' },  
    { id: 2, title: 'Book 2', author: 'Author 2' },
    { id: 3, title: 'Book 3', author: 'Author 3' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">My Books</h1>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {books.map(book => (
          <div key={book.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
            <p className="text-gray-500">{book.author}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Link href="/books/add">
          <button className="text-white bg-blue-500 hover:bg-blue-600 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5">Add New Book</button>
        </Link>
      </div>
    </div>
  );
} 