import { useState } from "react";
import "./Login.css";
const Login=()=>{
    const [name, setName]=useState("");
    const onChangeName=()=>{
        setName("Diksha");
    }
    
    return(
        <div className="login-main">
            <div className="login-box">
                    <input onChange={onChangeName} ></input>
            </div>
        </div>
    )
}
export default Login;