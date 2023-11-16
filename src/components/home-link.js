import { HomeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export const HomeLink = () => {
  return (
    <Link
      to={"/home"}
      className="fixed left-1 top-1 bg-green-400 rounded-full hover:bg-green-700"
    >
      <HomeIcon className="w-14 h-14 p-2 text-gray-700 hover:text-white" />
    </Link>
  );
};
