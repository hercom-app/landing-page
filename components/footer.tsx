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
          href="https://superb-ram-273.convex.cloud/api/storage/8ef22708-1243-456b-8778-0dc6ace3efa2"
        >
          Política de choferes
        </Link>
        <Link
          isExternal
          className="text-white"
          href="https://superb-ram-273.convex.cloud/api/storage/812ce37a-e1ac-4277-835f-2a0a80f36fd2"
        >
          Política de pasajeros
        </Link>
      </div>
      <div className="flex items-center gap-1 text-current">
        <span className="text-white">Con el respaldo de</span>
        <p className="text-white font-bold">Ricardos & Más S.A.C.</p>
      </div>
    </footer>
  );
};
