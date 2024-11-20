import { Link } from 'react-router-dom';

const Footer = () => {
  const footerSections = [
    {
      title: 'About',
      links: [
        { name: 'About us', to: '#' },
        { name: 'Contact us', to: '#' },
        { name: 'Sharpenning Service', to: '#' },
        { name: 'Schedule Meeting', to: '#' },
      ],
    },
    {
      title: 'Categories',
      links: [
        { name: 'Power Tools', to: '#' },
        { name: 'Catering & Commercial', to: '#' },
        { name: 'Electrical Equipment', to: '#' },
        { name: 'Hand Tools', to: '#' },
        { name: 'Electronics', to: '#' },
      ],
    },
    {
      title: 'Consumer Policy',
      links: [
        { name: 'Pricing Policy', to: '#' },
        { name: 'Pricing Policy', to: '#' },
        { name: 'Return and Refund Policy', to: '#' },
        { name: 'Terms and Conditions', to: '#' },
      ],
    },
  ];

  return (
    <div className="bg-black pt-4 text-white px-2 mt-6 lg:px-20">
      <footer className="mx-auto max-w-screen-2xl px-4">
        <div className="mb-16 grid grid-cols-2 gap-12 pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
          {footerSections.map((section, index) => (
            <div key={index}>
              <div className="mb-4 font-bold uppercase tracking-widest text-gray-200">
                {section.title}
              </div>
              <nav className="flex flex-col gap-4">
                {section.links.map((link, idx) => (
                  <div key={idx}>
                    <Link
                      to={link.to}
                      className="text-gray-300 font-light text-sm transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      {link.name}
                    </Link>
                  </div>
                ))}
              </nav>
            </div>
          ))}
        </div>
        <div className="border-t py-8 text-center text-sm text-gray-400">
          © 2024 - Present Chavda International (PTY) LTD. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
