import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function CienfuegosTrinidadRussianTabs() {
  return (
    <div className="w-full max-w-7xl mx-auto flex-col gap-6 px-4 py-8 hidden md:block">
      <Tabs defaultValue="flamingos" className="w-full">
        <TabsList className="w-full grid grid-cols-1 sm:grid-cols-2 h-auto gap-2 bg-muted p-2">
          <TabsTrigger
            value="flamingos"
            className="text-sm sm:text-base whitespace-normal h-auto py-3"
          >
            Тринидад + Сьенфуэгос + фламинго
          </TabsTrigger>
          <TabsTrigger
            value="nicho"
            className="text-sm sm:text-base whitespace-normal h-auto py-3"
          >
            Тринидад + Сьенфуэгос + Эль-Ничо
          </TabsTrigger>
        </TabsList>

        <TabsContent value="flamingos" className="mt-6">
          <Card className="border-2 shadow-lg">
            <CardHeader className="space-y-3">
              <CardTitle className="text-2xl sm:text-3xl font-bold text-balance">
                Тринидад + Сьенфуэгос + фламинго
              </CardTitle>
              <CardDescription className="text-base sm:text-lg leading-relaxed text-pretty">
                Во время этого тура вы познакомитесь с историческими городами Тринидад с его очаровательным колониальным центром и Сьенфуэгос, известный своей неоклассической архитектурой и прекрасной набережной. Вы также можете сделать свои впечатления еще более особенными, посетив лагуну Гуаранока и получив возможность, катаясь на лодке, увидеть фламинго в их естественной среде обитания. Обратите внимание, что отправление обычно происходит рано, между 5 и 6 часами утра, чтобы максимально использовать день. Это полное знакомство с кубинской культурой, природой и красотой.
                <h2 className="text-2xl lg:text-2xl font-bold text-gray-900 mb-6 pt-3">
                  Места для посещения:
                </h2>
                <ul className="space-y-3 lg:space-y-4">
                  <li className="flex items-start space-x-3 text-gray-700 leading-relaxed">
                    '
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm lg:text-base">
                      Катание на лодке по лагуне Гуанарока, где вы увидите
                      розовых фламинго в их естественной среде обитания!
                      Насладитесь уникальной средой мангровых зарослей и
                      экзотических птиц.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3 text-gray-700 leading-relaxed">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm lg:text-base">
                      {" "}
                      Город Тринидад расположен в провинции Санкти-Спиритус. Это
                      один из самых старых и лучше всего сохранившихся городов
                      страны.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3 text-gray-700 leading-relaxed">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm lg:text-base">
                      В Тринидаде мы посетим исторический центр, главную
                      площадь, городской музей, городскую церковь и другие
                      интересные места.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3 text-gray-700 leading-relaxed">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm lg:text-base">
                      {" "}
                      Мы также посетим провинцию Сьенфуэгос, известную своей
                      красивой набережной, бухтой, неоклассической архитектурой
                      и яркой культурной жизнью.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3 text-gray-700 leading-relaxed">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm lg:text-base">
                      Панорамная экскурсия по набережной в Сьенфуэгосе, где вы
                      сможете насладиться прекрасными видами, а также увидеть
                      бейсбольный стадион, больницу и несколько важных мест
                      провинции.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3 text-gray-700 leading-relaxed">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm lg:text-base">
                      Отель Jawa: расположен в центре города и имеет
                      архитектуру, отражающую колониальный стиль этого района.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3 text-gray-700 leading-relaxed">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm lg:text-base">
                      Мы также посетим центр города, центральный парк, бульвар
                      Сьенфуэгоса, театр Томаса Терри и другие интересные места.
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
                Тринидад + Сьенфуэгос + Эль-Ничо
              </CardTitle>
              <CardDescription className="text-base sm:text-lg leading-relaxed text-pretty">
                Во время этой экскурсии вы познакомитесь с историческими городами Тринидад с его очаровательным колониальным центром и Сьенфуэгос, известный своей неоклассической архитектурой и красивой набережной. У вас также будет возможность отправиться на природу, чтобы увидеть впечатляющие водопады Ничо и купаться в их кристально чистой воде.  Пожалуйста, обратите внимание, что выезд обычно ранний, между 5 и 6 утра, чтобы максимально использовать день. Это полное знакомство с кубинской культурой, природой и красотой.
                <h2 className="text-2xl lg:text-2xl font-bold text-gray-900 mb-6 pt-3">
                  Места для посещения:
                </h2>
                <ul className="space-y-3 lg:space-y-4">
                  <li className="flex items-start space-x-3 text-gray-700 leading-relaxed">
                    '
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm lg:text-base">
                      Эль-Ничо: известен своими впечатляющими горными пейзажами
                      и пышной растительностью. Там у вас будет возможность
                      купаться в кристально чистых водопадах и природных
                      бассейнах.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3 text-gray-700 leading-relaxed">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm lg:text-base">
                      {" "}
                      Город Тринидад расположен в провинции Санкти-Спиритус. Это
                      один из самых старых и лучше всего сохранившихся городов
                      страны.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3 text-gray-700 leading-relaxed">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm lg:text-base">
                      В Тринидаде мы посетим исторический центр, главную
                      площадь, городской музей, городскую церковь и другие
                      интересные места.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3 text-gray-700 leading-relaxed">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm lg:text-base">
                      {" "}
                      Мы также посетим провинцию Сьенфуэгос, известную своей
                      красивой набережной, бухтой, неоклассической архитектурой
                      и яркой культурной жизнью.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3 text-gray-700 leading-relaxed">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm lg:text-base">
                      Панорамная экскурсия по набережной в Сьенфуэгосе, где вы
                      сможете насладиться прекрасными видами, а также увидеть
                      бейсбольный стадион, больницу и несколько важных мест
                      провинции.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3 text-gray-700 leading-relaxed">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm lg:text-base">
                      Отель Jawa: расположен в центре города и имеет
                      архитектуру, отражающую колониальный стиль этого района.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3 text-gray-700 leading-relaxed">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm lg:text-base">
                      Мы также посетим центр города, центральный парк, бульвар
                      Сьенфуэгоса, театр Томаса Терри и другие интересные места.
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
