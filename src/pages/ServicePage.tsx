interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

function ServiceCard({ title, description, imageSrc }: ServiceCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="aspect-video relative mb-4">
        <img
          src={imageSrc}
          alt={title}
          className="object-cover rounded-lg w-full h-72"
        />
      </div>
      <h3 className="text-[#006400] font-semibold text-xl mb-2 text-center">
        {title}
      </h3>
      <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export default function ServiceArea() {
  const services = [
    {
      title: 'Mining',
      description:
        'A specialized team with experience in the mining industry, which allows us to offer comprehensive and efficient solutions with our products and services. We work hand in hand with our clients with simple solutions to complex logistic challenges.',
      imageSrc: './assets/images/services/service1.png',
    },
    {
      title: 'Construction',
      description:
        'Our expertise in construction projects has allowed us to have an in-depth knowledge of the needs of our customers. We understand the importance of precision in our trade to meet the requirements that the industry demands.',
      imageSrc: './assets/images/services/service2.png',
    },
    {
      title: 'Petrochemical',
      description:
        'Safety is especially important in Oil & Gas supply chain. Chavda can assist you in managing your supply chain with our tailored services, from the safe and efficient transportation of oil & gas products.',
      imageSrc: './assets/images/services/service3.png',
    },
    {
      title: 'Agricultural',
      description:
        'Through partnerships with global manufacturers, we specialize in sourcing, procuring, and moving agricultural and allied products. Our expertise allows us delivering quality products efficiently and at the best possible prices, meeting farmer delivery needs.',
      imageSrc: './assets/images/services/service4.png',
    },
    {
      title: 'Hospitality',
      description:
        'Regulatory safety and compliance combined with tailored solutions, unique product integrity requirements, and complex global healthcare supply chain standards are met with precision, reliability, and adherence to the highest quality standards.',
      imageSrc: './assets/images/services/service5.png',
    },
    {
      title: 'Medical',
      description:
        'Chavda logistics offers customized transport and integrated logistics solutions for the Healthcare industry. Products are handled according to strict standards that the management of medical/pharmaceutical products require/follow respectively.',
      imageSrc: './assets/images/services/service6.png',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-[#006400] py-16 text-center">
        <h1 className="text-white text-5xl font-bold">Service Area</h1>
      </header>

      <div
        className="bg-cover bg-center px-4 lg:px-12"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('./assets/images/about/about-background.jpeg')`,
        }}
      >
        <main className="mx-auto py-8">
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          {/* Mission Statement */}

          <div className="mb-12">
            <p className="lg:text-3xl text-xl font-semibold text-black text-center mb-2">
              To be the leading supplier and freight specialist in mining,
              construction, petrochemicals, agriculture and allied industry in
              Africa.
            </p>
            <div className="w-64 h-1 bg-red-500 mx-auto mb-4"></div>
            <p className="text-black text-left leading-relaxed">
              Expanding beyond our origins in the mining sector, we now proudly
              serve the construction, agricultural, and petrochemical
              industries, delivering tailored solutions to meet diverse
              operational needs. Our expertise lies in sourcing and supplying an
              extensive range of products, from perishables and non-perishables
              to specialized equipment and materials essential for mining,
              construction, agriculture, and petrochemicals. With a commitment
              to quality, reliability, and comprehensive service, we are your
              trusted partner in ensuring seamless supply chain management and
              operational excellence across industries.
            </p>
          </div>

          <div className="mb-12">
            <p className="lg:text-3xl text-xl font-semibold text-black text-center mb-2">
              Driving force in the Freight & Logistics industry
            </p>
            <div className="w-64 h-1 bg-red-500 mx-auto mb-4"></div>
            <p className="text-black text-left leading-relaxed">
              Chavda International has grown from humble beginnings to become a
              driving force in the freight industry. We attribute our success to
              a commitment to maximum efficiency and personalized service
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
