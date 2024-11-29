import { Mail, MapPin, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import CompanyCard from './CompanyCard';

const Footer = () => {
  const location = useLocation();
  const footerSections = [
    {
      title: 'About Company',
      links: [
        { name: 'Contact us', to: '/contact-us' },
        { name: 'About us', to: '/about-us' },
        { name: 'Service Area', to: '/service' },
        { name: 'Career', to: '/careers' },
        { name: 'Corporate Information', to: '#' },
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
      title: 'Contact',
      links: [
        {
          name: '18 Southway Road, Kelvin, Sandton',
          to: '#',
          icon: <MapPin />,
        },
        { name: '(011) 262-0135', to: '#', icon: <Phone /> },
        { name: 'marketing@chavda.com', to: '#', icon: <Mail /> },
      ],
    },
    {
      title: 'Help',
      links: [
        { name: 'Payments', to: '#' },
        { name: 'Shipping', to: '#' },
        { name: 'FAQ', to: '#' },
      ],
    },
  ];

  const isHidden = ['/login', '/signup'].includes(location.pathname);

  return (
    <div>
      {!isHidden && <CompanyCard />}
      <div className="bg-black pt-4 text-white px-2 lg:px-12 mb-8 sm:mb-0">
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
                        onClick={() => window.scrollTo(0, 0)} // Scrolls to the top
                        to={link.to}
                        className="text-gray-300 font-light text-lg transition duration-100 hover:text-indigo-500 active:text-indigo-600"
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
            © 2024 - Present Chavda International (PTY) LTD. All rights
            reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
