"use client";

import { useState } from "react";
import Modal, { ModalCloseButton } from "./Modal";

const startups = [
  {
    name: "AgentLens",
    initials: "Ag",
    oneLiner:
      "Session replay and observability for AI agents. Find failures in seconds, not hours.",
    tags: ["AI Observability", "Developer Tools", "SaaS"],
    logoUrl: "https://logo.clearbit.com/agentlens.it",
    description:
      "AgentLens is an AI agent observability platform that gives developers session replay for AI agents — capturing every LLM call, tool use, and sub-agent interaction as a structured session. Find and fix agent failures in seconds instead of hours of log digging. Currently applying to YC S26.",
    website: "https://www.agentlens.it",
  },
  {
    name: "Finni AI",
    initials: "Fi",
    oneLiner:
      "Intelligent personal finance platform gamifying money management through AI micro-agents.",
    tags: ["FinTech", "AI", "Consumer"],
    logoUrl: "https://logo.clearbit.com/heyfinni.com",
    description:
      "Finni AI is an intelligent personal finance platform that gamifies money management through 9 specialized AI micro-agents. Just tell it what you spent like texting a friend — Finni figures out the rest, spots patterns, and gives you insights that actually make sense for your life.",
    website: "https://www.heyfinni.com/",
  },
  {
    name: "Itenx.it",
    initials: "It",
    oneLiner:
      "All-in-one platform for managing product iterations and stakeholder feedback loops.",
    tags: ["Product Management", "Collaboration", "SaaS"],
    logoUrl: "https://logo.clearbit.com/itenx.it",
    description:
      "Itenx.it is an all-in-one platform for managing product iterations and stakeholder feedback loops. Built for product teams who want to ship faster with cleaner feedback cycles and better collaboration across departments.",
    website: "https://itenx.it",
  },
];

function StartupLogo({ logoUrl, initials }: { logoUrl: string; initials: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="w-16 h-16 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
        <span className="font-mono font-bold text-accent text-xl">{initials}</span>
      </div>
    );
  }
  return (
    <img
      src={logoUrl}
      alt=""
      className="w-16 h-16 rounded-xl object-contain bg-white/5 flex-shrink-0"
      onError={() => setFailed(true)}
    />
  );
}

export default function Startups() {
  const [openModal, setOpenModal] = useState<string | null>(null);

  return (
    <section id="startups" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <h2 className="font-mono text-accent text-2xl sm:text-3xl mb-12 text-center">
        &lt;current_startups /&gt;
      </h2>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {startups.map((startup) => (
            <div
              key={startup.name}
              className="group block p-6 bg-card border border-[rgba(0,201,167,0.3)] rounded-xl hover:border-[rgba(0,201,167,0.6)] hover:shadow-[0_0_20px_rgba(0,201,167,0.4),0_0_60px_rgba(0,201,167,0.15)] hover:-translate-y-1 transition-all duration-300 overflow-visible"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                <span className="font-mono font-bold text-accent">{startup.initials}</span>
              </div>
              <h3 className="font-mono font-semibold text-xl text-white mb-2 group-hover:text-accent transition-colors">
                {startup.name}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{startup.oneLiner}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {startup.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-background rounded text-xs text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setOpenModal(startup.name)}
                className="inline-flex items-center gap-1 text-accent text-sm font-medium hover:underline"
              >
                Visit →
              </button>
            </div>
          ))}
        </div>
      </div>

      {startups.map((startup) => (
        <Modal
          key={startup.name}
          isOpen={openModal === startup.name}
          onClose={() => setOpenModal(null)}
        >
          <ModalCloseButton onClose={() => setOpenModal(null)} />
          <div className="flex items-start gap-4 mb-6">
            <StartupLogo logoUrl={startup.logoUrl} initials={startup.initials} />
            <div>
              <h3 className="font-mono font-semibold text-xl text-white mb-1">{startup.name}</h3>
              <p className="text-gray-400 text-sm">{startup.oneLiner}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {startup.tags.map((tag) => (
              <span key={tag} className="px-2 py-0.5 bg-background rounded text-xs text-gray-400">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">{startup.description}</p>
          <a
            href={startup.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#00C9A7] text-black font-semibold px-6 py-3 rounded-lg hover:bg-[#00C9A7]/90 transition-colors"
          >
            Visit Website →
          </a>
        </Modal>
      ))}
    </section>
  );
}
