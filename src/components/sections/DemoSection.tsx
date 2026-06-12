"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { DEMO_CHATS, PROFESSIONS } from "@/lib/constants";
import type { DemoChat } from "@/types";

function ChatPlayer({ chat }: { chat: DemoChat }) {
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visibleMessages >= chat.messages.length) return;

    const nextMessage = chat.messages[visibleMessages];
    const timers: ReturnType<typeof setTimeout>[] = [];

    if (nextMessage.role === "assistant") {
      timers.push(setTimeout(() => setIsTyping(true), 50));
      timers.push(
        setTimeout(() => {
          setIsTyping(false);
          setVisibleMessages((v) => v + 1);
        }, 1500)
      );
    } else {
      timers.push(setTimeout(() => setVisibleMessages((v) => v + 1), 800));
    }

    return () => timers.forEach(clearTimeout);
  }, [visibleMessages, chat.messages]);

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
  }, [visibleMessages, isTyping]);

  return (
    <div ref={chatRef} className="p-5 space-y-3 min-h-[300px] max-h-[420px] overflow-y-auto scrollbar-hide">
      {chat.messages.slice(0, visibleMessages).map((msg, i) => (
        <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
          <div
            className={`bubble-in max-w-[82%] px-4 py-2.5 rounded-[18px] text-sm leading-relaxed ${
              msg.role === "user"
                ? "bg-imessage text-white rounded-br-[5px]"
                : "bg-imessage-grey text-[#1c1c1e] rounded-bl-[5px]"
            }`}
          >
            {msg.content}
          </div>
        </div>
      ))}

      {isTyping && (
        <div className="flex justify-start">
          <div className="bubble-in px-4 py-3 rounded-[18px] rounded-bl-[5px] bg-imessage-grey flex gap-[3px]">
            <span className="typing-dot w-1.5 h-1.5 rounded-full bg-[#9b9ba3]" />
            <span className="typing-dot w-1.5 h-1.5 rounded-full bg-[#9b9ba3]" />
            <span className="typing-dot w-1.5 h-1.5 rounded-full bg-[#9b9ba3]" />
          </div>
        </div>
      )}
    </div>
  );
}

export default function DemoSection() {
  const [selectedProfession, setSelectedProfession] = useState(PROFESSIONS[0].id);

  const profession = PROFESSIONS.find((p) => p.id === selectedProfession) || PROFESSIONS[0];
  const chat = DEMO_CHATS.find((c) => c.professionId === selectedProfession) || DEMO_CHATS[0];

  return (
    <section id="demo" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Live-Demo"
          heading="Sieh mir bei der Arbeit zu"
          description="Ich spreche die Sprache deiner Branche. Wähle deinen Beruf und schau, wie ein Arbeitstag mit mir aussieht."
        />

        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {PROFESSIONS.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedProfession(p.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  selectedProfession === p.id
                    ? "bg-ink-900 text-cream-50 shadow-soft"
                    : "bg-white text-ink-600 border border-line hover:border-line-strong hover:text-ink-900"
                }`}
              >
                <span>{p.emoji}</span>
                <span>{p.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-cream-200/70 border border-line p-3 sm:p-5">
          <div className="rounded-2xl bg-white border border-line shadow-soft overflow-hidden">
            <div className="px-5 py-3 border-b border-line flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-primary-50 border border-primary-200/60 flex items-center justify-center overflow-hidden">
                <Image src="/logo.svg" alt="" width={26} height={26} aria-hidden />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-sm font-bold text-ink-900">Claw</span>
                <span className="text-xs text-ink-500">
                  {profession.emoji} eingestellt auf: {profession.label}
                </span>
              </span>
              <span className="ml-auto flex items-center gap-1.5 text-xs font-semibold text-success">
                <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" aria-hidden />
                online
              </span>
            </div>

            <ChatPlayer key={selectedProfession} chat={chat} />
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button href={`/start?beruf=${selectedProfession}`}>
            Claw für {profession.label} starten
          </Button>
        </div>
      </div>
    </section>
  );
}
