const Operator = (props) => {
  const onClickButton1 = () => {
    props.onClickButton1(1);
  };
  const onClickButton2 = () => {
    props.onClickButton2(1);
  };
  return (
    <div>
      <button onClick={onClickButton1}>+</button>
      {props.count1}
      <button onClick={onClickButton2}>-</button>
    </div>
  );
};
export default Operator;
