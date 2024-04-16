import { useState } from "react";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";
import Repos from "../components/Repos";
import { SiTypescript, SiJavascript, SiCplusplus } from "react-icons/si";

const ExplorePage = () => {
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const exploreRepos = async (language) => {
    setLoading(true);
    setRepos([]);
    try {
      const res = await fetch("/api/explore/repos/" + language);
      const { repos } = await res.json();
      setRepos(repos);
      setSelectedLanguage(language);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4">
      <div className="bg-glass max-w-2xl mx-auto rounded-md p-4">
        <h1 className="text-xl font-bold text-center">
          Explore Popular Repositories
        </h1>
        <div className="flex flex-wrap gap-2 my-2 justify-center">
          <SiJavascript
            alt="JavaScript logo"
            className="cursor-pointer text-yellow-400 rounded-lg"
            size={80}
            onClick={() => exploreRepos("javascript")}
          />
          <SiTypescript
            alt="TypeScript logo"
            className="cursor-pointer text-sky-600 bg-white rounded-lg"
            size={80}
            onClick={() => exploreRepos("typescript")}
          />
          <SiCplusplus
            alt="C++ logo"
            className="cursor-pointer text-blue-600 bg-white rounded-lg"
            size={80}
            onClick={() => exploreRepos("c++")}
          />
          <img
            alt="Python logo"
            src="https://www.logo.wine/a/logo/Python_(programming_language)/Python_(programming_language)-Logo.wine.svg"
            className="h-20 w-20 cursor-pointer bg-white rounded-lg"
            onClick={() => exploreRepos("python")}
          />
          <img
            src="https://www.logo.wine/a/logo/Java_(programming_language)/Java_(programming_language)-Logo.wine.svg"
            alt="Java logo"
            className="h-20 w-20 cursor-pointer bg-white rounded-lg"
            onClick={() => exploreRepos("java")}
          />
        </div>
        {repos.length > 0 && (
          <h2 className="text-lg font-semibold text-center my-4">
            <span className="bg-blue-100 text-blue-800 font-medium me-2 px-2.5 py-0.5 rounded-full ">
              {selectedLanguage.toUpperCase()}{" "}
            </span>
            Repositories
          </h2>
        )}
        {!loading && repos.length > 0 && (
          <Repos repos={repos} alwaysFullWidth />
        )}
        {loading && <Spinner />}
      </div>
    </div>
  );
};
export default ExplorePage;
