export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "HERCOM",
  description: "Descripcion de la App HERCOM",
  navItems: [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Cliente",
      href: "/cliente",
    },
  ],
  navMenuItems: [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Cliente",
      href: "/cliente",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
    facbook: "https://www.facebook.com/profile.php?id=61571135840620",
  },
};
