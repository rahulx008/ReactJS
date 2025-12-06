import react from "react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";   

function Github(){
        const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/rahulx008')
    //     .then(response => response.json())
    //     .then(data => setData(data))
    //     .catch(error => console.error('Error fetching GitHub data:', error));
    // }, []);
    return(
        <div>
            <h1 className="text-4xl font-bold text-center mt-10">Github Page</h1>
            <p className="text-center mt-4 text-lg">Welcome to the Github Page!</p>
            <img className="mx-auto mt-4 rounded-full" src={data.avatar_url} alt="GitHub Avatar" width="200" height="200"/>
            <p className="text-center mt-4 text-lg">Username: {data.login}</p>
            <p className="text-center mt-4 text-lg">Followers: {data.followers}</p>
        </div>
    );
}

export default Github;
export async function githubLoader() {
    const response = await fetch('https://api.github.com/users/rahulx008');
    const data = await response.json();
    return data;
}