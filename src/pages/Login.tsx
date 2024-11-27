import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { RiGoogleFill } from 'react-icons/ri';

export default function LoginPage() {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2  bg-gray-50">
      {/* Form Section */}
      {/* Image Section */}
      <div className="flex items-center justify-center">
        <img
          src="./assets/images/signup/login-image.png"
          alt="Login"
          className="w-full max-w-md object-contain lg:max-w-lg"
        />
      </div>
      <div className="flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-sm space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">
              Welcome Back{' '}
              <span role="img" aria-label="waving hand">
                👋
              </span>
            </h1>
            <p className="text-muted-foreground">
              Today is a new day. It&apos;s your day. You shape it.
            </p>
            <p className="text-sm text-muted-foreground">
              Sign in to start managing your projects.
            </p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Email
              </label>
              <Input
                id="email"
                placeholder="Example@email.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Password
              </label>
              <Input id="password" type="password" />
            </div>
            <div className="text-right text-sm">
              <Link className="text-blue-500 hover:underline" to="#">
                Forgot Password?
              </Link>
            </div>
            <Button
              className="w-full bg-[#0B3B3C] hover:bg-[#0B3B3C]/90"
              type="submit"
            >
              Sign in
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or
                </span>
              </div>
            </div>
            <Button
              variant={'secondary'}
              className="flex w-full items-center justify-center"
            >
              <RiGoogleFill className="mr-2 opacity-60" size={16} />
              Login with Google
            </Button>
            <div className="text-center text-sm">
              Don&apos;t you have an account?{' '}
              <Link className="text-blue-500 hover:underline" to="/signup">
                Sign up
              </Link>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            © 2023 ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </div>
  );
}
