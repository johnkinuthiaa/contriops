import {useNavigate} from "react-router";

interface Props{
    text:string
    to:string

}
const Button =({text,to}:Props)=>{
    const navigate =useNavigate()

    return(
        <button   className={"button p-3 bg-blue-600 text-white rounded m-0.5 "} onClick={()=>{
            navigate(to)
        }}>
            {text}
        </button>
    )
}
export default Button