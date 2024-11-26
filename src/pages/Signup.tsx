import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div>
      {/* Header */}
      <header className="bg-[#006400] text-center">
        <div className="flex items-center py-16 lg:py-0 px-4 lg:px-12 justify-between">
          <h1 className="text-white text-5xl text-center lg:text-left font-bold">
            Sign-up
          </h1>
          <img
            src="./assets/images/signup/3-removebg-preview.png"
            alt="Chavda International Logo"
            className=" hidden lg:block"
            width={250}
          />
        </div>
      </header>

      <div
        className="bg-cover bg-center px-4 lg:px-12"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('./assets/images/about/about-background.jpeg')`,
        }}
      >
        <main className="mx-auto py-8">
          <div className="max-w-3xl mx-auto">
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                {/* Left Column */}
                <div className="bg-[#006400] p-8 text-white">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-semibold text-center">
                      Looks like you&apos;re new here!
                    </h2>
                    <p className="text-center">
                      Sign up with your mobile number to get started
                    </p>
                  </div>
                  <div className="mt-8 flex justify-center">
                    <img
                      src="./assets/images/signup/1-removebg-preview.png"
                      alt="Login illustration"
                      width={300}
                      height={300}
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="p-8">
                  <form className="space-y-6">
                    <div>
                      <Input
                        type="text"
                        placeholder="Enter Your Name"
                        className="w-full p-4 text-lg border-b-2 border-gray-300 focus:border-green-600"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Enter Your E-mail"
                        className="w-full p-4 text-lg border-b-2 border-gray-300 focus:border-green-600"
                      />
                    </div>
                    <div>
                      <Input
                        type="tel"
                        placeholder="Enter Your Mobile No."
                        className="w-full p-4 text-lg border-b-2 border-gray-300 focus:border-green-600"
                      />
                    </div>
                    <div>
                      <Input
                        type="password"
                        placeholder="Enter Your Password"
                        className="w-full p-4 text-lg border-b-2 border-gray-300 focus:border-green-600"
                      />
                    </div>
                    <Button className="w-full bg-[#006400] hover:bg-[#005400] text-white text-lg py-6">
                      Continue
                    </Button>
                    <div className="text-center mt-6">
                      <Link
                        to="/login"
                        className="text-[#006400] hover:text-[#005400] text-lg font-semibold"
                      >
                        Existing User Login
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
