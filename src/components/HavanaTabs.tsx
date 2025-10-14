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
    <div className="w-full max-w-7xl mx-auto flex-col gap-6 px-4 py-8 hidden md:block">
      <Tabs defaultValue="hemingway" className="w-full">
        <TabsList className="w-full grid grid-cols-1 sm:grid-cols-3 h-auto gap-2 bg-muted p-2">
          <TabsTrigger
            value="hemingway"
            className="text-sm sm:text-base whitespace-normal h-auto py-3"
          >
            Colonial Havana + Hemingway House-Museum
          </TabsTrigger>
          <TabsTrigger
            value="sunset"
            className="text-sm sm:text-base whitespace-normal h-auto py-3"
          >
            Havana + Sunset
          </TabsTrigger>
          <TabsTrigger
            value="cañonazo"
            className="text-sm sm:text-base whitespace-normal h-auto py-3"
          >
            Cañonazo
          </TabsTrigger>
        </TabsList>

        <TabsContent value="hemingway" className="mt-6">
          <Card className="border-2 shadow-lg">
            <CardHeader className="space-y-3">
              <CardTitle className="text-2xl sm:text-3xl font-bold text-balance">
                Colonial Havana + Hemingway House-Museum
              </CardTitle>
              <CardDescription className="text-base sm:text-lg leading-relaxed text-pretty">
                You will be able to visit all the sites offered on the Colonial
                Havana tour and also enjoy a guided tour to Finca Vihia,
                Hemingway&#39;s famous house on the outskirts of the city. This
                place rich in history, where you can learn how the writer lived
                and see for yourself the places that inspired his great works.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <img
                src="/images/havana-tours/hemingway.jpg"
                alt="hemingway"
                className="w-full h-64 sm:h-72 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
              />
              <img
                src="/images/havana-tours/hemingway2.jpg"
                alt="hemingway"
                className="w-full h-64 sm:h-72 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
              />
              <img
                src="/images/havana-tours/hemingway3.jpg"
                alt="hemingway"
                className="w-full h-64 sm:h-72 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
              />
              <img
                src="/images/havana-tours/hemingway4.jpg"
                alt="hemingway"
                className="w-full h-64 sm:h-72 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
              />
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="sunset" className="mt-6">
          <Card className="border-2 shadow-lg">
            <CardHeader className="space-y-3">
              <CardTitle className="text-2xl sm:text-3xl font-bold text-balance">
                Havana + Sunset
              </CardTitle>
              <CardDescription className="text-base sm:text-lg leading-relaxed text-pretty">
                You will be able to visit all the places included in the
                “Colonial Havana” tour and enjoy a walk through the most
                picturesque corners of the city. In addition, if you wish, you
                can delay your departure from Havana a bit to enjoy the
                beautiful Havana sunset — a moment when the city is bathed in
                golden tones and filled with a unique atmosphere of warmth and
                romance.
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

        <TabsContent value="cañonazo" className="mt-6">
          <Card className="border-2 shadow-lg">
            <CardHeader className="space-y-3">
              <CardTitle className="text-2xl sm:text-3xl font-bold text-balance">
                Cañonazo
              </CardTitle>
              <CardDescription className="text-base sm:text-lg leading-relaxed text-pretty">
                Will be able to visit all the places included in the “Colonial
                Havana” tour and enjoy a walk through the most picturesque
                corners of the city. Experience the legendary “Cañonazo”
                Ceremony, a spectacular evening tradition held nightly at La
                Cabaña Fortress. Watch as soldiers in historic uniforms march
                through the fort starting at 8 p.m., culminating at 9 p.m. with
                a powerful cannon shot that lights up the Havana sky — a custom
                that dates back to colonial times. You&#39;ll also explore
                iconic landmarks such as the majestic Colón Cemetery, the lush
                Havana Forest, and many other fascinating sites — all tailored
                to your interests. Immerse yourself in Havana&#39;s living
                history and feel the heartbeat of a city like no other!
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <img
                src="/images/havana-tours/cañonazo.jpg"
                alt="Havana cañonazo"
                className="w-full h-64 sm:h-72 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
              />
              <img
                src="/images/havana-tours/canonazo4.jpeg"
                alt="Havana cañonazo"
                className="w-full h-64 sm:h-72 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
              />
              <img
                src="/images/havana-tours/canonazo5.jpeg"
                alt="Havana cañonazo"
                className="w-full h-64 sm:h-72 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
              />
               <img
                src="/images/havana-tours/canonazo2.jpg"
                alt="Havana cañonazo"
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
