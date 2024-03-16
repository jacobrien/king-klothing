import "./authentication.scss";
import SignUpForm from "../../components/sign-up/sign-up-form";
import SignInForm from "../../components/sign-in/sign-in-form";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
