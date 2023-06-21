import "./Calculator.css";
const CalculatorInfo = ({ onClickButton, onClickOperator, left, right, operator,finalResult, operation }) => {
  return (
    <div className="calculatorDisplay"><div>
     <td>
      <button onClick={onClickButton}>1</button>
      <button onClick={onClickButton}>2</button>
      <button onClick={onClickButton}>3</button>
      <button onClick={onClickOperator}>+</button>
    </td></div><div>
    <td>
    <button onClick={onClickButton}>4</button>
      <button onClick={onClickButton}>5</button>
      <button onClick={onClickButton}>6</button>
      <button onClick={onClickOperator}>-</button>
    </td></div><div>
      <td>
      <button onClick={onClickButton}>7</button>
      <button onClick={onClickButton}>8</button>
      <button onClick={onClickButton}>9</button> 
      <button onClick={onClickOperator}>*</button>
      </td></div><div>
      <td>
      <button onClick={onClickOperator}>AC</button>
      <button onClick={onClickOperator}>0</button>
      <button onClick={onClickOperator}>=</button>
      <button onClick={onClickOperator}>/</button>
      </td></div>
      <div>Result of: {left}{operator}{right}{operation}{finalResult}</div>
    </div>
  );
};
export default CalculatorInfo;
