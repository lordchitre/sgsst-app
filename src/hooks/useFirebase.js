
import { db, auth } from '../firebaseConfig';
import { collection, getDocs, setDoc, doc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export function useFirebase(){

    async function setAuthToken(email, password){
        const credentials = await createUserWithEmailAndPassword(auth, email, password);
        const authData = credentials?.user;
        return authData;
    }

    async function saveCustomer(props){
        const result = await setDoc(doc(db, 'customer'), props);
        return result;
    }

    async function getCostumers(){
        const customerCol = collection(db, 'customer');
        const customerSnapshot = await getDocs(customerCol);
        const customerList = customerSnapshot.docs.map(doc => doc.data());
        return customerList;
    }

    async function setCustomer(props){
        const { companyEmail, password } = props;
        // const authData = await setAuthToken(companyEmail, password);
        await setDoc(doc(db, 'customer'), {props});
    }

    return {
        getCostumers,
        setCustomer
    }   
}

