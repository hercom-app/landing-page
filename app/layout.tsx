import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { Button } from "@nextui-org/button";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { WhatsappIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name}: Chofer para Remplazo`,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: "HERCOM - Chofer para Reemplazo",
    description: siteConfig.description,
    locale: "es",
    tags: ["chofer", "reemplazo", "chofer de remplazo", "chofer para remplazo"],
    siteName: "HERCOM",
  },
  keywords: [
    "chofer",
    "reemplazo",
    "chofer de reemplazo",
    "chofer para reemplazo",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            {children}
            <div className="fixed bottom-4 right-4 z-30">
              <Button
                isExternal
                isIconOnly
                as={Link}
                className="bg-[#53cf60] lg:hidden"
                href="https://api.whatsapp.com/send?phone=51937244089"
                radius="full"
              >
                <WhatsappIcon className="text-xl" id="1" />
              </Button>
              <Button
                isExternal
                as={Link}
                className="bg-[#53cf60] max-lg:hidden text-white font-semibold"
                href="https://api.whatsapp.com/send?phone=51937244089"
                radius="full"
                startContent={<WhatsappIcon className="text-xl" id="2" />}
              >
                Contáctanos
              </Button>
            </div>
            <footer className="w-full flex items-center justify-center py-3 bg-primary">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="#"
              >
                <span className="text-white">Con el respaldo de</span>
                <p className="text-white font-bold">Ricardos & Más S.A.C.</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
