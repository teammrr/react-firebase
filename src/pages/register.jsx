import { useRef } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../libs/firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passRef = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const pass = passRef.current.value;

    try {
      await createUserWithEmailAndPassword(auth, email, pass);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

          <p className="mt-4 text-gray-200">
            New to this App? Create your account now and be part of
            Newton&apos;s student network.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          action=""
          className="mx-auto mb-0 mt-8 max-w-md space-y-4"
        >
          <div>
            <label type="email" name="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg text-black border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email"
                required
                ref={emailRef}
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label type="password" name="password" className="sr-only">
              Password
            </label>

            <div className="relative">
              <input
                type="password"
                className="w-full rounded-lg text-black border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter password"
                required
                ref={passRef}
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-200">
              Already have an account?
              <a className="underline px-2 text-white" href="login">
                Sign in!
              </a>
            </p>

            <button
              type="submit"
              className="inline-block rounded-lg w-32 bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            >
              Sign in
            </button>
          </div>
          {errorMessage && (
            <p className="font-semibold error-message ">{errorMessage}</p>
          )}
        </form>
      </div>
    </>
  );
};

export default Register;
