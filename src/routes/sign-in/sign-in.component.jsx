import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGoogleRedirect,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up/sign-up.component";

const SignIn = () => {
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

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}> Sign In with Google Popup </button>
      {/* For GOOGLE REDIRECT
      <button onClick={signInWithGoogleRedirect}>
        {" "}
        Sign In with Google Redirect{" "}
      </button> */}
      <SignUpForm />
    </div>
  );
};

export default SignIn;
