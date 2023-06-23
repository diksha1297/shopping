import Counter from "./Counter";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

const App = () => {
  return (
    <div style={{display: "flex", justifyContent: "space-evenly"}}> 
      <div>
        <a href={`/`}>Home</a>
      </div>
      <div>
        <a href={`/counter`}>Counter</a>
      </div>
      <div>
        <a href={`/calculator`}>Calculator</a>
      </div>
      <div>
        <a href={`/flexTut`}>FlexTut</a>
      </div>
      <div>
        <a href={`/Login`}>Login</a>
      </div>
    </div>
  );
};

export default App;
