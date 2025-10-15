import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function HavanaRussianTabs() {
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
                Колониальная Гавана + Дом-Музей Хемингуэя
              </CardTitle>
              <CardDescription className="text-base sm:text-lg leading-relaxed text-pretty">
                Вы сможете посетить все места, предлагаемые в экскурсии
                “Колониальная Гавана”, а также насладиться экскурсией в Финка
                Вихия, знаменитый дом Хемингуэя на окраине города. Это место с
                богатой историей, где вы сможете узнать, как жил писатель, и
                увидеть своими глазами места, вдохновлявшие его на создание
                великих произведений
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
                Гавана+ закат
              </CardTitle>
              <CardDescription className="text-base sm:text-lg leading-relaxed text-pretty">
                Вы сможете посетить все места, предлагаемые в экскурсии
                “Колониальная Гавана”, а также насладиться прогулкой по самым
                живописным уголкам города. Кроме того, вы можете отложить выезд
                из Гаваны, чтобы насладиться прекрасным гаванским закатом —
                моментом, когда город окрашивается в золотые тона и наполняется
                неповторимой атмосферой тепла и романтики.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <img
                src="/images/havana-tours/sunset.jpg"
                alt="Havana cañonazo"
                className="w-full h-64 sm:h-72 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
              />
              <img
                src="/images/havana-tours/sunset2.jpg"
                alt="Havana cañonazo"
                className="w-full h-64 sm:h-72 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
              />
              <img
                src="/images/havana-tours/sunset3.jpg"
                alt="Havana cañonazo"
                className="w-full h-64 sm:h-72 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
              />
              <img
                src="/images/havana-tours/sunset4.jpg"
                alt="Havana cañonazo"
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
                Вы сможете посетить все места, предлагаемые в экскурсии
                “Колониальная Гавана”, а также насладиться прогулкой по самым
                живописным уголкам города.
                <br />
                Станьте свидетелем знаменитой церемонии «Каньонасо» — яркого
                вечернего шоу, которое проходит ежедневно на крепости Ла
                Кабанья. В 8 вечера начинается красочный парад солдат в
                исторической форме, а ровно в 9 небо над Гаваной озаряется
                мощным выстрелом пушки! Эта традиция уходит корнями в
                колониальные времена и сегодня стала настоящим символом города.
                <br />
                Кроме того, вы посетите легендарное кладбище Колона,
                таинственный Гаванский лес и многие другие удивительные места —
                всё по вашему выбору!
                <br />
                Откройте очарование Гаваны — города, где история оживает на
                каждом шагу!
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
                src="/images/havana-tours/08-1140.jpg"
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
