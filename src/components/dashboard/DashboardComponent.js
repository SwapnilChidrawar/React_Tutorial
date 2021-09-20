import { useState } from "react";

import "./DashboardComponent.css";

const DashboardComponent = (props) => {
  let [name, setName] = useState(props.name);
  console.log('Dashboard component called');
  const title = "Hello my name is swapnil";
//   let name = props.name;
  // function clickHandler() {
  //     console.log('click function called');
  // }

  const clickHandler = () => {
    // setName('new swapnil');
    console.log(name);
  };

  return (
    <div>
      <p className="custom-class"> {title} </p>
      <p> Name: {props.name} </p>
      <p> Age: {props.age} </p>
      <p> Email: {props.email} </p>
      {/* <button onClick={() => { console.log('clicked') }}> Submit </button> */}
      <button onClick={clickHandler}> Submit </button>
      <p>****************************</p>
    </div>
  );
};

export default DashboardComponent;
