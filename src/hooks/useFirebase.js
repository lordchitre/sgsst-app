
import { useState } from 'react';

import { db, auth, tables } from '../firebaseConfig';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, deleteUser, getAuth } from 'firebase/auth';


export function useFirebase() {

    async function createAuthentication(email, password){
        return createUserWithEmailAndPassword(auth,email,password);
    }

    async function saveCustomer(props, user = null) {
        const uid = user?.uid;

        const prospectData = {
            ...props,
            uid,
        };

        const customerCol = collection(db, tables.customer);
        return await addDoc(customerCol, prospectData);
    }

    async function getCostumers() {
        const customerCol = collection(db, tables.customer);
        const customerSnapshot = await getDocs(customerCol);
        const customerList = customerSnapshot.docs.map(doc => doc.data());
        return customerList;
    }

    async function setCustomer(props) {
        const { companyEmail, password } = props;
        try {
           createAuthentication(companyEmail, password).then(authData => {
               const { user } = authData;
               saveCustomer()
           });
        } catch (error) {
            
        }
        // saveCustomer(props, user).then((response) => {
        //     return Promise.resolve(user);
        // }).catch((err) => {
        //     console.error(err);
        //     return Promise.reject(err);
        // });

       
    }

    return {
        getCostumers,
        setCustomer
    }
}

