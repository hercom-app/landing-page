import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { Phone } from "@/components/phone";
import {
  BusinessIcon,
  LogosApple,
  LogosGooglePlay,
  PhoneCheckIcon,
  PremiumIcon,
  SecurityIcon,
  ThumbsUpIcon,
  VehicleTruckIcon,
} from "@/components/icons";
import { GlobeDemo } from "@/components/globe";
import { Faqs } from "@/components/faqs";
import Splash from "@/assets/splash.png";

export default function Home() {
  return (
    <>
      <main className="relative overflow-hidden bg-neutral-200 dark:bg-neutral-900 w-full min-h-screen -mt-16 pt-16 lg:min-h-[600px] lg:py-16 bg-[url(../assets/map-light.webp)] dark:bg-[url(../assets/map-dark.webp)] bg-cover">
        <div className="absolute z-[2] w-screen top-0 left-0 bg-gradient-to-b from-primary/75 to-transparent h-10" />
        <div className="section h-full">
          <div className="flex flex-col items-center justify-between h-full lg:flex-row lg:gap-20">
            <div className="flex flex-col max-lg:items-center max-[400px]:pt-10 pt-[10vh]">
              <h1
                className={title({
                  class: "max-lg:text-center lg:font-bold lg:text-balance",
                  size: "lg",
                })}
              >
                Cuida de ti y de los tuyos en un solo click
              </h1>
              <div
                className={subtitle({
                  class:
                    "mt-4 max-lg:hidden lg:text-sm lg:text-balance lg:max-w-xl",
                })}
              >
                HERCOM es la app que pone tu seguridad al frente, previniendo
                accidentes de tránsito causados por fatiga, estrés o incluso el
                alcohol. En un solo clic, puedes contar con un chofer de
                reemplazo y proteger a los tuyos, sin importar las
                circunstancias.
              </div>
              <div
                className={subtitle({
                  class: "mt-4 max-lg:text-center lg:text-sm",
                })}
              >
                Tu seguridad no espera. Actúa ahora y viaja con tranquilidad.
              </div>
              <div className="flex gap-3 mt-8">
                <Link
                  isExternal
                  className={buttonStyles({
                    color: "primary",
                    radius: "full",
                  })}
                  href={siteConfig.links.docs}
                >
                  Descargar la app ya!
                </Link>
                <Link
                  isExternal
                  className={buttonStyles({
                    radius: "full",
                  })}
                  href={siteConfig.links.github}
                >
                  Conoce a HERCOM
                </Link>
              </div>
            </div>
            <Phone image={Splash} />
          </div>
        </div>
      </main>
      <section className="section py-10 lg:py-20">
        <h2
          className={title({
            size: "xs",
            fullWidth: true,
            class: "text-center",
          })}
        >
          ¿Por qué elegir a HERCOM?
        </h2>
        <div className="flex flex-col items-center gap-10 pt-10 lg:gap-0 lg:flex-row lg:justify-between">
          {[
            {
              icon: <PhoneCheckIcon className="z-[2]" size={32} />,
              title: "Comodidad",
              description:
                "Un solo clic y tendrás un chofer a tu disposición, listo para ayudarte cuando más lo necesites.",
            },
            {
              icon: <SecurityIcon className="z-[2]" size={32} />,
              title: "Seguridad",
              description:
                "Protege a tus seres queridos con un chofer profesional que te lleva a tu destino de forma segura.",
            },
            {
              icon: <ThumbsUpIcon className="z-[2]" size={32} />,
              title: "Facilidad de uso",
              description:
                "Solicita un reemplazo rápido y fácil, con una interfaz intuitiva que no te hará perder tiempo.",
            },
          ].map((item, index) => (
            <div key={index} className="group flex flex-col gap-6 items-center">
              <div className="bg-neutral-200 dark:bg-neutral-800 rounded-lg w-16 aspect-square grid place-items-center lg:group-hover:bg-primary relative lg:duration-300 lg:group-hover:text-white">
                <div className="absolute z-[1] w-full h-full top-0 left-0 lg:group-hover:bg-primary-500 group-hover:blur-md duration-300 rounded-lg" />
                {item.icon}
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="font-semibold text-lg">{item.title}</span>
                <p className="text-center max-w-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full bg-primary/25 py-10 lg:py-20">
        <div className="section flex flex-col items-center gap-5 lg:gap-10">
          <h2
            className={title({
              size: "xs",
              class: "max-lg:text-center",
            })}
          >
            Descubre Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {[
              {
                icon: <SecurityIcon size={40} />,
                title: "Chofer Seguro",
                description: [
                  "Si necesitas protección adicional, nuestro servicio de Chofer Seguro te brinda un conductor especializado con licencia para el uso de armas.",
                  "Ideal para el traslado de bienes valiosos u objetos de alto riesgo, garantizando tu seguridad en todo momento.",
                ],
              },
              {
                icon: <VehicleTruckIcon size={40} />,
                title: "Chofer de Flota",
                description: [
                  "¿Tienes una carga pesada o una ruta larga?",
                  "Nuestros Choferes de Flota son expertos en traslados de gran escala, como carga pesada y equipos especiales.",
                  "Cuentan con experiencia en rutas largas y están equipados para cumplir con las especificaciones más exigentes.",
                ],
              },
              {
                icon: <BusinessIcon size={40} />,
                title: "Chofer Corporativo",
                description: [
                  "Reserva tu chofer con Chofer Corporativo y disfruta de un servicio anticipado desde la comodidad de tu casa u oficina.",
                  "Este servicio está diseñado para ejecutivos y empresarios que necesitan transporte para eventos, reuniones u otros requerimientos de planificación.",
                ],
              },
              {
                icon: <PremiumIcon size={40} />,
                title: "Chofer Premium",
                description: [
                  "Chofer Premium ofrece conductores altamente capacitados para satisfacer las necesidades más exclusivas.",
                  "Con formación en ética, idiomas, primeros auxilios y licencia de armas, nuestros choferes están disponibles para viajar dentro y fuera del país, adaptándose a un mercado competitivo y de alta demanda.",
                ],
              },
            ].map((item, index) => (
              <div
                key={index}
                className="col-span-1 flex gap-2.5 items-start lg:gap-5"
              >
                <div className="bg-primary rounded-lg w-16 aspect-square grid place-items-center text-white min-w-16">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  {item.description.map((desc, id) => (
                    <p key={id} className="text-balance text-small">
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section py-10 lg:py-20">
        <div className="flex flex-col items-center gap-5 lg:flex-row">
          <div className="flex flex-col items-center gap-3 lg:items-start">
            <h2
              className={title({
                size: "xs",
                class: "max-lg:text-center",
              })}
            >
              Tenemos cobertura internacional
            </h2>
            <p className="max-lg:text-center mt-5 text-small lg:text-base text-balance">
              HERCOM se encuentra disponible actualmente en Perú y Colombia,
              brindándote seguridad y tranquilidad en estos dos países.
            </p>
            <p className="max-lg:text-center text-small lg:text-base text-balance">
              Estamos comprometidos con tu bienestar y, por eso, nuestra misión
              es expandirnos a toda Latinoamérica, ofreciendo nuestra protección
              y servicio a más viajeros.
            </p>
            <p className="max-lg:text-center text-small lg:text-base text-balance">
              Con planes de expansión en marcha, pronto podrás disfrutar de
              HERCOM en más destinos de la región, garantizando que tu seguridad
              esté siempre al alcance de tu mano, sin importar dónde estés.
            </p>
          </div>
          <div className="h-72 pointer-events-none lg:h-[500px] lg:aspect-square">
            <GlobeDemo />
          </div>
        </div>
      </section>
      <section className="section pb-10 lg:pb-20 flex flex-col items-center gap-10">
        <h2
          className={title({
            size: "xs",
            class: "max-lg:text-center",
          })}
        >
          Absolvemos tus dudas
        </h2>
        <Faqs />
      </section>
      <section className="relative w-full bg-neutral-200 dark:bg-neutral-900 bg-[url(../assets/map-light.webp)] dark:bg-[url(../assets/map-dark.webp)] bg-cover">
        <div className="section pt-10 pb-12 lg:pt-20 lg:pb-24 flex flex-col items-center gap-10">
          <h2
            className={title({
              size: "xs",
              class: "max-lg:text-center",
            })}
          >
            ¡Haz tu viaje más seguro ahora!
          </h2>
          <p className="text-center text-balance text-small lg:text-base">
            No esperes más para poner tu seguridad al alcance de tu mano. HERCOM
            te ofrece la tranquilidad que necesitas, en cada viaje. Descarga la
            app y accede a nuestros servicios exclusivos para protegerte, sin
            importar a dónde vayas.
            <br /> <br />
            ¡Un solo clic y viaja seguro!
          </p>
          <div className="flex items-center gap-10">
            <Link
              isExternal
              className={buttonStyles({
                color: "primary",
                radius: "full",
                className: "bg-black flex items-center gap-2 relative px-5",
              })}
              href={siteConfig.links.docs}
            >
              <LogosGooglePlay className="text-xl" />
              <div className="flex flex-col ">
                <span className="top-0 text-[10px] leading-none">
                  Disponible en
                </span>
                <span className="font-semibold text-white">Google Play</span>
              </div>
            </Link>
            <Link
              isExternal
              className={buttonStyles({
                color: "primary",
                radius: "full",
                className: "bg-black flex items-center gap-2 relative px-5",
              })}
              href={siteConfig.links.docs}
            >
              <LogosApple className="text-xl text-white" />
              <div className="flex flex-col ">
                <span className="top-0 text-[10px] leading-none">
                  Descargalo en el
                </span>
                <span className="font-semibold text-white">App Store</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-primary to-transparent" />
      </section>
    </>
  );
}
