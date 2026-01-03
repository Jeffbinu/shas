/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useMemo, useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import ChatBot from "./ChatBot";

/* ---------------- MAP COMPONENTS ---------------- */
const MapContainer = dynamic(
  () => import("react-leaflet").then((m) => m.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((m) => m.TileLayer),
  { ssr: false }
);
const Marker = dynamic(() => import("react-leaflet").then((m) => m.Marker), {
  ssr: false,
});
const Popup = dynamic(() => import("react-leaflet").then((m) => m.Popup), {
  ssr: false,
});

/* ---------------- FORM FIELD COMPONENT ---------------- */
const FormField = ({
  label,
  type = "text",
  placeholder,
  isTextArea = false,
}: {
  label: string;
  type?: string;
  placeholder: string;
  isTextArea?: boolean;
}) => {
  return (
    <div className="group relative">
      <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 group-focus-within:text-blue-400 transition-colors duration-300">
        {label}
      </label>
      {isTextArea ? (
        <textarea
          placeholder={placeholder}
          rows={4}
          className="w-full bg-[#0f1623] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-[#151e2e] transition-all duration-300 resize-none shadow-inner"
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="w-full bg-[#0f1623] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-[#151e2e] transition-all duration-300 shadow-inner"
        />
      )}
      {/* Glow Effect on Focus */}
      <div className="absolute inset-0 -z-10 rounded-xl bg-blue-500/0 group-focus-within:bg-blue-500/5 blur-lg transition-all duration-500"></div>
    </div>
  );
};

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  const position: [number, number] = [13.0827, 80.2707];
  const [customIcon, setCustomIcon] = useState<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    (async () => {
      const L = (await import("leaflet")).default;
      const icon = new L.Icon({
        iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      });
      setCustomIcon(icon);
    })();
  }, []);

  const MapComponent = useMemo(() => {
    if (!customIcon) {
      return (
        <div className="w-full h-full bg-[#0B1221] animate-pulse flex items-center justify-center text-gray-600">
          Loading Map...
        </div>
      );
    }

    return (
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        zoomControl={false}
        attributionControl={false}
        className="w-full h-full bg-[#0B1221]"
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        <Marker position={position} icon={customIcon}>
          <Popup className="custom-popup">
            <div className="text-center p-1">
              <strong className="text-blue-600 text-sm">Shashonk HQ</strong>
              <br />
              <span className="text-xs text-gray-600">Chennai, India</span>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    );
  }, [customIcon]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
    >
      {/* <ChatBot /> */}

      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block px-4 py-1.5 mb-6 bg-white border backdrop-blur-sm rounded-full">
            <span className="text-[#0B1221] bg-clip-text text-xs font-bold uppercase tracking-wider">
              Contact us
            </span>
          </div>
          <h2 className="text-4xl md:text-3xl lg:text-4xl font-bold text-white font-syne mb-4">
            Reach Out &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">
              Innovate
            </span>
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-start justify-center mb-20">
          {/* LEFT: ORIGINAL TEXT & INFO + MAP */}
          <div
            className={`flex-1 w-full lg:w-1/2 transition-all duration-700 delay-100 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            {/* Original Text Content */}
            <div className="mb-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Ready to start your <br /> next project?
              </h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Our team is ready to help you build secure, scalable, and
                intelligent solutions that drive real business growth.
              </p>

              {/* Original Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <div className="group bg-[#1e293b]/50 p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 hover:bg-[#1e293b] transition-all duration-300">
                  <h4 className="text-white font-bold mb-1 group-hover:text-blue-400 transition-colors">
                    Call Us
                  </h4>
                  <p className="text-gray-400 text-sm">+91 9363222560</p>
                </div>
                <div className="group bg-[#1e293b]/50 p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 hover:bg-[#1e293b] transition-all duration-300">
                  <h4 className="text-white font-bold mb-1 group-hover:text-blue-400 transition-colors">
                    Email
                  </h4>
                  <p className="text-gray-400 text-sm">info@shashonk.com</p>
                </div>
              </div>
            </div>

            {/* Map (Moved here to fit layout balance) */}
            <div className="w-full h-[250px] rounded-[2rem] overflow-hidden border border-white/10 shadow-xl relative">
              <div className="absolute inset-0 pointer-events-none z-[400] shadow-[inset_0_0_50px_rgba(11,18,33,0.8)]"></div>
              {MapComponent}
            </div>
          </div>

          {/* RIGHT: NEW CONTACT FORM */}
          <div
            className={`w-full lg:w-1/2 transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="bg-[#1e293b]/30 p-8 rounded-[2.5rem] border border-white/5 backdrop-blur-sm relative overflow-hidden">
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

              <h3 className="text-2xl font-bold text-white mb-6 relative z-10">
                Get in Touch
              </h3>

              <form
                className="space-y-5 relative z-10"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField label="Name" placeholder="John Doe" />
                  <FormField
                    label="Email"
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>
                <FormField label="Subject" placeholder="Project Inquiry" />
                <FormField
                  label="Message"
                  placeholder="Tell us about your project..."
                  isTextArea={true}
                />

                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 transform hover:-translate-y-0.5 transition-all duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
