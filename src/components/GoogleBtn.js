import { auth } from '@/firebase.config'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import React from 'react'
import { useRouter } from "next/router";





const GoogleBtn = () => {
    const router = useRouter();
    // const auths = getAuth(auth)
    const provider = new GoogleAuthProvider()

    const handleGoogleSignUp = async () => {
        try {
          const result = await signInWithPopup(auth, provider);
          // Handle successful sign-up, for example, redirect to a new page
          console.log("Google Sign-up Successful!", result.user);
          router.push("/Home")
        } catch (error) {
          // Handle errors, e.g., display an error message to the user
          console.error("Google Sign-up Error:", error);
        }
      };

    const handleGoogleLogin = async () => {
        try {
          const result = await signInWithPopup(auth, provider);
          // Handle successful sign-up, for example, redirect to a new page
          console.log("Google Sign-up Successful!", result.user);
          router.push("/Main")
        } catch (error) {
          // Handle errors, e.g., display an error message to the user
          console.error("Google Sign-up Error:", error);
        }
      };


    if (router.pathname === '/' || router.pathname === '/Login' ) {
        return (
            <>
                <button
                    onClick={handleGoogleLogin}
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="mb-2 flex rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg w-full"
                    style={{ backgroundColor: "#ea4335" }}
                >
                    <svg class="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">

                        <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd" />

                    </svg>
                    Google 
                </button>
            </>
        )
    }

    return (
        <>
            <button
                onClick={handleGoogleSignUp}
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="mb-2 flex rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg w-full"
                style={{ backgroundColor: "#ea4335" }}
            >
                <svg class="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">

                <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd"/>

                </svg>
                Google
            </button>
        </>
    )
    
    



}

export default GoogleBtn
