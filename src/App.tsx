import './App.css'
import {Route, Routes} from "react-router";
import Home from "./pages/Home.tsx";
import DescriptionPage from "./pages/DescriptionPage.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import {Octokit} from "@octokit/rest";
import {useState} from "react";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import ImageDisplay from "./components/ImageDisplay.tsx";
import Base64Converter from "./components/ImageDisplay.tsx";


function App() {
    const octokit = new Octokit({
        auth: import.meta.env.VITE_PERSONAL_ACCESS_TOKEN
    })
    const[file,setFile] =useState("")

    async function getRepoReadme(owner: string, repo: string) {
        try {
            const response =await octokit.request('GET /repos/{owner}/{repo}/readme', {
                owner: owner,
                repo: repo,
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
                }
            })
            setFile(response.data.html_url)

        } catch (error) {
            console.error('Error fetching repo README:', error);
            throw error;
        }
    }
    getRepoReadme("remarkjs","react-markdown")

  return (
      <div>
          <embed src={`${file}`} />

      </div>

  )
}

export default App
