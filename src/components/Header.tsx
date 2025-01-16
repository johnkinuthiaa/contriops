import * as React from "react";
import Button from "./Button.tsx";

const Header=()=>{
    const headerStyles:React.CSSProperties={
        display:"flex",

    }
    return(
        <div className={"header"} style={headerStyles}>
            <div className={"logo__image"}></div>
            <div className={"login"}>
                <Button text={"Login"}/>
                <Button text={"Signup"}/>
            </div>

        </div>
    )
}
export default Header