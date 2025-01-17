import {useState} from "react";
import useSWR from "swr";
import Loading from "../components/Loading.tsx";
import Card from "../components/Card.tsx";



const Home =()=>{
    const[searchTerm,setSearchTerm] =useState<string>("")
    const[projects,setProjects] =useState<string[]>([])
    const[hidden,setHidden] =useState<boolean>(true)
    const[language,setLanguage] =useState<string>("")

    const BASE_URL =""
    const SEARCH_ENDPOINT =`${searchTerm}`
    const languages:string[] =["java","javaScript","TypeScript","python","GO","sql"]

    const home ={
        margin:"0 auto",
        alignItems:"center",
        justifyContent:"center",
        width:"80%"
    }
    const myHeaders =new Headers()
    myHeaders.append("Content-Type","application/json")
    const fetchData =(async ()=>{
        const response =await fetch(BASE_URL,{
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
    const searchProject=(async ()=>{
        const response =await fetch(BASE_URL+SEARCH_ENDPOINT,{
            method:"GET",
            headers:myHeaders
        })
        if(response.ok){
            const data =await response.json();
            setProjects(data)
        }
    })
    const{isLoading,error} =useSWR(BASE_URL,fetchData)
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
                <div className={"flex flex-col w-5/5 border-amber-600 mt-10 mb-10 align-center border-2 " }>
                    <form onSubmit={(e)=>{
                        e.preventDefault()
                        searchProject()

                    }}>
                        <input placeholder={language?language:"search for projects"} className={"bg-gray-300 p-3 w-2/5 rounded-2xl active:outline-0 border-0 "} onChange={(e)=>{
                            setSearchTerm(e.target.value)
                        }}/>
                        <div className={"flex p-3 gap-2 text-2xl font-bold text-gray-500 "}>
                            <div className={"border-2 border-black rounded-2xl p-3"}>stars

                            </div>

                            <div className={"border-2 border-black rounded-2xl p-3"}>
                                Languages
                                <select onClick={()=>setHidden(!hidden)}>
                                    {!hidden&&languages.map((language: string) => (
                                        <option value={language} onClick={(e)=> {
                                            setLanguage(e.target.value)
                                        }}>{language}</option>
                                    ))}

                                </select>
                            </div>
                            <div className={"border-2 border-black  rounded-2xl p-3"}>Contributions</div>
                        </div>
                    </form>
                </div>
                <div className={"flex flex-wrap gap-3"}>
                    {projects.map((project:string)=>(
                        <Card details={project.details} title={project.title} stars={property.stars} topic={property.topic} id={project.id}/>
                    ))}

                </div>


            </main>
        </div>
    )
}
export default Home