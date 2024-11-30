import ContactCommon from '@/components/custom/ContactCommon';

export default function ScheduleMeeting() {
  return (
    <div>
      {/* Header */}
      <header className="bg-[#006400] py-16 text-center">
        <h1 className="text-white text-5xl font-bold">Schedule-Meeting</h1>
      </header>

      <div
        className="bg-cover bg-center px-4 md:px-5 lg:px-10 xl:px-24"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('./assets/images/about/about-background.jpeg')`,
        }}
      >
        <main className="mx-auto py-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-[400px] md:h-auto">
                <img
                  src="./assets/images/contact/schedule-meeting.jpg"
                  alt="Sharpening service demonstration showing sparks from grinding wheel"
                  className="rounded-2xl object-cover w-full h-full"
                />
              </div>
              <div className="bg-white p-4 lg:p-8 rounded-3xl shadow-xl border">
                <ContactCommon />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
