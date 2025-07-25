import React from "react";
import { Separator } from "./ui/separator";

const footerSections = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "API", href: "#" },
      { name: "Documentation", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", href: "#" },
      { name: "Community", href: "#" },
      { name: "Status", href: "#" },
      { name: "Privacy", href: "#" },
    ],
  },
];

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-brand-600 to-brand-700 rounded-lg"></div>
              <p className="text-xl font-bold">Blogger App</p>
            </div>
            <p className="text-gray-400">
              Building the future of productivity, one feature at a time.
            </p>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <p className="font-semibold mb-4">{section.title}</p>
              <ul className="space-y-2 text-gray-400">
                {section.links.map((link, listIndex) => (
                  <li key={listIndex}>
                    <a
                      href={link.href}
                      className="hover:text-brand-300 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p>&copy; 2024 Blogger App. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-300 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-brand-300 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-brand-300 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
