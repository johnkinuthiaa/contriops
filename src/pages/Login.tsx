import {Link, useNavigate} from "react-router";
import {useState} from "react";

const Login =()=>{
    const [username,setUsername] =useState<string>("")
    const [email,setEmail] =useState<string>("")
    const [password,setPassword] =useState<string>("")
    const [error,setError] =useState<string>("")
    const [confirmPassword,setConfirmPassword] =useState<string>("")
    const[pLoading,setPLoading] =useState<boolean>(false)

    const navigate =useNavigate()

    const myHeaders =new Headers()
    myHeaders.append("Content-Type","application/json")
    const submitDetails =(async ()=>{

        const response =await fetch("",{
            method:"POST",
            body:JSON.stringify({
                username:{username},
                email:{email},
                password:{password}
            }),
            headers:myHeaders
        })
        if(response.ok){
            const data =await response.json()
            navigate("/home")

            console.log(data)
        }
    })
    const validate =()=>{
        if(confirmPassword !=password){
            setTimeout(()=>{
                setError("")
            },2000)
            setError("passwords do not match")
            setPLoading(false)
            return
        }
        const regex= ""
        if(!email.match(regex)){
            setTimeout(()=>{
                setError("")
            },2000)
            setError("email is not invalid")
            setPLoading(false)
            return;
        }
        submitDetails()
    }
    return (
        <div
            className={"register m-auto flex flex-col shadow-2xl w-max p-4 mt-3 text-black items-center justify-items-start "}>
            <h1 className={"font-bold text-2xl m-1"}>Login</h1>
            <form className={"flex flex-col w-5/5 gap-3 justify-items-start mb-2 "} onSubmit={(e) => {
                e.preventDefault()
                setPLoading(true)
                validate()

            }}>
                <div className={"text-red-600  h-3 mt-2 mb-2"}>{error}</div>
                <input type={"text"} placeholder={"username"} className={"p-2 border-2 border-gray-600 rounded-2xl"}
                       min={4} max={20} required={true} onChange={(e) => {
                    setUsername(e.target.value)
                }}/>
                <input type={"text"} placeholder={"email"} className={"p-2 border-2 border-gray-600 rounded-2xl"}
                       min={10} max={20} required={true} onChange={(e) => {
                    setEmail(e.target.value)
                }}/>
                <input type={"password"} placeholder={"password"}
                       className={"p-2 border-2 border-gray-600 rounded-2xl"} min={4} max={20} required={true}
                       onChange={(e) => {
                           setPassword(e.target.value)
                       }}/>
                <input type={"password"} placeholder={"confirm password"}
                       className={"p-2 border-2 border-gray-600 rounded-2xl"} min={4} max={20} required={true}
                       onChange={(e) => {
                           setConfirmPassword(e.target.value)
                       }}/>
                <button type={"submit"} className={"button p-2 bg-blue-600 text-white rounded m-0.5 "}>
                    {pLoading ? <p className={"animate-pulse"}>Loading...</p> : <p>Register</p>}
                </button>
            </form>
            <p>Dont have an account? <span
                className={"underline text-blue-700 visited:text-purple-950 cursor-pointer"}><Link
                to={"/signUp"}>register</Link></span></p>
        </div>
    )
}
export default Login