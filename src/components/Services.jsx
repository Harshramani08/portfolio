import { FaLaptopCode, FaServer, FaLightbulb } from "react-icons/fa";

const servicesData = [
  {
    icon: <FaLaptopCode />,
    title: "Frontend Development",
    desc: "I build responsive and user-friendly interfaces using React, JavaScript and Tailwind CSS."
  },
  {
    icon: <FaServer />,
    title: "Backend Learning",
    desc: "Currently learning Node.js, Express and MongoDB to build REST APIs and full stack apps."
  },
  {
    icon: <FaLightbulb />,
    title: "Project Building",
    desc: "I love building real-world projects to improve my MERN stack skills."
  }
];

const Services = () => {
  return (
    <>
      <section id="services" className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mb-20 text-center">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              What I'm Doing
            </h2>
            <p className="mx-auto max-w-xl text-muted">
              As a fresher developer, I'm focused on learning, building
              projects and improving my full stack development skills.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {servicesData.map((service, i) => (
              <div
                key={i}
                className="rounded-3xl border border-white/10 bg-lightDark/60 p-10 text-center backdrop-blur-md transition duration-300 md:hover:-translate-y-2 md:hover:border-primary
"
              >
                <div className="mb-6 flex justify-center text-4xl text-primary">
                  {service.icon}
                </div>

                <h3 className="mb-4 text-2xl font-semibold">
                  {service.title}
                </h3>

                <p className="leading-7 text-muted">
                  {service.desc}
                </p>
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

export default Services;
