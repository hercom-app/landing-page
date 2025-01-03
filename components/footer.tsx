import { Link } from "@nextui-org/link";

import { siteConfig } from "@/config/site";

export const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center py-3 bg-primary flex-col gap-5">
      <div className="flex flex-col items-center lg:flex-row lg:gap-3">
        {siteConfig.navItems.map((item, idx) => (
          <Link key={idx} className="text-white" href={item.href}>
            {item.label}
          </Link>
        ))}
        <Link
          isExternal
          className="text-white"
          href="https://superb-ram-273.convex.cloud/api/storage/87b89bc9-3df1-45b1-bc4f-14d0a940abd0"
        >
          Política de privacidad
        </Link>
      </div>
      <div className="flex items-center gap-1 text-current">
        <span className="text-white">Con el respaldo de</span>
        <p className="text-white font-bold">Ricardos & Más S.A.C.</p>
      </div>
    </footer>
  );
};
