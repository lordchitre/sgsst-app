
import { db, auth } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export function useFirebase(){

    async function setAuthToken(email, password){
        try {
            const credentials = await createUserWithEmailAndPassword(auth, email, password);
            const authData = credentials.user;
            return authData;
        } catch (e) {
            return new Error('Some error:', e);
        }
    }

    async function saveCustomer(){

    }

    async function getCostumers(){
        const customerCol = collection(db, 'customer');
        const customerSnapshot = await getDocs(customerCol);
        const customerList = customerSnapshot.docs.map(doc => doc.data());
        
        return customerList;
    }

    async function setCustomer(props){
        const { email, password } = props;
        const authData = await setAuthToken(email, password);
       

        console.log('costumerData:', props);
    }

    return {
        getCostumers,
        setCustomer
    }   
}

