import { useState, useRef } from "react";

import "./App.css";
import DashboardComponent from "./components/dashboard/DashboardComponent";
import AddPerson from "./components/AddPerson";

const Dummy_Data = [
  {
    id: 1,
    name: "swapnil",
    age: 29,
    email: "swapnil@gmail.com",
  },
  {
    id: 2,
    name: "Raj",
    age: 28,
    email: "raj@gmail.com",
  },
];

function App() {
  let data = useRef();
  let flag = true;
  const [person, setPerson] = useState(Dummy_Data);

  const getPersonData = (data) => {
    setPerson((preState) => {
      return [data, ...preState];
    });

    // console.log("Data in Parent", data);
    console.log(`Data in Parent, ${data}`);
  };

  const getData = () => {
    console.log(data.current.value);
  }

  return (
    <div className="App">

    <input type="text" ref={data}/>
    <button type="button" onClick={getData}> Get Data </button>
      {/* {flag ? (
        <h3> Welcome to react Js !!! </h3>
      ) : (
        <h3> Welcome to Angular Js !!! </h3>
      )} */}

      {flag && <h3> Welcome to react Js !!! </h3>}
      {!flag && <h3> Welcome to Angular Js !!! </h3>}

      <p style={{'background-color': flag ? 'blue' : 'transparent'}}> Hello My Name is swapnil </p>

      <p className={`form-control ${flag ? 'valid' : 'invalid'}`}> Hi Please decorate me with dynamic classes </p>

      <AddPerson onSavePersonData={getPersonData}></AddPerson>

      {person.map((p) => (
        <DashboardComponent
          key={p.id}
          name={p.name}
          age={p.age}
          email={p.email}
        ></DashboardComponent>
      ))}
      {/* <DashboardComponent
        name={person[0].name}
        age={person[0].age}
        email={person[0].email}
      ></DashboardComponent>
      <DashboardComponent
        name={person[1].name}
        age={person[1].age}
        email={person[1].email}
      ></DashboardComponent> */}
    </div>
  );
}

export default App;
