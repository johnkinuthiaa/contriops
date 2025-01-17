import Contributors from "../components/Contributors.tsx";
import MidDesc from "../components/MidDesc.tsx";
import {useState} from "react";
import useSWR from "swr";
import Loading from "../components/Loading.tsx";

interface Props{
    id:number
}
const DescriptionPage =(id: Props)=>{
    const[aboutProject,setAboutProject] =useState<string[]>([])
    const BASE_URL =""
    const ENDPOINT =`${id}`

    const myHeaders =new Headers()
    myHeaders.append("Content-Type","application/json")
    const fetchProjectInfo =(async ()=>{
        const response= await fetch(BASE_URL+ENDPOINT,{
            method:"GET",
            headers:myHeaders
        })
        if(response.ok){
            const data =await response.json()
            setAboutProject(data)
        }else{
            console.log("error fetching information")
        }
    })
    const {isLoading,error} =useSWR(BASE_URL+ENDPOINT,fetchProjectInfo)
    if(isLoading)return <Loading/>
    if(error) return <div className={"text-red-600 animate-bounce flex justify-center align-middle w-30 font-bold"}>Error fetching data</div>

    return(
        <div>
            <MidDesc/>
            <Contributors/>
        </div>
    )
}
export default DescriptionPage