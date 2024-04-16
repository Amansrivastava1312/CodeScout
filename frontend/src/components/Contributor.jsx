import React from "react";


const Contributor = ({ contributor }) => {
    return (
        <div className="flex items-center py-2">
            <img
                src={contributor.avatar_url}
                alt={contributor.login}
                className="w-8 h-8 rounded-full mr-2"
            />
            <div>
                <a
                    href={contributor.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                >
                    {contributor.login}
                </a>
                <span className="ml-2 text-gray-500">
                    Contributions: {contributor.contributions}
                </span>
            </div>
        </div>
    );
};

export default Contributor;
