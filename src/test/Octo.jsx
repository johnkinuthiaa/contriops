import {Octokit} from "@octokit/rest";

const Octo=()=>{

    const octokit = new Octokit({
        auth: import.meta.env.VITE_PERSONAL_ACCESS_TOKEN
    })
    const fetchData =(async ()=>{
        const results = await octokit.request('GET /organizations', {

            headers: {
                'X-GitHub-Api-Version': '2022-11-28',
                'Accept':'application/vnd.github+json'
            }
        })
        const data =results.data
        console.log(data)
    })
    fetchData()

    return(
        <div></div>
    )
}
export default Octo