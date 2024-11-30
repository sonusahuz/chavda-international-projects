import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
} from 'lucide-react';
import ContactCommon from '@/components/custom/ContactCommon';

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <header className="bg-[#006400] py-16 lg:py-0 text-center">
        <div className="flex items-center md:justify-between justify-center px-4 md:px-5 lg:px-10 xl:px-24 flex-wrap">
          <h1 className="text-white text-5xl font-bold">CONTACT US</h1>
          <img
            className="h-60 hidden md:block"
            src="./assets/images/contact/contact-image.png"
            alt="Chavda International"
          />
        </div>
      </header>

      <div>
        <h1 className="text-center mx-auto mb-2 mt-6 text-4xl font-bold">
          GET IN TOUCH{' '}
        </h1>
        <div className="w-20 h-1 bg-green-800 mx-auto"></div>
      </div>

      <div className="mx-auto p-6 px-4 md:px-5 lg:px-10 xl:px-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information Section */}
          <div className="space-y-8 border shadow-xl rounded-3xl p-4 lg:p-8 h-[760px]">
            <h1 className="text-4xl font-bold text-green-800">
              CONTACT INFORMATION
            </h1>

            <p className="text-xl leading-relaxed">
              Connect with Chavda International today forsharpening services and
              bulk product requirements—let's meet your needs with precision
              andefficiency!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-green-800" />
                <span>
                  Ext 6, Georgian Place 18 Southway RdKelvin, Eastgate, Sandton,
                  2146
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-green-800" />
                <a href="mailto:sales@chavda.com" className="hover:underline">
                  sales@chavda.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-6 w-6 text-green-800" />
                <a href="tel:0112620135" className="hover:underline">
                  0112620135
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="#" className="text-blue-500 hover:text-blue-600">
                <Facebook className="h-8 w-8" />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-600">
                <Instagram className="h-8 w-8" />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-600">
                <Linkedin className="h-8 w-8" />
              </a>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white p-4 lg:p-8 rounded-3xl shadow-xl border">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <ContactCommon />
          </div>
        </div>
      </div>
      <iframe
        className="w-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.3503591309736!2d-79.9306247241678!3d40.50970797142475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834f2af9944a2b5%3A0xbc4cf66abecda82d!2s18%20Georgian%20Pl%2C%20Pittsburgh%2C%20PA%2015215%2C%20USA!5e1!3m2!1sen!2sin!4v1732937338744!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>
    </>
  );
}
