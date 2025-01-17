import * as React from "react";
import Button from "./Button.tsx";
import "./Header.css"

const Header=()=>{
    const headerStyles:React.CSSProperties={
        display:"flex",

    }
    return(
        <div className={"header justify-between top-0 p-5 align-middle "} style={headerStyles}>
            <div className={"logo__image flex align-middle justify-center"}>
                <img src={"/src/assets/newLg.png"} alt={"logo"} className={"h-20 w-20 object-cover"}/>
                <h1 className={"text-6xl font-bold  text-blue-700"}>ContriOp</h1>
            </div>
            <div className={"login flex gap-1 flex-row h-fit "} >
                <Button text={"Login"} to={"/login"}/>
                <Button text={"Signup"} to={"signUp"}/>
            </div>

        </div>
    )
}
export default Header