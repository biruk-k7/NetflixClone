// Import the functions you need from the SDKs you need
/*fire base usage and code inspired by great stack*/ 
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyCrEp0SRcOXvpDV38nTcfvDZlJETm0kwFw",
  authDomain: "netflix-clone-67cf0.firebaseapp.com",
  projectId: "netflix-clone-67cf0",
  storageBucket: "netflix-clone-67cf0.appspot.com",
  messagingSenderId: "673614785734",
  appId: "1:673614785734:web:6c9471b59dbf6a62247bc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore
const auth = getAuth(app);



const signUp = async (name, email, password) =>{
//try catch block for signUp
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            authProvider: "local",
            name,
            email,
        });
    } catch (error) {
        toast.error(error.code.split('/')[1].split('-').join(" "));

    }
}

const login = async (email, password)=>{
//try catch block for signIn
        try{
            await signInWithEmailAndPassword(auth, email, password);
        }catch(error){
            toast.error(error.code.split('/')[1].split('-').join(" "));
        }

    }


const logout = ()=>{
    signOut(auth);
}

//export every thing
export {auth, db, login, signUp, logout};