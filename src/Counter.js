import { useState } from "react";
import "./App.css";
import Card from "./Card";
import Operator from "./Operator";
import Calculator from "./Calculator";
const Counter = () => {
  const [list, setList] = useState([
    "Kumari",
    "Diksha",
    26,
    "Buxar",
    "Bengaluru",
  ]);
  const [lastName, setLastName] = useState("Pandey");
  const [age, setAge] = useState(26);
  const [nativePlace, setNativePlace] = useState("Buxar");
  const [currentPlace, steCurrentPlace] = useState("Bengaluru");

  const onClickHandler = (newLastName) => {
    setLastName(newLastName);
  };
  const onClickAgeHandler = (counter) => {
    setAge(age + counter);
  };
  const onClickNativePlaceHandler = (newNP) => {
    setNativePlace(newNP);
  };
  const onClickCurrentPlaceHandler = (newCP) => {
    steCurrentPlace(newCP);
  };
  const onCLickProfileItemHandler = (ind) => {
    const newList = list.filter((item, index) => {
      if (ind === index) {
        return false;
      } else {
        return true;
      
      }
    });
    // console.log("Newlist", newList);
    setList(newList);
  };
  let val;
  const [count1, setCount] = useState(0);
  const onClickButton1 = (val) => {
    setCount(count1 + val);
  };
  const onClickButton2 = (val) => {
    setCount(count1 - val);
  };

  return (
    <div>
      <Calculator>
      </Calculator>
      <Operator
        count1={count1}
        val={val}
        onClickButton1={onClickButton1}
        onClickButton2={onClickButton2}
      ></Operator>
      <Card
        onClickProfileItem={onCLickProfileItemHandler}
        profileList={list}
        onClickLastName={onClickHandler}
        onClickAge={onClickAgeHandler}
        onClickNP={onClickNativePlaceHandler}
        onClickCP={onClickCurrentPlaceHandler}
        lastName={lastName}
        age={age}
        nativePlace={nativePlace}
        currentPlace={currentPlace}
      >
        Diksha hello
      </Card>
      
    </div>
  );
};

export default Counter;
