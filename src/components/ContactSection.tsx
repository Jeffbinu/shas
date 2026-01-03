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
      strokeLinecap="round"
      strokeLinejoin="round"
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
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  Send: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
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
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" y1="14" x2="10" y2="14" />
      <line x1="10" y1="14" x2="10" y2="20" />
      <line x1="20" y1="10" x2="14" y2="10" />
      <line x1="14" y1="10" x2="14" y2="4" />
    </svg>
  ),
  Bot: () => (
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
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
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
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen, isTyping]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userText = inputValue;
    setMessages((prev) => [...prev, { text: userText, isBot: false }]);
    setInputValue("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText }),
      });

      const data = await res.json();
      setIsTyping(false);
      setMessages((prev) => [...prev, { text: data.reply, isBot: true }]);
    } catch {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { text: "Sorry, something went wrong. Please try again.", isBot: true },
      ]);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[9999] flex flex-col items-end gap-4 font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="w-[380px] h-[600px] flex flex-col overflow-hidden rounded-3xl shadow-2xl border border-white/10 bg-[#0B1221]/90 backdrop-blur-xl animate-in slide-in-from-bottom-10 fade-in duration-300 origin-bottom-right">
          
          {/* Header */}
          <div className="relative p-5 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border-b border-white/5 flex justify-between items-center backdrop-blur-md">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <Icons.Bot />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#0B1221] rounded-full"></div>
              </div>
              <div>
                <h3 className="text-white font-bold text-base leading-tight">
                  Shashonk AI
                </h3>
                <p className="text-blue-200/60 text-xs font-medium">
                  Always online
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <Icons.Minimize />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6 scrollbar-thin scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.isBot ? "justify-start" : "justify-end"
                } animate-in fade-in slide-in-from-bottom-2 duration-300`}
              >
                <div
                  className={`max-w-[85%] p-3.5 text-[15px] leading-relaxed shadow-md ${
                    msg.isBot
                      ? "bg-[#1e293b]/80 border border-white/5 text-gray-200 rounded-2xl rounded-tl-none"
                      : "bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl rounded-tr-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start animate-in fade-in slide-in-from-bottom-2">
                <div className="bg-[#1e293b]/80 border border-white/5 px-4 py-3 rounded-2xl rounded-tl-none flex gap-1.5 items-center">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-[#0B1221]/50 border-t border-white/5 backdrop-blur-md">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="relative flex items-center gap-2"
            >
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me anything..."
                className="w-full bg-[#1e293b] text-white text-sm rounded-full pl-5 pr-12 py-3.5 border border-white/10 focus:border-blue-500/50 focus:bg-[#253045] focus:outline-none transition-all placeholder:text-gray-500 shadow-inner"
              />
              <button 
                type="submit"
                disabled={!inputValue.trim()}
                className="absolute right-2 p-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:hover:bg-blue-600 rounded-full text-white transition-all shadow-lg shadow-blue-600/20"
              >
                <Icons.Send />
              </button>
            </form>
            <div className="text-center mt-2">
               <span className="text-[10px] text-gray-600">Powered by Shashonk Tech</span>
            </div>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen((o) => !o)}
        className="group relative w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:scale-105 transition-all duration-300 z-[9999]"
      >
        {/* Pulse Ring */}
        {!isOpen && (
          <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-20 animate-ping duration-1000"></span>
        )}
        
        <div className={`transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"}`}>
          {isOpen ? <Icons.X /> : <Icons.MessageSquare />}
        </div>

        {/* Tooltip */}
        {!isOpen && (
           <span className="absolute right-full mr-4 bg-white text-[#0B1221] px-3 py-1.5 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg pointer-events-none">
             Chat with us 👋
             {/* Arrow */}
             <span className="absolute top-1/2 -right-1 -mt-1 border-4 border-transparent border-l-white"></span>
           </span>
        )}
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
    <section ref={sectionRef} className="relative overflow-hidden py-20 bg-[#0B1221]">
      <ChatBot />

      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block px-4 py-1.5 mb-6 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full">
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent text-xs font-bold uppercase tracking-wider">
              Contact us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-syne mb-4">
            Reach Out & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">Innovate</span>
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center mb-20">
          {/* LEFT */}
          <div
            className={`flex-1 max-w-xl transition-all duration-700 delay-100 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Ready to start your <br/> next project?
            </h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Our team is ready to help you build secure, scalable, and
              intelligent solutions that drive real business growth.
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="group bg-[#1e293b]/50 p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 hover:bg-[#1e293b] transition-all duration-300">
                <h4 className="text-white font-bold mb-1 group-hover:text-blue-400 transition-colors">Call Us</h4>
                <p className="text-gray-400 text-sm">+91 6380779941</p>
              </div>
              <div className="group bg-[#1e293b]/50 p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 hover:bg-[#1e293b] transition-all duration-300">
                <h4 className="text-white font-bold mb-1 group-hover:text-blue-400 transition-colors">Email</h4>
                <p className="text-gray-400 text-sm">info@shashonk.com</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div
            className={`w-full lg:w-1/2 h-[350px] md:h-[450px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl relative transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            {/* Map Overlay Gradient for better blending */}
            <div className="absolute inset-0 pointer-events-none z-[400] shadow-[inset_0_0_50px_rgba(11,18,33,0.8)]"></div>
            {MapComponent}
          </div>
        </div>
      </div>
    </section>
  );
}
