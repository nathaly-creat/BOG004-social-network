// import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   sendEmailVerification,
// } from './firebase.auth-email.util.js';

// import { router } from '../routes.js';

// export const signInEmail = (email, password) => {
//   const auth = getAuth();
//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user;
//       console.log(user);

//       sendEmailVerification(auth.currentUser).then(() => {
//         alert('Hemos enviado a tu correo electrónico el enlace de confirmación');
//       });
//       window.location.hash = 'login';
//     })

//     .catch((error) => {
//       const errorCode = error.code;
//       alert('Correo ya registrado, por favor intente con otro correo.');
//       const errorMessage = error.message;

//       // ..
//     });
// };
