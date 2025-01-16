import * as React from "react";
import Button from "./Button.tsx";

const Header=()=>{
    const headerStyles:React.CSSProperties={
        display:"flex",

    }
    return(
        <div className={"header justify-between top-0 p-5 align-middle "} style={headerStyles}>
            <div className={"logo__image flex align-middle justify-evenly"}>
                <img src={"/src/assets/logo.png"}  alt={"logo"}/>
                <h1 className={"text-6xl font-bold"}>ContriOp</h1>
            </div>
            <div className={"login flex gap-1 flex-row h-fit "} >
                <Button text={"Login"} />
                <Button text={"Signup"}/>
            </div>

        </div>
    )
}
export default Header