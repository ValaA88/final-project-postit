import React, { useState } from 'react';
import Header from '../../components/Header/Header';

export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <Header />
      <div>
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            const response = await fetch('/api/register', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
              }),
            });
            // const json = await response.json();

            //   if ('errors' in json) {
            //     setError(json.errors[0].message);
            //     return;
            //   }

            //   props.refreshUsername();

            //   // Navigate to the user's page when
            //   // they have been successfully created
            //   router.push(`/users/management/${json.user.id}/read`);
          }}
        >
          <p>First Name</p>
          <input onChange={(event) => setFirstName(event.target.value)}></input>
          {firstName}
          <p>Last Name</p>
          <input onChange={(event) => setLastName(event.target.value)}></input>
          <p>E-mail</p>
          <input onChange={(event) => setEmail(event.target.value)}></input>
          <p>Password</p>
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          ></input>
          <button>Register</button>
        </form>
      </div>
    </div>
  );
}

// export async function getServerSideProps() {
//   const { getImages } = await import('../../../utils/database');

//   const images = await getImages();

//   console.log('images', images);

//   return {
//     props: {
//       images: images,
//     },
//   };
// }
