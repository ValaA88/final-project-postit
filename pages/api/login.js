import argon2 from 'argon2';
// eslint-disable-next-line unicorn/prefer-node-protocol
// Since all files in the API folder
// are server-side only, we can import from
// the database statically at the top
import { getUserByEmail } from '../../utils/database';

// An API Route needs to define the response
// that is returned to the user
export default async function loginHandler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    // Create a hash of the password to save in the database
    const passwordHash = await argon2.hash(password);
    const user = await getUserByEmail(email);
    console.log('hello', user);
    if (user) {
      console.log('login am man ');
    }

    // if (!userWithPasswordHash) {
    //   return res
    //     .status(401)
    //     .json({ errors: [{ message: 'Email or password did not match' }] });
    // }

    // const passwordMatches = await argon2.verify(
    //   userWithPasswordHash.passwordHash,
    //   password,
    // );

    // If the password doesn't match the password hash, return a
    // 401 Unauthorized status code and an error
    if (true) {
      return res
        .status(200)
        .json({ errors: [{ passwordMatches: passwordMatches }] });
    }

    // const user = await insertUser(email, passwordHash);

    return 'success';
  }

  res.status(400).json({ errors: [{ message: 'Bad request' }] });
}
