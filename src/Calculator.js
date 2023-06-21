import CalculatorInfo from "./CalculatorInfo";
import "./Calculator.css";
import { useState } from "react";
const Calculator = () => {
  const [left, setLeft] = useState("");
  const [operator, setOperator] = useState("");
  const [right, setRight] = useState("");
  const [result, setResult] = useState("");
  const [finalResult, setFinalResult] = useState("");
  const [operation, setOperation] = useState();
  const [isLeft, setIsLeft] = useState(true);

  const onClickOperator = (event) => {
    if (event.target.innerText === "+") {
      if (isLeft === true) {
        setIsLeft(false);
        setOperator("+");
      }
      else {
        setLeft(finalResult)
        setOperator('+')
        setRight('')
        setFinalResult('')
        setOperation('')
      }
    }
    if(event.target.innerText=== '-'){
        if(isLeft === true){
            setIsLeft(false);
            setOperator("-");
        }
        else{
            setLeft(finalResult)
            setOperator('-')
            setRight("")
            setFinalResult("")
            setOperation("")
        }
    }
    if(event.target.innerText === '*'){
        if(isLeft === true){
            setIsLeft(false);
            setOperator("*")
        }
        else{
            setLeft(finalResult)
            setOperator("*")
            setRight("")
            setFinalResult("")
            setOperation("")
        }
    }
    if(event.target.innerText==="/"){
        if(isLeft=== true){
            setIsLeft(false);
            setOperator("/")
        }
        else{
            setLeft(finalResult)
            setOperator("/")
            setRight("")
            setFinalResult("")
            setOperation("")
        }
    }
    if(event.target.innerText==="AC"){
        setLeft("")
        setRight("")
        setFinalResult("")
        setOperation("")
        setOperator("")
    }
    if (event.target.innerText === "=") {
    if( operator==="+")
    setFinalResult(+left + +right);
    else if(operator ==="-")
    setFinalResult(+left - +right);
    else if(operator === "*")
    setFinalResult(+left * +right)
    else
    setFinalResult(+left / +right)
      setOperation("=");
    }
  };
  const onClickButton = (event) => {
    if (isLeft) {
      setLeft(left + event.target.innerText);
    } else {
      setRight(right + event.target.innerText);
    }
  };

  return (
    <CalculatorInfo
      result={result}
      left={left}
      operator={operator}
      operation={operation}
      right={right}
      finalResult={finalResult}
      onClickButton={onClickButton}
      onClickOperator={onClickOperator}
    />
  );
};
export default Calculator;
