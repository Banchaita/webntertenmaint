import { auth } from '@/firebase.config';
import { FacebookAuthProvider,signInWithPopup } from 'firebase/auth';
import React from 'react';


const FacebookLoginButton = () => {
    const handleFacebookSignUp = async () => {
        try {
          const result = await signInWithPopup(auth, FacebookAuthProvider);
          // You can access user information from `result.user`
          console.log('Facebook Sign-Up Success!', result.user);
        } catch (error) {
          console.error('Facebook Sign-Up Error:', error);
        }
      };



    return (
        <button
            onClick={handleFacebookSignUp}
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            className="mb-2 flex rounded px-6 py-2.5 text-md font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg w-full"
            style={{ backgroundColor: "#1877f2" }}
        >
            <svg class="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
            <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
            </svg>
            Facebook
        </button>

    );
};

export default FacebookLoginButton;
