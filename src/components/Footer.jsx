import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

const socialLinks = [
  { href: "https://twitter.com/yourusername", icon: <FaTwitter /> },
  { href: "https://linkedin.com/in/yourusername", icon: <FaYoutube /> },
  { href: "mailto:your@email.com", icon: <FaMedium /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-black-swan py-10 text-bone-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left font-garamond">
          ©Anti-Fragile GTM 2026. All rights reserved
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-bone-white transition-colors duration-500 ease-in-out hover:text-visceral-red magnetic"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right font-garamond hover:text-visceral-red transition-colors"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
