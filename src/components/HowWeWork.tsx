export default function HowWeWork({
  data,
}: {
  data: {
    title: string;
    subtitle?: string;
    steps: { title: string; desc: string }[];
  };
}) {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="inline-block pill mb-4">Our process</div>
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">
          How We Work
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* orb box */}
          <div className="rounded-2xl p-8 min-h-[320px] glass-card flex items-center justify-center">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[#1b8ff8] to-[#ea5f9c] flex items-center justify-center text-white/90 shadow-xl">
              <div>
                <h4 className="text-xl font-semibold mb-2">
                  SIMPLE,
                  <br />
                  TRANSPARENT,
                  <br />
                  EFFECTIVE
                </h4>
                <p className="text-white/80 text-sm max-w-xs">
                  We craft digital experiences and intelligent solutions that
                  help businesses grow.
                </p>
              </div>
            </div>
          </div>

          <div className="text-left">
            <div className="space-y-6">
              {data.steps.map((s, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-2">
                    <div className="w-1 h-full bg-white/6 rounded" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{s.title}</h4>
                    <p className="text-white/80">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
