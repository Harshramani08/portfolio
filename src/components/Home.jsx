import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const socialLinks = [
  { icon: <FaGithub />, url: "https://github.com/Harshramani08" },
  { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/harsh-ramani-93b417256" },
  { icon: <FaInstagram />, url: "https://www.instagram.com/harsh_ramani_08/" },
  { icon: <FaFacebook />, url: "https://www.facebook.com/ramani.harshv" }
];

const Home = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">

      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-secondary/20 blur-3xl"></div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

        <div>
          <p className="text-3xl font-extrabold text-primary md:text-4xl">Hello I'm</p>

          <h1 className="text-4xl font-bold md:text-7xl">
            Harsh Ramani
          </h1>

          <TypeAnimation
            sequence={[
              "a MERN Stack Developer.", 2000,
              "a Web Developer.", 2000,
              "a Professional Developer.", 2000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="mt-3 block text-3xl font-semibold text-primary"
          />

          <p className="mt-6 max-w-xl text-lg leading-7 text-muted md:text-justify">
            I build modern, fast and responsive web applications using React,
            Node.js and MongoDB. Passionate MERN Stack Developer focused on
            creating scalable and user-friendly experiences across all devices.
          </p>

          <div className="mt-10 flex gap-6 text-2xl text-gray-300">
            {socialLinks.map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-primary"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-linear-to-r from-primary to-secondary opacity-40 blur-2xl"></div>

            <img
              src="/me.jpg"
              alt="Harsh Ramani"
              className="relative w-64 md:w-96 rounded-full border border-white/10 "
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
