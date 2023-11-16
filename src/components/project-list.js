import { Link } from "react-router-dom";

const ListItem = ({ title, link }) => {
  return (
    <li className="solid border bg-gray-300 border-gray-600 rounded-md px-10 py-1 hover:bg-gray-400 hover:text-white">
      <Link to={"/" + link}>{title}</Link>
    </li>
  );
};

export const ProjectList = ({ projects }) => {
  return (
    <ul>
      {projects.map(({ title, link }) => (
        <ListItem key={title} title={title} link={link} />
      ))}
    </ul>
  );
};
