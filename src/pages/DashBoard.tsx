import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Package, User, LogOut } from 'lucide-react';

export default function UserProfile() {
  return (
    <div className="flex min-h-screen bg-gray-50/50 gap-6 px-4 md:px-5 lg:px-10 xl:px-24 flex-wrap">
      {/* Sidebar */}
      <div className="w-80 bg-white">
        <div className="flex items-center gap-3 mb-8 border bg-white rounded-lg p-2">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>RD</AvatarFallback>
          </Avatar>
          <div>
            <div className="text-sm text-muted-foreground">Hello,</div>
            <div className="font-medium">Ravinder Dhilloon</div>
          </div>
        </div>

        <nav className="space-y-2 border bg-white rounded-lg p-2">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Package className="h-4 w-4" />
            MY ORDERS
          </Button>
          <hr />
          <Button variant="ghost" className="w-full justify-start gap-2">
            <User className="h-4 w-4" />
            ACCOUNT SETTINGS
          </Button>
          <div className="">
            <div className="text-blue-600 font-medium px-3 py-2">
              Profile Information
            </div>
            <Button variant="ghost" className="w-full justify-start px-3">
              Manage Addresses
            </Button>
          </div>
          <hr />
          <Button
            variant="ghost"
            className="w-full justify-start gap-2 text-red-600"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <Card className="max-w-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium">Personal Information</h2>
            <Button variant="ghost" className="text-blue-600 h-auto p-0">
              Edit
            </Button>
          </div>

          <div className="grid gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Input
                  defaultValue="Ravinder"
                  className="bg-gray-50"
                  readOnly
                />
              </div>
              <div className="space-y-2">
                <Input
                  defaultValue="Dhilloon"
                  className="bg-gray-50"
                  readOnly
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Your Gender</Label>
              <RadioGroup defaultValue="male" className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" />
                  <Label htmlFor="male">Male</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="female" />
                  <Label htmlFor="female">Female</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label>Email Address</Label>
                <Button variant="ghost" className="text-blue-600 h-auto p-0">
                  Edit
                </Button>
              </div>
              <Input
                defaultValue="rs504510@gmail.com"
                className="bg-gray-50"
                readOnly
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label>Mobile Number</Label>
                <Button variant="ghost" className="text-blue-600 h-auto p-0">
                  Edit
                </Button>
              </div>
              <Input
                defaultValue="+918814930229"
                className="bg-gray-50"
                readOnly
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
