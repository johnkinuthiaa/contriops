import {useEffect, useState} from "react";
import useSWR from "swr";
import Loading from "../components/Loading.tsx";
import {Octokit} from "@octokit/rest";
import GitHubIcon from '@mui/icons-material/GitHub';


// fetch the org by name
const octokit = new Octokit({
    auth: import.meta.env.VITE_PERSONAL_ACCESS_TOKEN
})

const DescriptionPage =()=>{
    const[aboutProject,setAboutProject] =useState({})
    const[reposUrl,setReposUrl] =useState<string>("")
    const[repos,setRepos] =useState<string[]>([])

    useEffect(()=>{
        fetchOrgRepos()
    },[aboutProject])

    const ENDPOINT ="netflix"
    const BASE_URL =`/org/${ENDPOINT}`
    const descPage={
        margin:"0 auto",
        width:"80%",
        display:"flex",
        justifyContent:"space-between"
    }

    const myHeaders =new Headers()
    myHeaders.append("Content-Type","application/json")
    const fetchProjectInfo =(async ()=>{
        const results =await octokit.request('GET /orgs/{org}', {
            org: ENDPOINT,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            },
            per_page:100
        })
        const data = results.data
        setAboutProject(data)
        console.log(data)
        setReposUrl(data.repos_url)

    })
    const fetchOrgRepos =(async ()=>{
        const response =await fetch(reposUrl,{
            method:"GET",
            headers:myHeaders
        })
        if(response.ok){
            const data =await response.json()
            setRepos(data)
            console.log(data)
        }

    })
    const {isLoading,error} =useSWR(BASE_URL,fetchProjectInfo)
    if(isLoading)return <Loading/>
    if(error) return <div className={"text-red-600 animate-bounce flex  item-center w-30 font-bold"}>Error fetching data</div>


    return(
        <div className={"shadow-2xl flex flex-col"} style={descPage}>
            <div className={"flex justify-between"} >
                <div className={"flex p-3 content-center "}>
                    <img src={aboutProject.avatar_url} alt={aboutProject.login}
                         className={"w-28 h-28 object-cover rounded-2xl mr-3"}/>
                    <div className={"mt-4 flex flex-col"}>
                        <h2 className={"font-bold text-2xl"}>{aboutProject.login}</h2>
                        <div className={"rounded-3xl flex w-fit bg-white"}>
                            {aboutProject.is_verified == true ?
                                <p className={"border-dotted text-green-700 border-2 border-green-600 rounded-3xl p-1"}>verified</p>
                                :
                                <p className={"border-dotted text-blue-700 border-2 border-blue-600 rounded-3xl p-1"}>not
                                    verified</p>}
                        </div>
                        <p className={"text-lg font-medium mt-2 mb-2"}>Blog:
                            <a href={aboutProject.blog} target={"_blank"}
                               className={"decoration-1 underline text-lg font-medium text-blue-600 ml-2"}>
                                {aboutProject.blog}
                            </a>
                        </p>
                        <div className={"flex gap-2 text-sm font-medium mt-2 mb-2"}>
                            <p>Followers: {aboutProject.followers}</p>
                            <p>Following: {aboutProject.following}</p>
                        </div>

                    </div>
                </div>
                <div className={"p-3"}>
                    <button type={"button"} className={"p-2 font-bold text-lg text-white bg-blue-600 rounded-2xl"}>
                        <a href={aboutProject.html_url} target={"_blank"} className={"decoration-0"}>
                            <GitHubIcon/>
                            view on Github
                        </a>
                    </button>
                </div>
            </div>
            <section className={"mt-5 p-2 flex flex-col"}>
                <h2 className={"text-lg font-bold "}>{aboutProject.login} Projects:</h2>
                <div className={"flex flex-wrap"}>
                    {repos.map((repo)=>(
                        <div className={"flex flex-col cursor-pointer gap-3 mt-3 shadow-2xl rounded-lg p-3 w-1/3 h-max min-h-72 mb-3"}>
                            <div className={"flex"}>
                                <div>
                                    <img src={aboutProject.avatar_url} className={"w-28 h-28 rounded-2xl mr-3"}/>
                                </div>
                                <div className={"flex flex-col ml-3"}>
                                    <h2 className={"flex flex-col text-lg font-bold"}>Name:
                                        <a href={repo.html_url} target={"_blank"}><span
                                            className={"text-lg font-bold decoration-1 underline"}> {repo.full_name}</span>
                                        </a>
                                    </h2>
                                    <p>Owner:{repo.owner.login}</p>
                                    <p>Fork:{repo.fork}</p>

                                </div>
                            </div>
                            <div className={"p-2"}>{repo.description}</div>
                        </div>
                    ))}
                </div>
            </section>

        </div>

    )
}
export default DescriptionPage