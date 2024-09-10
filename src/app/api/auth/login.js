export default function handler(req, res) {
  if (req.method === 'POST') {
    // TODO: Validate email and password
    // TODO: Check if user exists
    // TODO: Generate and return auth token
    res.status(200).json({ token: 'dummy-auth-token' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}