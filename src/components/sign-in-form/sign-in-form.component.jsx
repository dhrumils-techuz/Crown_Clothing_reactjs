import { useState } from "react";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";

import "./sign-in-form.styles.scss";

import Button from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  //   console.log(formFields);
  const { email, password } = formFields;

  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect Password/Email");
          break;
        case "auth/user-not-found":
          alert("User not found");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-in-container">
      <h2> Already have an account?</h2>
      <span> Sign in using email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />{" "}
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="Submit">SIGN IN</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            {" "}
            SIGN IN WITH GOOGLE{" "}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
