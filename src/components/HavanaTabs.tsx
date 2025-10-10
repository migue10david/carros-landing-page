import { AppWindowIcon, CodeIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function HavanaTabs() {
  return (
 <div className="flex w-full max-w-7xl mx-auto flex-col gap-6 px-4 py-8">
      <Tabs defaultValue="twilights" className="w-full">
        <TabsList className="w-full grid grid-cols-1 sm:grid-cols-3 h-auto gap-2 bg-muted p-2">
          <TabsTrigger value="twilights" className="text-sm sm:text-base whitespace-normal h-auto py-3">
            Havana Twilights
          </TabsTrigger>
          <TabsTrigger value="overnight" className="text-sm sm:text-base whitespace-normal h-auto py-3">
            Havana Overnight
          </TabsTrigger>
          <TabsTrigger value="days" className="text-sm sm:text-base whitespace-normal h-auto py-3">
            Havana city over 2 days
          </TabsTrigger>
        </TabsList>

        <TabsContent value="twilights" className="mt-6">
          <Card className="border-2 shadow-lg">
            <CardHeader className="space-y-3">
              <CardTitle className="text-2xl sm:text-3xl font-bold text-balance">Havana Twilights</CardTitle>
              <CardDescription className="text-base sm:text-lg leading-relaxed text-pretty">
                This version of the Havana city tour will allow you enjoying Havana during the day and also a bit of the
                night activities. We can take you to have dinner at a great cuban restaurant with live music and also
                enjoying the very popular and traditional cannon shot ceremony that has become a must for visitors. Also
                the scenery of the city in the night will offer a lifetime experience. This tour will be conducted until
                9:00 pm. For clients based in Varadero we will drop them off any moment in between 9:00 pm and 11:00 pm
                according to their preferences.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <img
                src="/images/havana-tours/cañonazo.jpg"
                alt="Havana cañonazo"
                className="w-full h-64 sm:h-72 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
              />
              <img
                src="/images/havana-tours/Malecon.jpg"
                alt="Havana malecón"
                className="w-full h-64 sm:h-72 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
              />
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="overnight" className="mt-6">
          <Card className="border-2 shadow-lg">
            <CardHeader className="space-y-3">
              <CardTitle className="text-2xl sm:text-3xl font-bold text-balance">Havana Overnight</CardTitle>
              <CardDescription className="text-base sm:text-lg leading-relaxed text-pretty">
                Very recommended for those that want to enjoy all the city has to offer with a more relaxed pace. You
                will get to enjoy Havana in the night with no time restrictions until midnight. With a big variety of
                options for the night life we can take you enjoying Tropicana Cabaret, Buena Vista Social Club show,
                Parisien Cabaret, Fabrica de Arte Cubano or simply walking Malecón in the night with its very intense
                cuban presence and relaxation activities.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <img
                src="/images/havana-tours/cañonazo.jpg"
                alt="Havana cañonazo"
                className="w-full h-64 sm:h-72 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
              />
              <img
                src="/images/havana-tours/Malecon.jpg"
                alt="Havana malecón"
                className="w-full h-64 sm:h-72 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
              />
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="days" className="mt-6">
          <Card className="border-2 shadow-lg">
            <CardHeader className="space-y-3">
              <CardTitle className="text-2xl sm:text-3xl font-bold text-balance">Havana city over 2 days</CardTitle>
              <CardDescription className="text-base sm:text-lg leading-relaxed text-pretty">
                One day will never be enough to cover all attractions such big city has so having two days will be
                perfect for you to enjoy as much as possible and can get the taste of our beautiful country. We suggest
                a Havana overnight tour until midnight on day 1 and a regular Havana city tour on day 2. For clients
                from Varadero the "casas particulares" (home stays) are perfect options with affordable prices and great
                conditions for an overnight stay in Havana.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <img
                src="/images/havana-tours/cañonazo.jpg"
                alt="Havana cañonazo"
                className="w-full h-64 sm:h-72 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
              />
              <img
                src="/images/havana-tours/Malecon.jpg"
                alt="Havana malecón"
                className="w-full h-64 sm:h-72 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
              />
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
