import { FaCodeBranch, FaCopy, FaRegStar } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import { formatDate } from "../utils/functions";
import { PROGRAMMING_LANGUAGES } from "../utils/constants";
import toast from "react-hot-toast";
// import Dash from "./Dash";
import { useState } from "react";
// import { Button, Modal } from 'flowbite-react';

const Repo = ({ repo }) => {

	const formattedDate = formatDate(repo.created_at);

  const handleCloneClick = async (repo) => {
		try {
			await navigator.clipboard.writeText(repo.clone_url);
			toast.success("Repo URL cloned to clipboard");
		} catch (error) {
			toast.error("Clipboard write failed. ");
		}
	};

  return (
    <li className="mb-10 ms-7">
      <span
        className="absolute flex items-center justify-center w-6 h-6 bg-blue-100
			rounded-full -start-3 ring-8 ring-white"
      >
        <FaCodeBranch className="w-5 h-5 text-blue-800" />
      </span>
      <div className="flex gap-2 items-center flex-wrap">
        <a
          href={repo.html_url}
					target='_blank'
					rel='noreferrer'
					className='flex items-center gap-2 text-lg font-semibold'
				>
          {repo.name}
        </a>
        <span
          className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5
					py-0.5 rounded-full flex items-center gap-1"
        >
          <FaRegStar /> {repo.stargazers_count}
        </span>
        <span
					onClick={() => handleCloneClick(repo)}
					className='cursor-pointer bg-green-100 text-green-800 text-xs
        font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1'
				>
					<FaCopy /> Clone
				</span>
      </div>
	  <div className="absolute left-[80%]">

			<Modal
					show={showModal}
					onClose={() => setShowModal(false)}
					popup
					size='md'
				>
					<Modal.Header />
					<Modal.Body>
					<div className='text-center'>
						{/* <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto' /> */}
						<h3 className='mb-5 text-lg text-gray-500 dark:text-gray-400'>
						Details About the Repositories
						</h3>
						<div className='flex justify-center gap-4'>

						<div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
							<p>Open Issue Count <span aria-hidden="true">→</span> {repo.open_issues_count}</p>
							{/* <p>Open Issues <span aria-hidden="true">→</span>{repo.open_issues}</p>w */}
						</div>
						</div>
					</div>
					</Modal.Body>
			</Modal>
				
				<div onClick={() => setShowModal(true)} className="cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2  bg-gradient-to-r from-cyan-900 to-blue-900 hover:scale-95 active:scale-90 transition-all duration-300">
          			View
				</div>
			</div>

      <div>
				<time
					className='block my-1 text-xs font-normal leading-none text-gray-400'
				>
					Released on {formattedDate}
				</time>
				<p className='mb-4 text-base font-normal text-gray-500 w-[75%]'>
					{repo.description ? repo.description.slice(0, 500) : "No description provided"}
				</p>
				{PROGRAMMING_LANGUAGES[repo.language] ? (
					<img src={PROGRAMMING_LANGUAGES[repo.language]} alt='Programming language icon' className='h-8' />
				) : null}
			</div>
    </li>
  );
};

export default Repo;
