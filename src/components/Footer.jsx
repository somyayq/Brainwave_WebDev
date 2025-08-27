import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-10">
        {/* Copyright Text */}
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All Rights Reserved.
        </p>

        {/* Social Media Links */}
        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <li key={item.id}>
              <a
                href={item.url}
                target="_blank"
                className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
              >
                {item.iconUrl ? (
                  <img
                    src={item.iconUrl}
                    width={16}
                    height={16}
                    alt={item.title || "Social Icon"}
                  />
                ) : (
                  <span className="sr-only">Social Icon</span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
