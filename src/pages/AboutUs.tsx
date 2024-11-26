export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <header className="bg-[#006400] py-16 text-center">
        <h1 className="text-white text-5xl font-bold">About Us</h1>
      </header>

      <div
        className="bg-cover bg-center px-4 lg:px-12"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('./assets/images/about/about-background.jpeg')`,
        }}
      >
        <main className="mx-auto py-8">
          {/* Subheading */}
          <div className="text-center mb-8">
            <h2 className="text-[#006400] text-3xl font-bold mb-2">
              Global Leaders in Procurement and Freight
            </h2>
            <div className="w-64 h-1 bg-red-500 mx-auto"></div>
            <p className="text-[#006400] text-xl mt-4">
              25 years of Procurement and Logistics
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="space-y-6 text-black">
              <p className="leading-relaxed">
                Chavda International (Pty) Ltd., founded in 1999, embarked on
                its journey as a dedicated supplier of mining equipment and
                services, primarily catering to the needs of the African market.
                In its early years, the company focused predominantly on Angola,
                a region that presented unique opportunities and challenges.
                This targeted approach enabled Chavda International to gain
                extensive expertise and develop a deep understanding of the
                diverse demands of the mining sector, establishing itself as a
                trusted name in the industry.
              </p>
              <p className="leading-relaxed">
                As the company grew and honed its capabilities, it progressively
                expanded its footprint across the African continent. Today,
                Chavda International serves a wide range of markets, including
                Mozambique, Ghana, Guinea, Zambia, and Zimbabwe, each with its
                own distinctive operational landscape. Building on its solid
                foundation and years of experience, the company continues to set
                its sights on further growth, actively targeting additional
                countries across Sub-Saharan Africa. This strategic expansion
                reflects its commitment to delivering quality products and
                services while contributing to the development of the mining
                sector throughout the region.
              </p>
            </div>

            {/* Partner Logos Grid */}
            <div className="rounded-lg">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.youtube.com/embed/of5hyzxRB7c" // Replace with your video URL
                  title="YouTube video player"
                  frameBorder="0"
                  className="w-[340px] h-[250px] lg:w-[560px] lg:h-[315px] rounded-lg object-cover"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
