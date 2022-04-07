
import { db, auth } from '../firebaseConfig';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export function useFirebase(){

    async function setAuthToken(email, password){
        const credentials = await createUserWithEmailAndPassword(auth, email, password);
        const authData = credentials?.user;
        return authData;
    }

    async function saveCustomer(props){
        const prospectData = {
            ...props,
        };
        
        const customerCol = collection(db, 'customer');

        return await addDoc(customerCol, prospectData);
    }

    async function getCostumers(){
        const customerCol = collection(db, 'customer');
        const customerSnapshot = await getDocs(customerCol);
        const customerList = customerSnapshot.docs.map(doc => doc.data());
        return customerList;
    }

    async function setCustomer(props){
        saveCustomer(props);
    }

    return {
        getCostumers,
        setCustomer
    }   
}

