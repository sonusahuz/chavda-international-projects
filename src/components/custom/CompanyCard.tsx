const CompanyCard = () => {
  const companyArr = [
    {
      id: 1,
      name: 'Company 1',
      image: './assets/images/company/company1.png',
    },
    {
      id: 2,
      image: './assets/images/company/company2.png',
    },
    {
      id: 3,
      image: './assets/images/company/company3.png',
    },
    {
      id: 4,
      image: './assets/images/company/company4.png',
    },
    {
      id: 5,
      image: './assets/images/company/company5.png',
    },
    {
      id: 6,
      image: './assets/images/company/company6.png',
    },
    {
      id: 7,
      image: './assets/images/company/company7.png',
    },
    {
      id: 8,
      image: './assets/images/company/company8.webp',
    },
  ];
  return (
    <div className="grid px-4 md:px-5 mx-auto text-center lg:px-10 xl:px-24 grid-cols-2 scroll-container md:grid-cols-4 lg:grid-cols-7 gap-8 py-4 items-center justify-items-center">
      {companyArr.map((company) => (
        <img
          key={company.id}
          src={company.image}
          alt={`Bottom logo ${company.id + 1}`}
          width={120}
          height={40}
          className="max-w-[120px] h-auto grayscale mx-auto"
        />
      ))}
    </div>
  );
};

export default CompanyCard;
