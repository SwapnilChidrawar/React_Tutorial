import React, { useState } from "react";
import ReactDOM from "react-dom";
import Wrapper from "../Wrapper";
import "./DashboardComponent.css";

const ResuableComponent = (props) => {
  return (
    <div>
      <p> Name: {props.name} </p>
      <p> Age: {props.age} </p>
      <p> Email: {props.email} </p>
    </div>
  );
};

const DashboardComponent = (props) => {
  let [name, setName] = useState(props.name);
  console.log("Dashboard component called");
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
    //   [
    //     <p className="custom-class"> {title} </p>,
    //     <p> Name: {props.name} </p>,
    //     <p> Age: {props.age} </p>,
    //     <p> Email: {props.email} </p>,
    //     <button onClick={clickHandler}> Submit </button>,
    //     <p>****************************</p>
    // ]

    // <Wrapper>
    //     <p className="custom-class"> {title} </p>
    //     <p> Name: {props.name} </p>
    //     <p> Age: {props.age} </p>
    //     <p> Email: {props.email} </p>
    //     {/* <button onClick={() => { console.log('clicked') }}> Submit </button> */}
    //     <button onClick={clickHandler}> Submit </button>
    //     <p>****************************</p>
    //   </Wrapper>

    <React.Fragment>
      <p className="custom-class"> {title} </p>

      {ReactDOM.createPortal(
        <ResuableComponent
          name={props.name}
          age={props.age}
          email={props.email}
        />,
        document.getElementById("another_root")
      )}

      {/* <button onClick={() => { console.log('clicked') }}> Submit </button> */}
      <button onClick={clickHandler}> Submit </button>
      <p>****************************</p>
    </React.Fragment>

    // <>
    //   <p className="custom-class"> {title} </p>
    //   <p> Name: {props.name} </p>
    //   <p> Age: {props.age} </p>
    //   <p> Email: {props.email} </p>
    //   {/* <button onClick={() => { console.log('clicked') }}> Submit </button> */}
    //   <button onClick={clickHandler}> Submit </button>
    //   <p>****************************</p>
    // </>

    // <div>
    //   <p className="custom-class"> {title} </p>
    //   <p> Name: {props.name} </p>
    //   <p> Age: {props.age} </p>
    //   <p> Email: {props.email} </p>
    //   {/* <button onClick={() => { console.log('clicked') }}> Submit </button> */}
    //   <button onClick={clickHandler}> Submit </button>
    //   <p>****************************</p>
    // </div>
  );
};

export default DashboardComponent;
