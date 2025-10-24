import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function CienfuegosTrinidadTabs() {
  return (
    <div className="w-full max-w-7xl mx-auto flex-col gap-6 px-4 py-8 hidden md:block">
      <Tabs defaultValue="flamingos" className="w-full">
        <TabsList className="w-full grid grid-cols-1 sm:grid-cols-2 h-auto gap-2 bg-muted p-2">
          <TabsTrigger
            value="flamingos"
            className="text-sm sm:text-base whitespace-normal h-auto py-3"
          >
            Trinidad + Cienfuegos + Flamingos
          </TabsTrigger>
          <TabsTrigger
            value="nicho"
            className="text-sm sm:text-base whitespace-normal h-auto py-3"
          >
            Trinidad + Cienfuegos + El Nicho
          </TabsTrigger>
        </TabsList>

        <TabsContent value="flamingos" className="mt-6">
          <Card className="border-2 shadow-lg">
            <CardHeader className="space-y-3">
              <CardTitle className="text-2xl sm:text-3xl font-bold text-balance">
                Trinidad + Cienfuegos + Flamingos
              </CardTitle>
              <CardDescription className="text-base sm:text-lg leading-relaxed text-pretty">
                On this excursion you will explore the historic cities of
                Trinidad, with its charming colonial center, and Cienfuegos,
                known for its neoclassical architecture and beautiful promenade.
                You can also make your experience even more special by visiting
                the Guararanoca Lagoon for a boat ride to see flamingos in their
                natural habitat. Please note that departures from the hotel are
                usually early between 5 and 6 am to make the most of the day.
                This is a complete introduction to Cuban culture, nature and
                beauty.
                <h2 className="text-2xl lg:text-2xl font-bold text-gray-900 mb-6 pt-3">
                  Places to visit:
                </h2>
                <ul className="space-y-3 lg:space-y-4">
                  <li className="flex items-start space-x-3 text-gray-700 leading-relaxed">
                    '
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm lg:text-base">
                      Boat ride on the Guanaroca Lagoon, where you can see pink
                      flamingos in their natural habitat. Enjoy the unique
                      environment of mangroves and exotic birds.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3 text-gray-700 leading-relaxed">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm lg:text-base">
                      {" "}
                      The city of Trinidad is located in the province of Sancti
                      Spiritus. It is one of the oldest and best conserved
                      cities in the country.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3 text-gray-700 leading-relaxed">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm lg:text-base">
                      In Trinidad we will visit the historical center, the Major
                      square, the museum of the city, the local church, and
                      other interesting places.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3 text-gray-700 leading-relaxed">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm lg:text-base">
                      {" "}
                      We also visit the province of Cienfuegos known for its
                      beautiful boardwalk, its bay, its neoclassical
                      architecture and its vibrant cultural life.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3 text-gray-700 leading-relaxed">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm lg:text-base">
                      Panoramic tour along the Cienfuegos boardwalk, where you
                      can enjoy beautiful views and see the baseball stadium,
                      the hospital and several important places in the province.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3 text-gray-700 leading-relaxed">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm lg:text-base">
                      Hotel Jawa : located in the center of the city with an
                      architecture that reflects the colonial style of the area.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3 text-gray-700 leading-relaxed">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm lg:text-base">
                      We will visit the city center, the central park, the
                      Cienfuegos boulevard, the Tomás Terry theater and other
                      interesting places.
                    </span>
                  </li>
                </ul>
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <img
                src="/images/cienfuegos-trinidad/flamingos.jpeg"
                alt="flamingos"
                className="w-full h-64 sm:h-72 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
              />
              <img
                src="/images/cienfuegos-trinidad/Trinidad-plaza-mayor.avif"
                alt="Plaza Mayor"
                className="w-full h-64 sm:h-72 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
              />
              <img
                src="/images/cienfuegos-trinidad/Cienfuegos-parque-marti.jpg"
                alt="Parque Marti"
                className="w-full h-64 sm:h-72 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
              />
              <img
                src="/images/cienfuegos-trinidad/Trinidad.jpg"
                alt="Trinidad"
                className="w-full h-64 sm:h-72 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
              />
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="nicho" className="mt-6">
          <Card className="border-2 shadow-lg">
            <CardHeader className="space-y-3">
              <CardTitle className="text-2xl sm:text-3xl font-bold text-balance">
                Trinidad + Cienfuegos + El Nicho
              </CardTitle>
              <CardDescription className="text-base sm:text-lg leading-relaxed text-pretty">
                During this tour you will explore the historic cities of
                Trinidad, with its charming colonial center, and Cienfuegos,
                known for its neoclassical architecture and beautiful promenade.
                You will also have the opportunity to go into nature to see the
                impressive Nicho Waterfalls and swim in its crystal clear
                waters. Please note that departure is usually early, between 5
                and 6 am, to make the most of the day. This is a complete
                introduction to Cuban culture, nature and beauty.
                <h2 className="text-2xl lg:text-2xl font-bold text-gray-900 mb-6 pt-3">
                  Places to visit:
                </h2>
                <ul className="space-y-3 lg:space-y-4">
                  <li className="flex items-start space-x-3 text-gray-700 leading-relaxed">
                    '
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm lg:text-base">
                      El Nicho: known for its impressive mountain scenery and
                      lush vegetation. There you will have the opportunity to
                      bathe in its crystalline waterfalls and natural pools.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3 text-gray-700 leading-relaxed">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm lg:text-base">
                      {" "}
                      The city of Trinidad is located in the province of Sancti
                      Spiritus. It is one of the oldest and best conserved
                      cities in the country.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3 text-gray-700 leading-relaxed">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm lg:text-base">
                      In Trinidad we will visit the historical center, the Major
                      square, the museum of the city, the local church, and
                      other interesting places.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3 text-gray-700 leading-relaxed">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm lg:text-base">
                      {" "}
                      We also visit the province of Cienfuegos known for its
                      beautiful boardwalk, its bay, its neoclassical
                      architecture and its vibrant cultural life.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3 text-gray-700 leading-relaxed">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm lg:text-base">
                      Panoramic tour along the Cienfuegos boardwalk, where you
                      can enjoy beautiful views and see the baseball stadium,
                      the hospital and several important places in the province.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3 text-gray-700 leading-relaxed">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm lg:text-base">
                      Hotel Jawa : located in the center of the city with an
                      architecture that reflects the colonial style of the area.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3 text-gray-700 leading-relaxed">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm lg:text-base">
                      We will visit the city center, the central park, the
                      Cienfuegos boulevard, the Tomás Terry theater and other
                      interesting places.
                    </span>
                  </li>
                </ul>
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <img
                src="/images/cienfuegos-trinidad/Trinidad-museo-romantico.jpg"
                alt="hemingway"
                className="w-full h-64 sm:h-72 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
              />
              <img
                src="/images/cienfuegos-trinidad/Trinidad-Cuba-Church-Tower-Dusk-1600x1013.webp"
                alt="Church"
                className="w-full h-64 sm:h-72 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
              />
              <img
                src="/images/cienfuegos-trinidad/nicho2.jpeg"
                alt="hemingway"
                className="w-full h-64 sm:h-72 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
              />
              <img
                src="/images/cienfuegos-trinidad/El-Nicho-Waterfalls.webp"
                alt="hemingway"
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
