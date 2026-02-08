import { FaGithub } from "react-icons/fa";

const projectsData = [
  {
    title: "Paste App",
    img: "/pasteApp.jpg",
    desc: "A modern paste management app built with React and Redux Toolkit.",
    github: "https://github.com/Harshramani08/Paste-App",
    live: "#"
  },
  {
    title: "Blog Site",
    img: "/blog-site.jpg",
    desc: "Responsive blog website using React Hooks and Context API.",
    github: "https://github.com/Harshramani08/blog-site",
    live: "#"
  },
  {
    title: "ShopCart",
    img: "/shop-cart.jpg",
    desc: "Shopping cart application built using React and Redux.",
    github: "https://github.com/Harshramani08/ShopCart-Project",
    live: "#"
  },
  {
    title: "College Website",
    img: "/collage-site.jpg",
    desc: "Dynamic portal for departments, courses and student updates.",
    github: "https://github.com/Harshramani08/college-site",
    live: "#"
  },
  {
    title: "Contact Manager",
    img: "/contact-manager.jpg",
    desc: "CRUD app using Node.js, Express, MongoDB and EJS.",
    github: "https://github.com/Harshramani08/contact-manager-nodejs",
    live: "#"
  }
];

const Projects = () => {
  return (
    <>
      <section id="projects" className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">

          <h2 className="mb-20 text-center text-4xl font-bold md:text-5xl">
            My Projects
          </h2>

          <div className="grid gap-10 md:grid-cols-3">
            {projectsData.map((project, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-white/10 bg-lightDark/60 backdrop-blur-md transition duration-300 hover:-translate-y-2"
              >

                <img
                  src={project.img}
                  alt={project.title}
                  className="h-52 w-full select-none object-cover"
                />


                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold tracking-wider text-green-400">
                      {project.title}
                    </h3>

                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-black/40 transition hover:bg-primary"
                      >
                        <FaGithub />
                      </a>

                    </div>
                  </div>

                  <p className="mt-4 leading-7 text-muted">
                    {project.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <div className="mx-auto mt-20 max-w-7xl px-6">
        <span className="block border-t border-white/10"></span>
      </div>
    </>
  );
};

export default Projects;
