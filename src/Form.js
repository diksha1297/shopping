import React, { useState } from "react";
const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [sex, setSex] = useState("");
  const [city, setCity] = useState("");
  const [result, setResult] = useState("");
  const onChangeName = (event) => {
    setName(event.target.value);
    setResult("");
  };
  const onChangeAge = (event) => {
    console.log(event.target.value);
    setAge(event.target.value);
    setResult("");
  };
  const onChangeSex = (event) => {
    setSex(event.target.value);
    console.log(event.target.value);
    setResult("");
  };
  const onChangeAddress = (event) => {
    setCity(event.target.value);
    setResult("");
  };
  const onClickButton = () => {
    setResult(
      `My name is:  ${name} My age is:  ${age} My sex is: ${sex} My city is: ${city}`
    );
    //setResult(name + age + sex + city);
    console.log(result);
    setName("");
    setAge("");
    setSex("");
    setCity("");
  };
  const getOption = () => {
    const options = [];
    for (let i = 1; i <= 100; i++) {
      options.push(<option value={i}>{i}</option>);
    }
    console.log("options:", options);
    return options;
  };
  return (
    <div style={{ padding: "20px" }}>
      <h1>My Form Details</h1>
      <div>
        <div>Name</div>
        <input onChange={onChangeName} value={name} />
      </div>
      <div>
        <div>Age</div>
        <select onChange={onChangeAge} value={age}>
          {getOption()}
          {/* <option onChange={onChangeAge} value={""}></option> */}
        </select>
        {/* <input onChange={onChangeAge} value={age} /> */}
      </div>
      <div>
        <div>Please select your Sex</div>
        <input
          type={"radio"}
          onChange={onChangeSex}
          value={"Male"}
          checked={sex === "Male"}
        />
        <label for="Male">Male</label>
        <input
          type={"radio"}
          onChange={onChangeSex}
          value={"Female"}
          checked={sex === "Female"}
        />
        <label for="Female">Female</label>
      </div>
      <div>
        <div>City</div>
        <input onChange={onChangeAddress} value={city} />
      </div>
      <div>
        <button onClick={onClickButton}>Click Me</button>
      </div>
      {result}
    </div>
  );
};
export default Form;
