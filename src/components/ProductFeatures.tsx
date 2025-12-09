export default function ProductFeatures() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-block pill mb-4">Product Features</div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Future-Ready Solutions, Built To Perform
          </h2>
          <p className="text-white/80 mb-6">
            At SHASHONK, we create solutions designed for performance,
            intelligence, and long-term growth...
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full glass-card flex items-center justify-center mb-3">
                🌟
              </div>
              <div className="font-semibold">Innovative Interface Design</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full glass-card flex items-center justify-center mb-3">
                📊
              </div>
              <div className="font-semibold">Advanced Analytics</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full glass-card flex items-center justify-center mb-3">
                🛠️
              </div>
              <div className="font-semibold">Tailored Support Excellence</div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl h-72 glass-card" />
      </div>
    </section>
  );
}
