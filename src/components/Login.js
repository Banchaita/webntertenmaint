import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { useRouter } from "next/router";

import FacebookLoginButton from "./FacebookBtn";
import GoogleBtn from "./GoogleBtn";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "@/firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { CgSpinner } from "react-icons/cg";




const Login = () => {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);


  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      try {
        window.recaptchaVerifier = new RecaptchaVerifier(
          "recaptcha-container",
          {
            size: "invisible",
            callback: (response) => {
              console.log("response@@@",response)
              onSignup();
            },
            "expired-callback": () => { },
          },
          auth
        );
      } catch (error) {
        console.error("Error initializing RecaptchaVerifier:", error);
      }
    }
  }


  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        console.log("confirmationResult---->>>",confirmationResult)
        window.confirmationResult = confirmationResult;
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }


  function onOTPVerify() {
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        // toast.success("Login successfully!");
        router.push("/Home"); // Replace "/signup" with the actual path to your signup page
      })
      .catch((err) => {
        console.log(err);
      });
  }


  return (
    <>
      <div className="login_bg_gradient bg-cover h-screen grid place-items-center">
        <p className="w-52 absolute top-0 left-0 m-2 text-4xl">
          <img src="/weber_logo-removebg.png" alt="" className="logo" />
        </p>
        <div className="w-80 mx-auto p-4 rounded-lg shadow-l">
          <div className="grid grid-cols-6 grid-rows-12 gap-4 justify-items-center mb-6">
            <div className="col-span-6 md:col-span-3">
              <p className="text-center text-xl font-semibold border-b-2 border-red-500 pb-1 mb-4 cursor-pointer">Login</p>
            </div>
            <div className="col-span-6 md:col-span-3">
              <Link href="/Signup">
                <p className="text-center text-xl font-semibold hover:border-b-2 hover:border-red-500 pb-1 mb-4 cursor-pointer">Signup</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center mb-6">
            <FacebookLoginButton />
            <div className="my-2"></div>
            <GoogleBtn />
          </div>

          <p className="text-center text-white-600 mb-4">~OR~</p>

          <div className="mb-6">
            <div id="recaptcha-container"></div>
            <PhoneInput
              country={'in'}
              value={ph}
              onChange={setPh}
              inputStyle={{ backgroundColor: '#374151', color: 'white', border: '1px solid #374151' }}
            />
            <button
              onClick={onSignup}
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 mt-4 mb-4">
              {loading && (
                <CgSpinner size={20} className="mt-1 animate-spin" />
              )}
              <span>Send OTP</span>
            </button>
            <input
              type="text"
              id="base-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="ENTER YOUR OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            <button
              type="button"
              onClick={onOTPVerify}
              className="text-white-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm py-2.5 mx-auto w-full mb-4 mt-4"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
