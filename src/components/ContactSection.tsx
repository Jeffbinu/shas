/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useMemo, useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

// --- SVG ICONS (No external library needed) ---
const Icons = {
  MessageSquare: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  ),
  X: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  ),
  Send: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="22" y1="2" x2="11" y2="13"></line>
      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>
  ),
  Minimize: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" y1="14" x2="10" y2="14"></line>
      <line x1="10" y1="14" x2="10" y2="20"></line>
      <line x1="20" y1="10" x2="14" y2="10"></line>
      <line x1="14" y1="10" x2="14" y2="4"></line>
    </svg>
  ),
};

// --- MAP COMPONENTS ---
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([
    { text: "Hi there! 👋 Welcome to Shashonk Tech.", isBot: true },
    { text: "How can we help you innovate today?", isBot: true },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages, isOpen]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userText = inputValue;
    setMessages((prev) => [...prev, { text: userText, isBot: false }]);
    setInputValue("");

    setTimeout(() => {
      let botReply =
        "Thanks for reaching out! A team member will be with you shortly.";
      if (
        userText.toLowerCase().includes("hi") ||
        userText.toLowerCase().includes("hello")
      ) {
        botReply = "Hello! Do you have a project in mind?";
      } else if (
        userText.toLowerCase().includes("price") ||
        userText.toLowerCase().includes("cost")
      ) {
        botReply =
          "We offer custom quotes based on project scope. Would you like to book a call?";
      } else if (userText.toLowerCase().includes("service")) {
        botReply =
          "We specialize in Web, AI, and Cloud solutions. Which interests you?";
      }

      setMessages((prev) => [...prev, { text: botReply, isBot: true }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] h-[500px] bg-[#0B1221] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-300">
          {/* Header */}
          <div className="bg-[#007aff] p-4 flex justify-between items-center shadow-md">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#007aff] font-bold text-xs">
                  AI
                </div>
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-[#007aff]"></div>
              </div>
              <div>
                <span className="font-bold text-white block text-sm">
                  Shashonk Assistant
                </span>
                <span className="text-blue-100 text-xs block">Online</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <Icons.Minimize />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0f1729]">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.isBot ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 text-sm leading-relaxed shadow-sm ${
                    msg.isBot
                      ? "bg-[#1e293b] text-gray-200 rounded-2xl rounded-tl-none border border-white/5"
                      : "bg-[#007aff] text-white rounded-2xl rounded-tr-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-[#1e293b] border-t border-white/5">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex gap-2 items-center"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-[#0f1729] text-white text-sm rounded-full px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-[#007aff] border border-white/5 placeholder-gray-500 transition-all"
              />
              <button
                type="submit"
                className="w-10 h-10 bg-[#007aff] rounded-full flex items-center justify-center text-white hover:bg-[#0062cc] transition-colors shadow-lg hover:shadow-blue-500/20 active:scale-95"
              >
                <Icons.Send />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#007aff] hover:bg-[#0062cc] rounded-full shadow-[0_4px_14px_0_rgba(0,118,255,0.39)] flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95"
      >
        {isOpen ? <Icons.X /> : <Icons.MessageSquare />}
      </button>
    </div>
  );
}

// --- MAIN CONTACT SECTION ---
export default function ContactSection() {
  // Chennai Coordinates
  const position: [number, number] = [13.0827, 80.2707];
  const [customIcon, setCustomIcon] = useState<any>(null);

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
    if (!customIcon)
      return (
        <div className="w-full h-full bg-[#0B1221] animate-pulse flex items-center justify-center text-gray-600 text-sm">
          Loading Map...
        </div>
      );
    return (
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        className="w-full h-full z-0"
        style={{ background: "#0B1221" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            <div className="text-black font-bold">
              Shashonk HQ <br /> Chennai, India
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    );
  }, [customIcon]);

  return (
    <section className="relative py-16 overflow-hidden">
      {/* CHAT BOT WIDGET (Fixed Position) */}
      <ChatBot />

      <div className="px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            <span className="text-white text-xs font-semibold tracking-wide uppercase">
              Contact us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Reach Out & Innovate
          </h2>
        </div>

        {/* Content Layout - Redesigned without form */}
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center mb-20">
          {/* LEFT: Text Info */}
          <div className="flex-1 max-w-xl text-center lg:text-left">
            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
              Ready to start your next project?
            </h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Our team is ready to help you build secure, scalable, and
              intelligent solutions. Reach out via email, phone, or just say
              &quot;Hi&quot; to our AI assistant!
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="bg-[#1e293b] p-6 rounded-2xl border border-white/5 hover:border-[#007aff]/30 transition-colors group">
                <div className="w-10 h-10 bg-[#007aff]/20 rounded-full flex items-center justify-center text-[#007aff] mb-4 group-hover:bg-[#007aff] group-hover:text-white transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.12 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <h4 className="text-white font-bold mb-1">Call Us</h4>
                <p className="text-gray-400 text-sm">+91 6380779941</p>
              </div>
              <div className="bg-[#1e293b] p-6 rounded-2xl border border-white/5 hover:border-[#007aff]/30 transition-colors group">
                <div className="w-10 h-10 bg-[#007aff]/20 rounded-full flex items-center justify-center text-[#007aff] mb-4 group-hover:bg-[#007aff] group-hover:text-white transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <h4 className="text-white font-bold mb-1">Email</h4>
                <p className="text-gray-400 text-sm">info@shashonk.com</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Map Section */}
          <div className="w-full lg:w-1/2 h-[350px] md:h-[400px] rounded-[2rem] overflow-hidden bg-[#0B1221] border border-white/5 shadow-2xl relative">
            {MapComponent}
            {/* Inner Shadow Overlay for depth */}
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_50px_rgba(3,12,32,0.8)] z-[400]" />
          </div>
        </div>
      </div>
    </section>
  );
}
