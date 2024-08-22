import React from 'react';

const Footer = () => {
  const sections = [
    {
      title: 'Company',
      links: [
        { name: 'About us', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Careers', href: '#' },
      ],
    },
    {
      title: 'Social',
      links: [
        { name: 'LinkedIn', href: '#' },
        { name: 'Twitter/X', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Terms & Conditions', href: '#' },
        { name: 'Privacy Policy', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-black text-white py-[7rem] px-4">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between">
        {sections.map((section) => (
          <div key={section.title} className="w-full sm:w-auto mb-8 sm:mb-0">
            <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
            <ul>
              {section.links.map((link) => (
                <li key={link.name} className="mb-2">
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
