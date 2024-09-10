export default function handler(req, res) {
  if (req.method === 'POST') {
    // TODO: Validate title and author
    // TODO: Add new book to database
    res.status(200).json({ message: 'Book added successfully' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}