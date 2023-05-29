import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

// FOR GOOGLE REDIRECT
// import {
//   auth,
//   signInWithGoogleRedirect,
//   createUserDocumentFromAuth,
// } from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up/sign-up.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";

const Authentication = () => {
  // For GOOGLE REDIRECT..... Also, uncomment part in the return section
  // useEffect(() => {
  //   async function redRes() {
  //     const response = await getRedirectResult(auth);
  //     console.log(response);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   }
  //   redRes();
  // }, []);

  return (
    <div className="main-container">
      <div className="authentication-container">
        <SignInForm />

        {/* For GOOGLE REDIRECT
      <button onClick={signInWithGoogleRedirect}>
        {" "}
        Sign In with Google Redirect{" "}
      </button> */}

        <SignUpForm />
      </div>
    </div>
  );
};

export default Authentication;
