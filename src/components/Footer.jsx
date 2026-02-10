const socialLinks = [
    { name: "Github", href: "https://github.com/Harshramani08" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/harsh-ramani-93b417256" },
    { name: "Instagram", href: "https://www.instagram.com/harsh_ramani_08/" },
    { name: "Facebook", href: "https://www.facebook.com/ramani.harshv" }
];

const Footer = () => {
    return (
        <footer className="px-6 py-6">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 px-6 pt-6 text-sm text-gray-400 md:flex-row md:px-10">

                <div className="flex gap-6 whitespace-nowrap">
                    {socialLinks.map(({ name, href }) => (
                        <a
                            key={name}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-lg font-bold transition duration-300 hover:translate-x-1 hover:text-white"
                        >
                            {name}
                        </a>
                    ))}
                </div>

                <p>
                    © {new Date().getFullYear()} Made by Harsh
                </p>

            </div>
        </footer>
    );
};

export default Footer;