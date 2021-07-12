import argon2 from 'argon2';
// eslint-disable-next-line unicorn/prefer-node-protocol
// Since all files in the API folder
// are server-side only, we can import from
// the database statically at the top
import { insertUser } from '../../utils/database';

// An API Route needs to define the response
// that is returned to the user
export default async function registerHandler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, password } = req.body;
    console.log('in api', firstName);
    // Create a hash of the password to save in the database
    const passwordHash = await argon2.hash(password);

    const user = await insertUser(firstName, lastName, email, passwordHash);

    return 'success';
  }

  res.status(400).json({ errors: [{ message: 'Bad request' }] });
}
