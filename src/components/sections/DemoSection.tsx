"use client";

import { useState, useEffect, useRef } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { DEMO_CHATS, PROFESSION_OPTIONS } from "@/lib/constants";

export default function DemoSection() {
  const [selectedProfession, setSelectedProfession] = useState(PROFESSION_OPTIONS[0].value);
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  const chat = DEMO_CHATS.find((c) => c.professionId === selectedProfession) || DEMO_CHATS[0];

  useEffect(() => {
    setVisibleMessages(0);
    setIsTyping(false);
  }, [selectedProfession]);

  useEffect(() => {
    if (visibleMessages >= chat.messages.length) return;

    const nextMessage = chat.messages[visibleMessages];
    const delay = nextMessage.role === "assistant" ? 1500 : 800;

    if (nextMessage.role === "assistant") {
      setIsTyping(true);
      const typingTimer = setTimeout(() => {
        setIsTyping(false);
        setVisibleMessages((v) => v + 1);
      }, delay);
      return () => clearTimeout(typingTimer);
    }

    const timer = setTimeout(() => {
      setVisibleMessages((v) => v + 1);
    }, delay);
    return () => clearTimeout(timer);
  }, [visibleMessages, chat.messages]);

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
  }, [visibleMessages, isTyping]);

  return (
    <section id="demo" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Live Demo"
          heading="Sehen Sie Clawsistent in Aktion"
          description="Wählen Sie Ihren Beruf und erleben Sie, wie Ihr KI-Assistent arbeitet."
        />

        <div className="mb-6 flex justify-center">
          <select
            value={selectedProfession}
            onChange={(e) => setSelectedProfession(e.target.value)}
            className="px-4 py-2 border border-navy-200 rounded-lg text-navy-700 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            {PROFESSION_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="bg-navy-50 rounded-2xl border border-navy-100 overflow-hidden">
          <div className="bg-navy-900 px-6 py-3 flex items-center gap-2">
            <span className="text-white text-sm font-medium">🐾 Clawsistent Chat</span>
          </div>

          <div ref={chatRef} className="p-6 space-y-4 min-h-[280px] max-h-[400px] overflow-y-auto">
            {chat.messages.slice(0, visibleMessages).map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm ${
                    msg.role === "user"
                      ? "bg-primary-500 text-white rounded-br-md"
                      : "bg-white text-navy-800 border border-navy-100 rounded-bl-md"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-navy-400 border border-navy-100 px-4 py-3 rounded-2xl rounded-bl-md text-sm">
                  <span className="animate-blink">●●●</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 text-center">
          <Button href={`/voranmelden?beruf=${selectedProfession}`}>
            Jetzt testen
          </Button>
        </div>
      </div>
    </section>
  );
}
