/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useMemo, useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

/* ---------------- SVG ICONS ---------------- */
const Icons = {
  MessageSquare: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  X: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  Send: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  ),
  Minimize: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <line x1="4" y1="14" x2="10" y2="14" />
      <line x1="10" y1="14" x2="10" y2="20" />
      <line x1="20" y1="10" x2="14" y2="10" />
      <line x1="14" y1="10" x2="14" y2="4" />
    </svg>
  ),
};

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

/* ---------------- CHAT BOT ---------------- */
function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([
    { text: "Hi there! 👋 Welcome to Shashonk Tech.", isBot: true },
    { text: "How can we help you innovate today?", isBot: true },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userText = inputValue;
    setMessages((prev) => [...prev, { text: userText, isBot: false }]);
    setInputValue("");

    setTimeout(() => {
      let botReply =
        "Thanks for reaching out! A team member will be with you shortly.";

      if (/hi|hello/i.test(userText)) {
        botReply = "Hello! Do you have a project in mind?";
      } else if (/price|cost/i.test(userText)) {
        botReply =
          "We offer custom quotes based on project scope. Would you like to book a call?";
      } else if (/service/i.test(userText)) {
        botReply =
          "We specialize in Web, AI, and Cloud solutions. Which interests you?";
      }

      setMessages((prev) => [...prev, { text: botReply, isBot: true }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[350px] h-[500px] bg-[#0B1221] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-300">
          {/* Header */}
          <div className="bg-[#007aff] p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white text-[#007aff] flex items-center justify-center font-bold text-xs">
                AI
              </div>
              <div>
                <span className="text-white font-bold text-sm block">
                  Shashonk Assistant
                </span>
                <span className="text-blue-100 text-xs">Online</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white"
            >
              <Icons.Minimize />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0f1729]">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.isBot ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 text-sm rounded-2xl ${
                    msg.isBot
                      ? "bg-[#1e293b] text-gray-200 rounded-tl-none"
                      : "bg-[#007aff] text-white rounded-tr-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-[#1e293b] border-t border-white/5">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex gap-2"
            >
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-[#0f1729] text-white text-sm rounded-full px-4 py-2 focus:outline-none"
              />
              <button className="w-10 h-10 bg-[#007aff] rounded-full flex items-center justify-center text-white">
                <Icons.Send />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Toggle */}
      <button
        onClick={() => setIsOpen((o) => !o)}
        className="w-14 h-14 bg-[#007aff] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-105 transition"
      >
        {isOpen ? <Icons.X /> : <Icons.MessageSquare />}
      </button>
    </div>
  );
}

/* ---------------- CONTACT SECTION ---------------- */
export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  const position: [number, number] = [13.0827, 80.2707];
  const [customIcon, setCustomIcon] = useState<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 }
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
        className="w-full h-full"
      >
        <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
        <Marker position={position} icon={customIcon}>
          <Popup>
            <strong>Shashonk HQ</strong>
            <br />
            Chennai, India
          </Popup>
        </Marker>
      </MapContainer>
    );
  }, [customIcon]);

  return (
    <section ref={sectionRef} className="relative py-12 overflow-hidden">
      <ChatBot />

      <div className="px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block px-4 py-1.5 mb-6 bg-white rounded-full">
            <span className="text-[#0a1525] text-xs font-semibold font-poppins">
              Contact us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-syne">
            Reach Out & Innovate
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center mb-20">
          {/* LEFT */}
          <div
            className={`flex-1 max-w-xl transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to start your next project?
            </h3>
            <p className="text-gray-400 text-lg mb-8">
              Our team is ready to help you build secure, scalable, and
              intelligent solutions.
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#1e293b] p-6 rounded-2xl border border-white/5">
                <h4 className="text-white font-bold mb-1">Call Us</h4>
                <p className="text-gray-400 text-sm">+91 6380779941</p>
              </div>
              <div className="bg-[#1e293b] p-6 rounded-2xl border border-white/5">
                <h4 className="text-white font-bold mb-1">Email</h4>
                <p className="text-gray-400 text-sm">info@shashonk.com</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div
            className={`w-full lg:w-1/2 h-[350px] md:h-[400px] rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            {MapComponent}
          </div>
        </div>
      </div>
    </section>
  );
}
