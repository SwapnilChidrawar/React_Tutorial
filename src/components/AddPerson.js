import { useState } from "react";

const AddPerson = (props) => {
  let [entertedName, setEnteredName] = useState("");
  let [entertedAge, setEnteredAge] = useState("");
  let [entertedEmail, setEnteredEmail] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     entertedName: "",
  //     entertedAge: "",
  //     entertedEmail: "",
  //   });

  const nameEventHandler = (event) => {
    setEnteredName(event.target.value);
    // // setUserInput({ ...userInput, entertedName: event.target.value });
    // setUserInput((preState) => {
    //     return { ...preState, entertedName: event.target.value };
    // });
    // console.log(event.target.value);
  };

  const ageEventHandler = (event) => {
    setEnteredAge(event.target.value);
    // setUserInput({ ...userInput, entertedAge: event.target.value });
    // console.log(event.target.value);
  };

  const emailEventHandler = (event) => {
    setEnteredEmail(event.target.value);
    // setUserInput({ ...userInput, entertedEmail: event.target.value });
    // console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const personObject = {
        id: Math.random(),
        name: entertedName,
        age: entertedAge,
        email: entertedEmail
    };
    console.log(personObject);
    props.onSavePersonData(personObject);
    setEnteredName('');
    setEnteredAge('');
    setEnteredEmail('');
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label> Name </label>
          <input type="text" value={entertedName} onChange={nameEventHandler} />
        </div>
        <div>
          <label> Age </label>
          <input type="text" value={entertedAge} onChange={ageEventHandler} />
        </div>
        <div>
          <label> Email </label>
          <input type="text" value={entertedEmail} onChange={emailEventHandler} />
        </div>
        <div>
          <button type="submit"> Submit </button>
        </div>
      </form>
    </div>
  );
};

export default AddPerson;
