import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { GlobalContext } from "../context/GlobalContext";


const UsernameInput = () => {
  const [username, setUsername] = useState(null);
  const { githubData, setGithubData, loading, setLoading } =
    useContext(GlobalContext);

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      console.log(data);
      setGithubData(data);
      toast.success("Data Fetched Successfully");
      console.log(data);
    } catch (error) {
      toast.error("Error Fetching Data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-row w-full justify-center items-center gap-3"
    >
      <input
        type="text"
        placeholder="Enter Github Username🐈‍⬛"
        disabled={loading}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="px-4 py-2 border-2 border-indigo-500 rounded-md bg-black/90 text-indigo-300 font-semibold inline-block focus:outline-none "
      />

      <button
        type="submit"
        disabled={loading}
        className="px-4 py-2 border-2 border-pink-500 rounded-md bg-pink-700 text-white font-semibold"
      >
        Search
      </button>
    </form>
  );
};

export default UsernameInput;
