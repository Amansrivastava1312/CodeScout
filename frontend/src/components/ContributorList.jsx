import React from "react";
import { useNavigate } from "react-router-dom";


// const contributors = [{
//     "login": "hectorgon",
//     "id": 790997,
//     "node_id": "MDQ6VXNlcjc5MDk5Nw==",
//     "avatar_url": "https://avatars.githubusercontent.com/u/790997?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/hectorgon",
//     "html_url": "https://github.com/hectorgon",
//     "followers_url": "https://api.github.com/users/hectorgon/followers",
//     "following_url": "https://api.github.com/users/hectorgon/following{/other_user}",
//     "gists_url": "https://api.github.com/users/hectorgon/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/hectorgon/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/hectorgon/subscriptions",
//     "organizations_url": "https://api.github.com/users/hectorgon/orgs",
//     "repos_url": "https://api.github.com/users/hectorgon/repos",
//     "events_url": "https://api.github.com/users/hectorgon/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/hectorgon/received_events",
//     "type": "User",
//     "site_admin": false,
//     "contributions": 256
// },];

const ContributorList = ({ contributors }) => {
    const navigate = useNavigate();

    return (
        <>
        
        <div>
            <h2 className="text-lg font-semibold mb-2">Contributors List</h2>
            <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                {contributors.map((contributor, index) => (
                    <li key={index} >
                        <div className="flex items-center gap-x-6">
                        <img className="h-16 w-16 rounded-full" 
                                src={contributor.avatar_url}
                                 alt={contributor.login} />
                        <div>
                            <h3 className="text-base font-semibold leading-7 tracking-tight text-blue-600 hover:underline" onClick={() => navigate(`/profile/${contributor.login}`)} >{contributor.login}</h3>
                            <p className="text-sm font-semibold leading-6 text-gray-500">Contributions: {contributor.contributions}</p>
                        </div>
                        </div>
                    </li>
                ))}
                {contributors.length === 0 && <p className='flex items-center justify-center h-32 '>No Contributors found</p>}
            </ul>
        </div>

        </>
    );
};

export default ContributorList;
