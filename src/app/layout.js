import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Book Tracker</title>
      </head>
      <body className="bg-gray-100">
        <header className="bg-white shadow-md">
          <div className="container mx-auto flex justify-between items-center p-4">
            <h1 className="text-3xl font-bold">
              <a href="/">Book Tracker</a>
            </h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a href="/" className="hover:text-blue-500">Home</a>
                </li>
                <li>
                  <a href="/books" className="hover:text-blue-500">My Books</a>
                </li>
                <li>
                  <a href="/auth/login" className="hover:text-blue-500">Login</a>
                </li>
                <li>
                  <a href="/auth/signup" className="hover:text-blue-500">Signup</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container mx-auto mt-8 mb-4">
          {children}
        </main>
      </body>
    </html>
  )
}
