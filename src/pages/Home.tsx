import {useState} from "react";
import {list} from "postcss";
import useSWR from "swr";
import Loading from "../components/Loading.tsx";
import Card from "../components/Card.tsx";

const Home =()=>{
    const[searchTerm,setSearchTerm] =useState<string>("")
    const[projects,setProjects] =useState([])
    const home ={
        margin:"0 auto",
        alignItems:"center",
        justifyContent:"center",
        width:"80%"
    }
    const myHeaders =new Headers()
    myHeaders.append("Content-Type","application/json")
    const fetchData =(async ()=>{
        const response =await fetch("",{
            method:"GET",
            headers:myHeaders
        })
        if(response.ok){
            const data =await response.json()
            setProjects(data)
        }else{
           console.log("error fetching data")
        }

    })
    const{isLoading,error} =useSWR("",fetchData)
    if(isLoading){
        return <Loading/>
    }
    if(error){
        return <div> Error fetching data</div>
    }
    return(
        <div className={"flex-col gap-1.5 items-center m-0 align-middle"} style={home}>
            <main>
                <div className={"hero "}>
                    <h1 className={"text-5xl font-bold mt-20 w-1/2 justify-center"}>The place to find and contribute to open source projects you care about</h1>
                </div>
                <div className={"flex flex-col w-4/5 border-amber-600"}>
                    <form>
                        <input placeholder={"search for projects"} className={"bg-gray-300 rounded-2xl active:outline-0 border-0 "} onChange={(e)=>{
                            setSearchTerm(e.target.value)
                        }}/>
                        <div className={"flex p-3 gap-2 text-2xl font-bold text-gray-500 "}>
                            <div className={"border-2 border-black rounded-2xl p-3"}>stars</div>
                            <div className={"border-2 border-black rounded-2xl p-3"}>Languages</div>
                            <div className={"border-2 border-black  rounded-2xl p-3"}>Contributions</div>
                        </div>
                    </form>
                </div>
                <div className={"flex flex-wrap gap-3"}>
                    <Card details={"new "} title={"a code"} stars={100} topic={"ai"}/>

                </div>


            </main>
        </div>
    )
}
export default Home