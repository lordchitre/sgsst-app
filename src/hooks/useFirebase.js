
// import { useState } from 'react';
// import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

// import { db, auth, tables } from '../firebaseConfig';
// import { collection, getDocs, addDoc } from 'firebase/firestore';
// import { createUserWithEmailAndPassword, deleteUser, getAuth } from 'firebase/auth';


// export function useFirebase() {
//     async function saveCustomer(props, user = null) {
//         const uid = user?.uid;

//         const prospectData = {
//             ...props,
//             uid,
//         };

//         const customerCol = collection(db, tables.customer);
//         return await addDoc(customerCol, prospectData);
//     }

//     async function getCostumers() {
//         const customerCol = collection(db, tables.customer);
//         const customerSnapshot = await getDocs(customerCol);
//         const customerList = customerSnapshot.docs.map(doc => doc.data());
//         return customerList;
//     }

//     async function setCustomer(props) {
//         const { companyEmail, password } = props;

//         const [
//             createUserWithEmailAndPassword,
//             user,
//             loading,
//             error,
//         ] = useCreateUserWithEmailAndPassword(auth);

//         saveCustomer(props, user).then((response) => {
//             return Promise.resolve(user);
//         }).catch((err) => {
//             console.error(err);
//             return Promise.reject(err);
//         });

//         // await createAuthentication(companyEmail, password).then(({ user }) => {

//         // }).catch((err) => {
//         //     return Promise.reject(err);
//         // });
//     }

//     return {
//         getCostumers,
//         setCustomer
//     }
// }

