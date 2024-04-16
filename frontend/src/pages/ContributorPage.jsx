import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

import ContributorList from "../components/ContributorList";
import Spinner from "../components/Spinner";

const ContributorPage = () => {
    const [contributors, setContributors] = useState([]);
    const [loading, setLoading] = useState(false);

    
    const owner = window.location.pathname.split('/')[2];
    const repo  = window.location.pathname.split('/')[3];

    const fetchContributorsAndContributions = useCallback(async () => {
        setLoading(true);
        try {
            const res = await fetch(`/api/users/contributors/${owner}/${repo}`);
            const {contributors} = await res.json();
            setContributors(contributors);
            console.log(contributors);
            return(contributors);
    
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }, []);
    

    useEffect(() => {
        fetchContributorsAndContributions();
    }, [fetchContributorsAndContributions]);
    const handleClick = async (e) => {
        e.preventDefault();
        fetchContributorsAndContributions();
    };

    return (
        <div className="m-4">
            <h1 className="text-2xl font-bold mb-4">Contributors Count : `{contributors.length}` </h1>
			<div className='flex gap-4 flex-col lg:flex-row justify-center items-start'>
				{!loading && <ContributorList contributors={contributors} />}
				{loading && <Spinner />}
            </div>
        </div>
    );
};

export default ContributorPage;
