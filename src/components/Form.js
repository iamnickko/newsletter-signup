import Button from "./Button";
import ErrorMsg from "./ErrorMsg";
import Modal from "./Modal";
import { useState } from "react";

const Form = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [didEdit, setDidEdit] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const emailIsInvalid = didEdit && !enteredEmail.includes("@");
  const emptyEmail = enteredEmail.length === 0;

  const handleEmailBlur = () => {
    setDidEdit(true);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setSubscribed(true);
    setDidEdit(false);
  };

  const onCloseHandler = () => {
    setEnteredEmail("");
    setSubscribed(false);
  };

  return (
    <>
      {subscribed && <Modal email={enteredEmail} onClose={onCloseHandler} />}
      <form className="my-5" onSubmit={onSubmitHandler}>
        <label className="font-bold text-sm" htmlFor="email">
          Email address
        </label>
        <input
          className="block border-2 border-charcoalgrey-100 rounded-md p-3 w-full bg-white hover:cursor-pointer invalid:border-red-600"
          placeholder="email@company.com"
          type="email"
          name="email"
          onBlur={handleEmailBlur}
          onChange={(event) => {
            setDidEdit(false);
            setEnteredEmail(event.target.value);
          }}
          value={enteredEmail}
        />
        {emailIsInvalid && (
          <ErrorMsg message={"Please enter a valid email address."} />
        )}
        <Button disabled={emptyEmail} className="mt-5" type="submit">
          Subscribe to monthly newsletter
        </Button>
      </form>
    </>
  );
};

export default Form;
