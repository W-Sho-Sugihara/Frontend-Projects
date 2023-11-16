import { HomeLink } from "./home-link";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
import React from "react";
import validator from "validator";
import { Link } from "react-router-dom";

const CheckListItems = ({ text }) => {
  return (
    <li className="flex items-center pb-3">
      <CheckCircleIcon className="w-8 h-8 text-red-500 " />
      <p className="pl-2">{text}</p>
    </li>
  );
};

const SuccessModal = ({ email }) => {
  return (
    <main className="bg-gray-700 w-full h-screen flex items-center justify-center">
      <HomeLink />
      <section className="px-12 py-12 w-2/5 h-auto bg-white rounded-3xl flex flex-col font-sans">
        <CheckCircleIcon className="w-16 h-16 text-red-500 " />
        <h1 className="text-5xl font-bold text-gray-900 my-5">
          Thanks for subscribing!
        </h1>
        <span className="text-sm text-gray-800">
          A confirmation email has been sent to{" "}
          <span className="font-bold">{email}</span>. Please open it and click
          the button to confirm your subscription.{" "}
        </span>
        <Link
          to={"/home"}
          className="mt-6 text-center w-full rounded-md bg-gradient-to-r from-red-500 to-orange-500 px-3.5 py-4 text-sm font-semibold text-white shadow-xl active:shadow-sm active:translate-y-0.5"
        >
          {" "}
          Dismiss message
        </Link>
      </section>
    </main>
  );
};

const SignUpModal = ({ setSubmitSuccessful, email, setEmail }) => {
  const [error, setError] = React.useState(false);

  const onSubmitEmail = (e) => {
    e.preventDefault();
    if (validator.isEmail(email) === false) {
      setError(true);
    } else {
      setSubmitSuccessful(true);
    }
  };

  return (
    <main className="bg-gray-700 w-full h-screen flex items-center justify-center">
      <HomeLink />
      <section className="w-3/5 h-auto bg-white rounded-xl flex font-sans">
        <aside className="flex flex-col py-12 px-16 basis-7/12">
          <h1 className="text-5xl font-bold mt-5 ">Stay updated!</h1>
          <p className="mt-5 text-sm">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className="mt-5 mb-5">
            <CheckListItems
              text={"Product discovery and building what matters"}
            />
            <CheckListItems
              text={"Measuring to ensure updates are a success"}
            />
            <CheckListItems text={"And much more!"} />
          </ul>
          <form>
            <div>
              <label
                htmlFor="email"
                className="block text-md font-medium leading-6 text-sm"
              >
                Email address
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={
                    (error
                      ? "text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6 "
                      : "ring-inset ring-1 ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset ") +
                    "block w-full h-12 rounded-sm border-0 outline-none py-1.5 px-3"
                  }
                  placeholder="you@example.com"
                  onChange={async (e) => {
                    await setEmail(e.target.value);
                  }}
                />
                <div
                  className={
                    (error ? "" : "opacity-0 ") +
                    "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
                  }
                >
                  <ExclamationCircleIcon
                    className="h-5 w-5 text-red-500"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <p
                className={
                  (error ? "" : "opacity-0 ") + "my-3 text-sm text-red-600"
                }
                id="email-error"
              >
                Not a valid email address.
              </p>
            </div>
            <button
              className="w-full rounded-md bg-gradient-to-r from-red-500 to-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xl
                 active:shadow-sm active:translate-y-0.5"
              onClick={(event) => onSubmitEmail(event)}
            >
              Subscribe to monthly newslatter
            </button>
          </form>
        </aside>
        <figure className="p-4 pl-0 basis-5/12 ">
          <img
            className="w-full h-full bg-red-400"
            src="../assets/images/illustration-sign-up-desktop.svg"
            alt="popup window"
          />
        </figure>
      </section>
    </main>
  );
};

export const SignUpForm = () => {
  const [submitSuccessful, setSubmitSuccessful] = React.useState(false);
  const [email, setEmail] = React.useState("");

  if (submitSuccessful) {
    return <SuccessModal email={email} />;
  } else {
    return (
      <SignUpModal
        setSubmitSuccessful={setSubmitSuccessful}
        email={email}
        setEmail={setEmail}
      />
    );
  }
};
