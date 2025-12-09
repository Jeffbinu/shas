import Image from "next/image";

export default function SiteFooter({
  site,
}: {
  site: {
    title: string;
    logo: string;
    contact?: { email?: string; phone?: string };
  };
}) {
  return (
    <footer className="bg-[#030615] py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image src={site.logo} alt={site.title} width={40} height={40} />
            <div className="font-semibold">{site.title}</div>
          </div>
          <p className="text-white/70">
            Shashonk is a technology-driven company specializing in web and
            mobile app development, BI visualization, and machine learning
            solutions.
          </p>
        </div>

        <div className="text-white/80">
          <div className="font-semibold mb-2">Contact</div>
          <div>{site.contact?.phone}</div>
          <div className="mt-2">{site.contact?.email}</div>
        </div>

        <div>
          <div className="font-semibold mb-2">Follow</div>
          <div className="flex gap-3">
            <a className="w-8 h-8 rounded-full bg-white/6 flex items-center justify-center">
              f
            </a>
            <a className="w-8 h-8 rounded-full bg-white/6 flex items-center justify-center">
              in
            </a>
            <a className="w-8 h-8 rounded-full bg-white/6 flex items-center justify-center">
              
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
