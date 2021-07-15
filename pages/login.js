// inja ye login dorost mikonam va bayad bebinam chizi ke user neveshte tuye table hast ya na!!! bayad yek login api benevisam

// tuye loin api bayad ye getUserByEmail benevisam ta bebinam password doroste ya na

// github e karl o bebinam chejuri e
// Yaadam baashe: sabz haa typescriptan :D

import React, { useState } from 'react';
import Header from '../components/Header/Header';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <Header />
      <div>
        <h1>Login</h1>

        <form
          onSubmit={async (event) => {
            event.preventDefault();
            const response = await fetch('/api/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
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
          <p>E-mail</p>
          <input onChange={(event) => setEmail(event.target.value)}></input>
          <p>Password</p>
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          ></input>
          <button>Login</button>
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
