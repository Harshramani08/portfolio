import { FaCode, FaGraduationCap, FaProjectDiagram, FaRocket } from "react-icons/fa";

const About = () => {
  return (
    <>
      <section id="about" className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl text-center">

          <h2 className="mb-8 text-4xl font-bold md:text-5xl">
            About Me
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-muted">
            I'm a passionate MERN stack developer who loves creating modern,
            fast and user-friendly web applications. I enjoy learning new
            technologies and turning ideas into real world projects.
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-muted">
            Currently focused on Full Stack Development and building projects
            that solve real problems.
          </p>

          <div className="mt-20 grid gap-8 md:grid-cols-4">

            <div className="rounded-2xl border border-white/10 bg-lightDark/60 p-8 transition md:hover:-translate-y-2">
              <FaCode className="mx-auto mb-4 text-3xl text-primary" />
              <h3 className="font-semibold">Clean Code</h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-lightDark/60 p-8 transition md:hover:-translate-y-2">
              <FaRocket className="mx-auto mb-4 text-3xl text-primary" />
              <h3 className="font-semibold">Fast Performance</h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-lightDark/60 p-8 transition md:hover:-translate-y-2">
              <FaGraduationCap className="mx-auto mb-4 text-3xl text-primary" />
              <h3 className="font-semibold">Continuous Learning</h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-lightDark/60 p-8 transition md:hover:-translate-y-2">
              <FaProjectDiagram className="mx-auto mb-4 text-3xl text-primary" />
              <h3 className="font-semibold">Real Projects</h3>
            </div>

          </div>
        </div>
      </section>

      <div className="mx-auto mt-20 max-w-7xl px-6">
        <span className="block border-t border-white/10"></span>
      </div>
    </>
  );
};

export default About;
