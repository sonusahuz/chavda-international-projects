import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function SharpenningService() {
  return (
    <div>
      {/* Header */}
      <header className="bg-[#006400] py-16 text-center">
        <h1 className="text-white text-5xl font-bold">Sharpening Service</h1>
      </header>

      <div
        className="bg-cover bg-center px-4 lg:px-12"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('./assets/images/about/about-background.jpeg')`,
        }}
      >
        <main className="mx-auto py-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 max-w-3xl mx-auto">
              <p className="text-xl">
                We provide expert sharpening services for Router Cutters,
                Circular Saw Blades, and Garden tools; just drop them off at our
                store and let us handle the rest.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-[#006400] text-white p-6 rounded-3xl">
                <CardContent className="p-4">
                  <h2 className="text-3xl mb-8">Estimate</h2>

                  <div className="space-y-6">
                    <div>
                      <label className="text-xl mb-2 block">
                        Quantity of Sawblades:
                      </label>
                      <Input
                        type="number"
                        placeholder="Quantity -"
                        className="bg-white text-black"
                      />
                    </div>

                    <div>
                      <label className="text-xl mb-2 block">
                        Number of Teeth:
                      </label>
                      <Select>
                        <SelectTrigger className="bg-white text-black">
                          <SelectValue placeholder="Select -" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="16T">16T</SelectItem>
                          <SelectItem value="24T">24T</SelectItem>
                          <SelectItem value="32T">32T</SelectItem>
                          <SelectItem value="40T">40T</SelectItem>
                          <SelectItem value="48T">48T</SelectItem>
                          <SelectItem value="56T">56T</SelectItem>
                          <SelectItem value="60T">60T</SelectItem>
                          <SelectItem value="72T">72T</SelectItem>
                          <SelectItem value="96T">96T</SelectItem>
                          <SelectItem value="108T">108T</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-xl mb-2 block">
                        Number of Missing Tips:
                      </label>
                      <Input
                        type="number"
                        placeholder="Number -"
                        className="bg-white text-black"
                      />
                    </div>

                    <Button className="w-full bg-red-500 hover:bg-red-600 text-white rounded-full py-6 text-lg">
                      Sawblade to Estimate →
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="relative h-[400px] md:h-auto">
                <img
                  src="./assets/images/services/sharpening-service.jpeg"
                  alt="Sharpening service demonstration showing sparks from grinding wheel"
                  className="rounded-2xl object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
