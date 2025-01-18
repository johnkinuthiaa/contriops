import {useState} from "react";
import useSWR from "swr";
import Loading from "../components/Loading.tsx";
import Card from "../components/Card.tsx";
import Footer from "../components/Footer.tsx";
import { Octokit } from "@octokit/rest";



const Home =()=>{
    const[searchTerm,setSearchTerm] =useState<string>("")
    const[projects,setProjects] =useState<string[]>([])
    const[language,setLanguage] =useState<string>("")
    const BASE_URL =""
    const SEARCH_ENDPOINT =`${searchTerm}`
    const languages:string[] =["all","java","javaScript","TypeScript","python","GO","sql"]
    const octokit = new Octokit({
        auth: import.meta.env.VITE_PERSONAL_ACCESS_TOKEN,
    });

    const home ={
        margin:"0 auto",
        alignItems:"center",
        justifyContent:"center",
        width:"80%",
        display:"flex",
        flexDirection:"column"
    }
    const mainStyles={
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "20px auto",
        width: "80%"
    }
    const formStyles ={
        width:"618px"
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
        <div className={"flex-col gap-1.5 items-center m-0 align-middle justify-center w-4/5"} style={home}>
            <main className={"rounded-xl p-2"}>
                <div className={"hero text-center flex align-middle justify-center"}>
                    <h1 className={"text-5xl font-bold mt-6 w-1/2 "}>The place to find and contribute to open source
                        projects you care about</h1>
                </div>
                <div className={"flex flex-col w-4/5  mt-10 mb-10  justify-items-start"} style={mainStyles}>
                    <form className={"mt-10 p-3 shadow-2xl w-max "} style={formStyles} onSubmit={(e) => {
                        e.preventDefault()
                        searchProject()

                    }}>
                        <input placeholder={language ? language : "search for projects"}
                               className={"bg-gray-300 p-3 w-80 rounded-2xl active:outline-0 border-0 "}
                               onChange={(e) => {
                                   setSearchTerm(e.target.value)
                               }}/>
                        <div className={"flex p-3 gap-2 text-1xl font-bold text-gray-500 items-center"}>
                            <div className={"border-1 border-black rounded-2xl p-1"}>stars

                            </div>

                            <div className={"border-1 border-black rounded-2xl p-1"}>
                                Languages
                                <select className={"ml-1.5 p-2"}>
                                    {languages.map((language: string) => (
                                        <option value={language} onClick={(e) => {
                                            setLanguage(e.target.value)
                                        }}>{language}</option>
                                    ))}

                                </select>
                            </div>
                            <div className={"border-1 border-black  rounded-2xl p-1"}>Contributions</div>
                        </div>
                    </form>
                </div>
                <section aria-labelledby={"projects"} className={"flex flex-col flex-wrap"}>
                    <h1 className={"text-3xl font-extrabold text-blue-700 mt-2 mb-2"}>Projects</h1>
                    {/*{projects.map((project: string) => (*/}
                    {/*    <Card details={project.details} title={project.title} stars={property.stars} topic={property.topic}*/}
                    {/*          id={project.id}/>*/}
                    {/*))}*/}
                    <div className={"flex flex-wrap gap-4 w-11/12"}>
                        <Card topic={"new card"} stars={100} title={"oss"} details={"This is a new proj"} id={1}/>
                        <Card topic={"new card"} stars={100} title={"oss"} details={"This is a new proj"} id={2}/>
                        <Card topic={"new card"} stars={100} title={"oss"} details={"This is a new proj"} id={3}/>
                        <Card topic={"new card"} stars={100} title={"oss"} details={"This is a new proj"} id={4}/>
                        <Card topic={"new card"} stars={100} title={"oss"} details={"This is a new proj"} id={5}/>
                        <Card topic={"new card"} stars={100} title={"oss"} details={"This is a new proj"} id={1}/>
                        <Card topic={"new card"} stars={100} title={"oss"} details={"This is a new proj"} id={1}/>
                        <Card topic={"new card"} stars={100} title={"oss"} details={"This is a new proj"} id={1}/>
                        <Card topic={"new card"} stars={100} title={"oss"} details={"This is a new proj"} id={1}/>
                        <Card topic={"new card"} stars={100} title={"oss"} details={"This is a new proj"} id={1}/>
                        <Card topic={"new card"} stars={100} title={"oss"} details={"This is a new proj"} id={1}/>
                        <Card topic={"new card"} stars={100} title={"oss"} details={"This is a new proj"} id={1}/>
                        <Card topic={"new card"} stars={100} title={"oss"} details={"This is a new proj"} id={1}/>
                        <Card topic={"new card"} stars={100} title={"oss"} details={"This is a new proj"} id={1}/>
                        <Card topic={"new card"} stars={100} title={"oss"} details={"This is a new proj"} id={1}/>
                        <Card topic={"new card"} stars={100} title={"oss"} details={"This is a new proj"} id={1}/>
                        <Card topic={"new card"} stars={100} title={"oss"} details={"This is a new proj"} id={1}/>
                        <Card topic={"new card"} stars={100} title={"oss"} details={"This is a new proj"} id={1}/>
                        <Card topic={"new card"} stars={100} title={"oss"} details={"This is a new proj"} id={1}/>
                        <Card topic={"new card"} stars={100} title={"oss"} details={"This is a new proj"} id={1}/>
                        <Card topic={"new card"} stars={100} title={"oss"} details={"This is a new proj"} id={1}/>
                        <Card topic={"new card"} stars={100} title={"oss"} details={"This is a new proj"} id={1}/>
                        <Card topic={"new card"} stars={100} title={"oss"} details={"This is a new proj"} id={1}/>
                        <Card topic={"new card"} stars={100} title={"oss"} details={"This is a new proj"} id={1}/>
                        <Card topic={"new card"} stars={100} title={"oss"} details={"This is a new proj"} id={1}/>
                        <Card topic={"new card"} stars={100} title={"oss"} details={"This is a new proj"} id={1}/>
                        <Card topic={"new card"} stars={100} title={"oss"} details={"This is a new proj"} id={1}/>
                        <Card topic={"new card"} stars={100} title={"oss"} details={"This is a new proj"} id={1}/>
                        <Card topic={"new card"} stars={100} title={"oss"} details={"This is a new proj"} id={1}/>
                        <Card topic={"new card"} stars={100} title={"oss"} details={"This is a new proj"} id={1}/>
                        <Card topic={"new card"} stars={100} title={"oss"} details={"This is a new proj"} id={1}/>
                        <Card topic={"new card"} stars={100} title={"oss"} details={"This is a new proj"} id={1}/>
                        <Card topic={"new card"} stars={100} title={"oss"} details={"This is a new proj"} id={1}/>
                        <Card topic={"new card"} stars={100} title={"oss"} details={"This is a new proj"} id={1}/>
                        <Card topic={"new card"} stars={100} title={"oss"} details={"This is a new proj"} id={1}/>
                    </div>


                </section>

            </main>

            <Footer/>
        </div>
    )
}
export default Home