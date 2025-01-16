interface Props{
    text:string
}
const Button =(text: Props)=>{
    return(
        <button className={"button p-2 bg-blue-600 text-white rounded m-0.5 "}>
            {text.text}
        </button>
    )
}
export default Button