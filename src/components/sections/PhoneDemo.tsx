"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/* Script content                                                      */
/* ------------------------------------------------------------------ */

interface ChatMessage {
  role: "user" | "assistant";
  text: string;
}

interface Prompt {
  label: string;
  message: string;
  replies: string[];
  followUp: { label: string; message: string };
  final: string[];
}

const INTRO: string[] = [
  "Hey, ich bin Claw. Ich übernehme die Büroarbeit, die dich jeden Tag aufhält.",
  "Tipp unten auf eine Nachricht, dann zeig ich dir, was ich kann.",
];

const PROMPTS: Prompt[] = [
  {
    label: "Was steht heute bei mir an?",
    message: "Was steht heute bei mir an?",
    replies: [
      "3 Termine: Hr. Maier um 10, Objektbesichtigung um 13, Steuerberater um 16 Uhr.",
      "Zu allen drei liegt eine kurze Vorbereitung in deinem Postfach.",
      "Übrigens: Hr. Maier hat gefragt, ob es auch um 9 ginge. Soll ich verschieben?",
    ],
    followUp: { label: "Ja, verschieb auf 9", message: "Ja, verschieb auf 9" },
    final: [
      "Erledigt. Termin auf 9:00 verschoben, Hr. Maier hat die Bestätigung schon.",
      "Deinen Vormittag habe ich bis dahin geblockt.",
    ],
  },
  {
    label: "Beantworte meine ungelesenen E-Mails",
    message: "Beantworte meine ungelesenen E-Mails",
    replies: [
      "14 ungelesen. 5 brauchen wirklich dich, die Antwortentwürfe in deinem Ton liegen schon bereit.",
      "Die anderen 9 waren Newsletter und CC-Mails. Hab ich archiviert.",
      "Soll ich die 5 Entwürfe gleich senden, oder willst du zuerst drüberschauen?",
    ],
    followUp: { label: "Sende sie", message: "Sende sie" },
    final: [
      "Gesendet. Alle 5 sind raus.",
      "Ich behalte die Antworten im Blick und melde mich, wenn etwas Dringendes kommt.",
    ],
  },
  {
    label: "Erinnere Fr. Berger an die offene Rechnung",
    message: "Erinnere Fr. Berger an die offene Rechnung",
    replies: [
      "Rechnung 2026-117 über €1.450, seit 12 Tagen überfällig.",
      "Ich habe eine freundliche Zahlungserinnerung in deinem Ton vorbereitet.",
      "Soll ich sie rausschicken?",
    ],
    followUp: { label: "Ja, schick sie raus", message: "Ja, schick sie raus" },
    final: [
      "Erledigt, die Erinnerung ist raus.",
      "Falls bis nächste Woche nichts eingeht, lege ich dir automatisch eine Wiedervorlage an.",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

type ChipState =
  | { kind: "hidden" }
  | { kind: "prompts" }
  | { kind: "followUp"; prompt: Prompt }
  | { kind: "cta" };

export default function PhoneDemo() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [chips, setChips] = useState<ChipState>({ kind: "hidden" });
  const threadRef = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const schedule = useCallback((fn: () => void, delay: number) => {
    const t = setTimeout(fn, delay);
    timers.current.push(t);
  }, []);

  // Intro sequence on mount
  useEffect(() => {
    const currentTimers = timers.current;
    let delay = 600;
    INTRO.forEach((text, i) => {
      schedule(() => setIsTyping(true), delay);
      delay += 900;
      schedule(() => {
        setIsTyping(false);
        setMessages((m) => [...m, { role: "assistant", text }]);
        if (i === INTRO.length - 1) {
          schedule(() => setChips({ kind: "prompts" }), 400);
        }
      }, delay);
      delay += 350;
    });
    return () => currentTimers.forEach(clearTimeout);
  }, [schedule]);

  // Auto-scroll
  useEffect(() => {
    threadRef.current?.scrollTo({ top: threadRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isTyping, chips]);

  const playReplies = useCallback(
    (replies: string[], after: () => void) => {
      let delay = 500;
      replies.forEach((text, i) => {
        schedule(() => setIsTyping(true), delay);
        delay += 500 + Math.min(text.length * 9, 600);
        schedule(() => {
          setIsTyping(false);
          setMessages((m) => [...m, { role: "assistant", text }]);
          if (i === replies.length - 1) schedule(after, 350);
        }, delay);
        delay += 300;
      });
    },
    [schedule]
  );

  const handlePromptTap = (prompt: Prompt) => {
    setChips({ kind: "hidden" });
    setMessages((m) => [...m, { role: "user", text: prompt.message }]);
    playReplies(prompt.replies, () => setChips({ kind: "followUp", prompt }));
  };

  const handleFollowUpTap = (prompt: Prompt) => {
    setChips({ kind: "hidden" });
    setMessages((m) => [...m, { role: "user", text: prompt.followUp.message }]);
    playReplies(prompt.final, () => setChips({ kind: "cta" }));
  };

  return (
    <div className="relative mx-auto w-[300px] sm:w-[330px] shadow-phone select-none">
      {/* Frame */}
      <div className="rounded-[3rem] border-[4px] border-[#c8c8cc] bg-white overflow-hidden">
        <div className="relative rounded-[2.7rem] overflow-hidden bg-white flex flex-col h-[620px]">
          {/* Dynamic island */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[88px] h-[26px] bg-[#111] rounded-full z-20" />

          {/* Status bar */}
          <div className="flex items-end justify-between px-7 pt-3.5 pb-1 text-[13px] font-semibold text-ink-900">
            <span>9:41</span>
            <span className="flex items-center gap-1.5">
              <svg viewBox="0 0 18 18" className="w-[15px] h-[15px] fill-current" aria-hidden>
                <rect x="1" y="10" width="3" height="7" rx="1" />
                <rect x="5.5" y="7" width="3" height="10" rx="1" />
                <rect x="10" y="4" width="3" height="13" rx="1" />
                <rect x="14.5" y="1" width="3" height="16" rx="1" />
              </svg>
              <svg viewBox="0 0 25 18" className="w-[21px] h-[15px]" aria-hidden>
                <rect x="0.6" y="2.6" width="19.8" height="12.8" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
                <rect x="22" y="6" width="2.5" height="6" rx="1" fill="currentColor" />
                <rect x="2" y="4" width="14" height="10" rx="1.5" fill="currentColor" />
              </svg>
            </span>
          </div>

          {/* Header */}
          <div className="relative flex flex-col items-center pb-2.5 pt-1 border-b border-black/[0.08] z-10">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#007AFF]">
              <svg viewBox="0 0 12 20" className="w-2 h-3.5" fill="none" aria-hidden>
                <path d="M10 2L2 10L10 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div className="w-[38px] h-[38px] rounded-full bg-primary-50 border border-primary-200/60 shadow-sm flex items-center justify-center overflow-hidden">
              <Image src="/logo.svg" alt="Claw" width={30} height={30} priority />
            </div>
            <span className="mt-0.5 text-[11px] font-medium text-ink-900">
              Claw <span className="text-black/35 font-semibold">›</span>
            </span>
            <span className="text-[10px] text-black/35">iMessage</span>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#007AFF]">
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" aria-hidden>
                <path d="M15.5 5H4.5C3.4 5 2.5 5.9 2.5 7v10c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17.5 9.5l4-2.5v10l-4-2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>

          {/* Thread */}
          <div ref={threadRef} className="flex-1 overflow-y-auto scrollbar-hide px-3.5 py-2 flex flex-col gap-[3px]">
            <div className="text-center py-1.5 text-[11px] text-black/35">Heute 9:41</div>
            {messages.map((msg, i) => {
              const prev = messages[i - 1];
              const gap = prev && prev.role !== msg.role ? "mt-2" : "mt-[3px]";
              return msg.role === "assistant" ? (
                <div key={i} className={`bubble-in max-w-[82%] self-start ${gap}`}>
                  <div className="px-3 py-[7px] rounded-[18px] rounded-bl-[5px] bg-imessage-grey text-[#1c1c1e] text-[14px] leading-[1.32]">
                    {msg.text}
                  </div>
                </div>
              ) : (
                <div key={i} className={`bubble-in max-w-[82%] self-end ${gap}`}>
                  <div className="px-3 py-[7px] rounded-[18px] rounded-br-[5px] bg-imessage text-white text-[14px] leading-[1.32]">
                    {msg.text}
                  </div>
                </div>
              );
            })}
            {isTyping && (
              <div className="bubble-in self-start mt-2 px-3 py-[9px] rounded-[18px] rounded-bl-[5px] bg-imessage-grey flex gap-[3px]">
                <span className="typing-dot w-1.5 h-1.5 rounded-full bg-[#9b9ba3]" />
                <span className="typing-dot w-1.5 h-1.5 rounded-full bg-[#9b9ba3]" />
                <span className="typing-dot w-1.5 h-1.5 rounded-full bg-[#9b9ba3]" />
              </div>
            )}
          </div>

          {/* Chips */}
          <div
            className={`px-3.5 overflow-hidden transition-all duration-300 ${
              chips.kind === "hidden" ? "max-h-0 opacity-0" : "max-h-60 opacity-100 pb-2"
            }`}
          >
            {chips.kind === "prompts" && (
              <div className="flex flex-col items-end gap-1.5">
                <span className="self-center text-[10px] font-medium text-black/35 mb-0.5">Tipp auf eine Nachricht</span>
                {PROMPTS.map((p) => (
                  <Chip key={p.label} label={p.label} onClick={() => handlePromptTap(p)} />
                ))}
              </div>
            )}
            {chips.kind === "followUp" && (
              <div className="flex flex-col items-end gap-1.5">
                <Chip label={chips.prompt.followUp.label} onClick={() => handleFollowUpTap(chips.prompt)} />
              </div>
            )}
            {chips.kind === "cta" && (
              <div className="flex flex-col items-end gap-1.5">
                <Link
                  href="/start"
                  className="bubble-in inline-flex items-center gap-2 max-w-[86%] px-3.5 py-2 rounded-[18px] rounded-br-[5px] bg-imessage text-white text-[14px] leading-tight font-medium hover:brightness-105 transition"
                >
                  <span>Das will ich für mein Büro</span>
                  <span className="w-5 h-5 rounded-full bg-white/25 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" aria-hidden>
                      <path d="M12 19V5M5 12l7-7 7 7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </div>
            )}
          </div>

          {/* Dock */}
          <div className="flex items-center gap-2 px-3 pt-1.5 pb-3">
            <span className="w-7 h-7 rounded-full bg-imessage-grey flex items-center justify-center text-[#8e8e93] shrink-0">
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" aria-hidden>
                <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </span>
            <span className="flex-1 border border-black/[0.14] rounded-full min-h-8 px-3 flex items-center text-[14px] text-black/35">
              iMessage
            </span>
            <span className="w-7 h-7 rounded-full bg-[#c7c7cc] flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" aria-hidden>
                <path d="M12 20V4M5 11l7-7 7 7" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>

          {/* Home bar */}
          <div className="mx-auto mb-1.5 w-[108px] h-1 rounded-full bg-black/20" />
        </div>
      </div>
    </div>
  );
}

function Chip({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bubble-in inline-flex items-center gap-2 max-w-[86%] px-3.5 py-2 rounded-[18px] rounded-br-[5px] bg-imessage text-white text-[14px] leading-tight text-left cursor-pointer hover:brightness-105 active:scale-[0.985] transition"
    >
      <span>{label}</span>
      <span className="w-5 h-5 rounded-full bg-white/25 flex items-center justify-center shrink-0">
        <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" aria-hidden>
          <path d="M12 19V5M5 12l7-7 7 7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </button>
  );
}
