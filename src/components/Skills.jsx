import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaBootstrap, FaGithub, FaDatabase
} from "react-icons/fa";

import {
  SiTailwindcss, SiExpress, SiMongodb,
  SiMysql, SiRedux, SiCplusplus, SiC
} from "react-icons/si";

const skillsData = [
  { icon: <FaHtml5 />, name: "HTML", color: "group-hover:text-orange-500" },
  { icon: <FaCss3Alt />, name: "CSS", color: "group-hover:text-blue-500" },
  { icon: <FaJs />, name: "JavaScript", color: "group-hover:text-yellow-400" },
  { icon: <SiTailwindcss />, name: "Tailwind", color: "group-hover:text-cyan-400" },
  { icon: <FaBootstrap />, name: "Bootstrap", color: "group-hover:text-purple-500" },
  { icon: <FaReact />, name: "React", color: "group-hover:text-cyan-300" },
  { icon: <FaNodeJs />, name: "NodeJS", color: "group-hover:text-green-500" },
  { icon: <SiExpress />, name: "ExpressJS", color: "group-hover:text-white" },
  { icon: <SiMongodb />, name: "MongoDB", color: "group-hover:text-green-400" },
  { icon: <SiMysql />, name: "MySQL", color: "group-hover:text-blue-400" },
  { icon: <FaDatabase />, name: "DBMS", color: "group-hover:text-pink-400" },
  { icon: <FaGithub />, name: "GitHub", color: "group-hover:text-white" },
  { icon: <SiRedux />, name: "Redux", color: "group-hover:text-purple-400" },
  { icon: <SiCplusplus />, name: "C++", color: "group-hover:text-blue-600" },
  { icon: <SiC />, name: "C", color: "group-hover:text-blue-500" }
];

const Skills = () => {
  return (
    <>
      <section id="skills" className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl text-center">

          <h2 className="mb-20 text-4xl font-bold md:text-5xl">
            Skills
          </h2>

          <div className="grid grid-cols-3 gap-10 md:gap-12 sm:grid-cols-4 md:grid-cols-5">
            {skillsData.map((skill, i) => (
              <div key={i} className="group flex flex-col items-center">

                <div className="relative flex h-24 w-24 select-none items-center justify-center rounded-2xl border border-white/10 bg-lightDark text-4xl text-gray-400 transition duration-300 group-hover:scale-110 md:h-28 md:w-28">

                  <div className="absolute h-12 w-12 rounded-full bg-primary/30 opacity-0 blur-xl transition group-hover:opacity-100"></div>

                  <div className={`relative transition duration-300 ${skill.color}`}>
                    {skill.icon}
                  </div>
                </div>

                <span className="mt-3 text-sm text-gray-400">
                  {skill.name}
                </span>

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

export default Skills;
