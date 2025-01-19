import {useNavigate} from "react-router";

interface cardProps{
    title:string
    details:string
    stars:number
    topic:string
    id:number
}
const Card =(props:cardProps)=>{
    const navigate =useNavigate()

    return(
        <div className={"card w-80 h-80 rounded-xl bg-gray-300 flex flex-col text-black font-bold text-2xl p-3 shadow-2xl"}
             onClick={()=>navigate(`/description/${props.title}`)}
        >
            <div className={"flex"}>
                <img alt={"p"} className={"h-8 w-8 rounded-xl"}/>
                <h2 className={"ml-3"}>{props.title}</h2>
            </div>
            <p className={"text-1xl mt-2 font-light "}>{props.details}</p>
            <div className={"mt-20 bottom-0 flex justify-between"}>
                <div className={"topic"}>
                    {props.topic}
                </div>
                <div className={"stars"}>
                    {props.stars}
                </div>
            </div>
        </div>
    )

}
export default Card