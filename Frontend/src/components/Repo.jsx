import { FaCodeBranch, FaCopy, FaRegStar } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import { formatDate } from "../utils/fromatted";
import { PROGRAMMING_LANGUAGES } from "../utils/constants";
import { toast } from "react-toastify";
const Repo = ({ repo }) => {
  const handleCloneUrl = async (repo) => {
    console.log(repo);
    try {
      await navigator.clipboard.writeText(repo.clone_url);
      toast.success("clone url copied to clipboard");
    } catch (error) {
      console.error("clipboard write error : ", error.message);
      toast.error("clipboard write error");
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
          href={repo?.html_url}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-lg font-semibold"
        >
          {repo?.name}
        </a>
        <span
          className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5
					py-0.5 rounded-full flex items-center gap-1"
        >
          <FaRegStar /> {repo?.stargazers_count}
        </span>
        <span
          className="bg-purple-100 text-purple-800 text-xs font-medium
					 px-2.5 py-0.5 rounded-full flex items-center gap-1"
        >
          <FaCodeFork /> {repo?.forks_count}
        </span>
        <span
          onClick={() => handleCloneUrl(repo)}
          className="cursor-pointer bg-green-100 text-green-800 text-xs
					font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1"
        >
          <FaCopy /> Clone
        </span>
      </div>

      <time
        className="block my-1 text-xs font-normal leading-none
			 text-gray-400"
      >
        Released on {formatDate(repo?.updated_at)}
      </time>
      <p className="mb-4 text-sm  sm:text-base font-normal text-gray-500">
        {repo?.description
          ? repo?.description.slice(0, 500)
          : "description not provided"}
      </p>
      {PROGRAMMING_LANGUAGES[repo?.language] ? (
        <img
          src={PROGRAMMING_LANGUAGES[repo?.language]}
          alt="Programming language icon"
          className="h-8"
        />
      ) : null}
    </li>
  );
};

export default Repo;
