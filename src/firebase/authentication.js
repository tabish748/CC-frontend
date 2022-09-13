import { auth } from "./firebase";

import { GoogleAuthProvider,TwitterAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";


const GoogleProvider = new GoogleAuthProvider();
const FacebookProvider = new FacebookAuthProvider();
const TwitterProvider = new TwitterAuthProvider();


export const GoogleAuth = () => {
    signInWithPopup(auth, GoogleProvider).then(
        (data) => {
            console.log(data)
            sessionStorage.setItem("token",data._tokenResponse.idToken)
        }
    ).catch(
        (error) => {
            console.log(error);
        }
    )
}

export const FacebookAuth = () => {
    signInWithPopup(auth, FacebookProvider).then(
        (data) => {
            console.log(data);
            sessionStorage.setItem("token",data._tokenResponse.idToken);

        }
    ).catch(
        (error) => {
            console.log(error);
        }
    )
}

export const TwitterAuth = () =>{
    signInWithPopup(auth , TwitterProvider).then(
        (data)=>{
            console.log(data);
        }
    ).catch(
        (error)=>{
            console.log(error);
        }
    )
}

