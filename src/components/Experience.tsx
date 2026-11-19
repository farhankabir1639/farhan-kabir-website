"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import Modal, { ModalCloseButton } from "./Modal";

const experiences = [
  {
    title: "Product Lead, AI Specialist",
    company: "Markopolo AI (HF0 Accelerator)",
    period: "Oct 2024–Present",
    description:
      "Led team of 25+ to ship 100+ AI features. Built 2 AI agents end-to-end. Achieved #2 on Product Hunt. Led Korea expansion — Top 10 at KSGC 2025.",
    modal: {
      website: "https://markopolo.ai/",
      aboutDescription:
        "Markopolo AI is an HF0-backed AI-powered marketing automation platform. I led a team of 25+ and shipped 100+ AI features, built 2 AI agents end-to-end, and drove the company's expansion into South Korea — achieving Top 10 at the Korean Startup Grand Challenge 2025. Also achieved #2 on Product Hunt.",
      impactBullets: [
        "Led team of 25+, shipped 100+ AI features",
        "Built 2 AI agents end-to-end",
        "#2 Product Hunt launch",
        "Top 10 Korean Startup Grand Challenge 2025",
      ],
    },
  },
  {
    title: "CEO & Co-Founder",
    company: "AgentLens",
    period: "2026–Present",
    description:
      "Building session replay for AI agents. Applying to YC S26. Working prototype live at agentlens.it.com.",
    modal: {
      website: "https://www.agentlens.it.com",
      aboutDescription:
        "AgentLens is an AI agent observability platform providing session replay for AI agents. Building session replay to help developers find and fix agent failures in seconds. Currently applying to YC S26 with a working prototype live at agentlens.it.com.",
      impactBullets: [
        "Building session replay for AI agents",
        "Applying to YC S26",
        "Working prototype live at agentlens.it.com",
      ],
    },
  },
  {
    title: "CEO & Co-Founder",
    company: "Finni AI",
    period: "June 2025–Present",
    description: "Founded AI personal finance platform with 9 specialized micro-agents.",
    modal: {
      website: "https://www.heyfinni.com/",
      aboutDescription:
        "Finni AI is an intelligent personal finance platform that gamifies money management through 9 specialized AI micro-agents. Founded to make personal finance accessible and engaging through conversational AI.",
      impactBullets: [
        "Founded AI personal finance platform",
        "9 specialized AI micro-agents",
        "Gamifying money management through conversational AI",
      ],
    },
  },
  {
    title: "Growth Product Manager",
    company: "TimeTackle (YC W21)",
    period: "Sep 2020–Sep 2024",
    description:
      "Founding team member. Scaled the product from zero in 3 years. Managed 1,000+ B2B/B2C customers. Achieved #3 on Product Hunt.",
    modal: {
      website: "https://www.timetackle.com/",
      aboutDescription:
        "TimeTackle is a YC W21-backed calendar analytics and time intelligence platform. As a founding team member, I helped scale the product from zero in 3 years, managed 1,000+ B2B/B2C customers including enterprise accounts like Deel, Chan Zuckerberg Initiative, Neo4j, and Roblox, and led the #3 Product Hunt launch.",
      impactBullets: [
        "Founding team member, scaled the product from zero",
        "Managed 1,000+ B2B/B2C customers",
        "#3 Product Hunt launch",
        "4 years of product growth experience",
      ],
    },
  },
  {
    title: "Product Owner",
    company: "CrossFund Singapore (Series A)",
    period: "Feb–Nov 2023",
    description:
      "Delivered 20+ crowdfunding software features. Managed team of 10. Launched Android app.",
    modal: {
      website: "https://www.crossfund.com/",
      aboutDescription:
        "CrossFund is a Series A-backed crowdfunding software platform based in Singapore. I delivered 20+ software features, managed a team of 10, and launched the Android app during my tenure.",
      impactBullets: [
        "Delivered 20+ software features",
        "Managed team of 10",
        "Launched Android app",
      ],
    },
  },
  {
    title: "Strategy & Planning Lead",
    company: "Dreamcast Marketing",
    period: "Nov 2021–Nov 2022",
    description: "GTM strategies for SaaS products. Increased acquisition by 200%.",
    modal: {
      website: null,
      aboutDescription:
        "Dreamcast Marketing is a marketing agency focused on SaaS products. I led GTM strategies and increased acquisition by 200% during my tenure.",
      impactBullets: [
        "GTM strategies for SaaS products",
        "Increased acquisition by 200%",
      ],
    },
  },
  {
    title: "Executive, PMO International",
    company: "PMaspire Singapore",
    period: "Jan–Aug 2020",
    description:
      "160+ demo sessions. 100% revenue increase in 6 months. 5+ franchise partnerships.",
    modal: {
      website: "https://pmaspire.com/",
      aboutDescription:
        "PMaspire is a Singapore-based project management training and consulting firm. I ran 160+ demo sessions, drove a 100% revenue increase in 6 months, and secured 5+ franchise partnerships across international markets.",
      impactBullets: [
        "160+ demo sessions delivered",
        "100% revenue increase in 6 months",
        "Secured 5+ international franchise partnerships",
      ],
    },
  },
];

export default function Experience() {
  const [openModal, setOpenModal] = useState<number | null>(null);

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="font-mono text-accent text-2xl sm:text-3xl mb-12 text-center">
        &lt;experience /&gt;
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute left-[11px] top-0 bottom-0 w-px bg-accent/30" />
          {experiences.map((exp, i) => (
            <div key={i} className="relative flex gap-6 pb-12 last:pb-0">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent border-4 border-background z-10" />
              <div
                onClick={() => setOpenModal(i)}
                className="flex-1 p-6 bg-card border border-[rgba(0,201,167,0.3)] rounded-xl hover:border-[rgba(0,201,167,0.6)] hover:shadow-[0_0_20px_rgba(0,201,167,0.4),0_0_60px_rgba(0,201,167,0.15)] hover:-translate-y-0.5 transition-all duration-300 overflow-visible cursor-pointer"
              >
                <div className="flex flex-wrap items-baseline gap-2 mb-2">
                  <h3 className="font-mono font-semibold text-white">{exp.title}</h3>
                  <span className="text-accent">@</span>
                  <span className="text-accent font-mono">{exp.company}</span>
                </div>
                <p className="text-gray-500 text-sm mb-3 flex items-center gap-1">
                  <MapPin size={14} />
                  {exp.period}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {experiences.map((exp, i) => (
        <Modal
          key={i}
          isOpen={openModal === i}
          onClose={() => setOpenModal(null)}
        >
          <ModalCloseButton onClose={() => setOpenModal(null)} />
          <h3 className="font-mono font-bold text-2xl text-white mb-1">{exp.company}</h3>
          <p className="text-accent font-mono mb-1">{exp.title}</p>
          <p className="text-gray-500 text-sm mb-6">{exp.period}</p>
          <hr className="border-gray-600 mb-6" />
          <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">About</p>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">{exp.modal.aboutDescription}</p>
          <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">My Impact</p>
          <ul className="text-gray-300 text-sm leading-relaxed mb-6 space-y-1">
            {exp.modal.impactBullets.map((bullet, j) => (
              <li key={j}>• {bullet}</li>
            ))}
          </ul>
          {exp.modal.website && (
            <a
              href={exp.modal.website}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#00C9A7] text-black font-semibold px-6 py-3 rounded-lg hover:bg-[#00C9A7]/90 transition-colors"
            >
              Visit Website →
            </a>
          )}
        </Modal>
      ))}
    </section>
  );
}
