import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div>
      {/* Header */}
      <header className="bg-[#006400] text-center">
        <div className="flex items-center py-16 lg:py-0 px-4 lg:px-12 justify-between">
          <h1 className="text-white text-5xl text-center lg:text-left font-bold">
            Login
          </h1>
          <img
            src="./assets/images/signup/2-removebg-preview.png"
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
                  <div className="space-y-4 flex items-center justify-items-end flex-col">
                    <p className="text-xl font-semibold text-center">
                      Welcome back! Log in to continue shopping.
                    </p>
                    <img
                      src="https://chavda.com/wp-content/uploads/2023/07/logo_chavda_w_g.png"
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

                    <Button className="w-full bg-[#006400] hover:bg-[#005400] text-white text-lg py-6">
                      Submit
                    </Button>
                    <div className="text-center mt-6">
                      <Link
                        to="/forget-password"
                        className="text-[#006400] hover:text-[#005400] text-lg font-normal"
                      >
                        Forget Password
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
