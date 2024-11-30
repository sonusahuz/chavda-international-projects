import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
const ContactCommon = () => {
  return (
    <div>
      <form className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="Enter Your Name"
            className=" rounded-md"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter Your Email"
            className=" rounded-md"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="Enter Your Phone Number"
            className=" rounded-md"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="service">Select Service</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select -" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="consulting">Consulting</SelectItem>
              <SelectItem value="development">Development</SelectItem>
              <SelectItem value="design">Design</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Enter Your Message"
            className="min-h-[150px]"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 h-12"
        >
          Submit Now
        </Button>
      </form>
    </div>
  );
};

export default ContactCommon;
