import { ProjectList } from "./project-list";

export const Home = () => {
  const projects = [{ title: "Sign Up Form", link: "sign-up-form" }];

  return (
    <main className="w-full h-screen bg-green-800 flex items-center justify-center">
      <section className="w-3/4 h-auto bg-gray-200 flex flex-col items-center rounded-2xl p-10">
        <h1 className="text-gray-600 text-2xl font-bold text-center mb-8">
          Hello Frontend Projects!!
        </h1>
        <h2 className="mb-6">Project List</h2>
        <ProjectList projects={projects} />
      </section>
    </main>
  );
};
