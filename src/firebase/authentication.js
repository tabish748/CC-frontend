import { auth } from "./firebase";

import { GoogleAuthProvider,TwitterAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import { Navigate } from "react-router-dom";

const GoogleProvider = new GoogleAuthProvider();
const FacebookProvider = new FacebookAuthProvider();
const TwitterProvider = new TwitterAuthProvider();


export const encodeJWT = async (payload) => {
    const api = "http://127.0.0.1:8000/user/social-auth-token"
    const requestOption = {
        method : "POST",
        headers: {'Content-Type':'application/json'},
        body : JSON.stringify(payload)
    };
    const response = await fetch(api , requestOption);
    const data = await response.json();

    if (data.error === false){
        localStorage.setItem("token",data.data.token);
        localStorage.setItem("user",data.data.email);
        window.location.reload();
    }
}

export const GoogleAuth = () => {
    signInWithPopup(auth, GoogleProvider).then(
        (data) => {
            console.log(data);
            const payload = {
                "email":data._tokenResponse.email,
                "first_name":data._tokenResponse.firstName,
                "last_name":data._tokenResponse.lastName,
                "username" : data._tokenResponse.fullName,
            };
            encodeJWT(payload);
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
            const payload = {
                "email":data._tokenResponse.email,
                "first_name":data._tokenResponse.firstName,
                "last_name":data._tokenResponse.lastName,
                "username" : data._tokenResponse.fullName,
            };
            encodeJWT(payload);
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
            const payload = {
                "email":data._tokenResponse.email,
                "first_name":data._tokenResponse.firstName,
                "last_name":data._tokenResponse.lastName,
                "username" : data._tokenResponse.fullName,
            }
            encodeJWT(payload);
        }
    ).catch(
        (error)=>{
            console.log(error);
        }
    )
}

