import { useState } from "react";
import "./App.css";
import Card from "./Card";
const App = () => {
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
  console.log(list);
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
    console.log("Newlist",newList);
    setList(newList);
  };
  return (
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
  );
};

export default App;
