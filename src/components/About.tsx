"use client";

import Link from "next/link";
import { Linkedin, Github, Twitter, Mail } from "lucide-react";

const socialLinks = [
  { href: "https://www.linkedin.com/in/farhan-kabir-602888131/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/farhankabir1639", icon: Github, label: "GitHub" },
  { href: "https://x.com/farhankabir039", icon: Twitter, label: "X" },
  { href: "mailto:kabirfarhan2@gmail.com", icon: Mail, label: "Email" },
];

const badges = ["YC Ecosystem", "HF0", "Korea Top 10", "500+ AI Users"];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="font-mono text-accent text-2xl sm:text-3xl mb-12 text-center">
        &lt;about /&gt;
      </h2>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex flex-col items-center lg:items-start flex-shrink-0">
            <img
              src="/Farhan%20Kabir.jpg"
              alt="Farhan Kabir"
              className="w-40 h-40 rounded-full object-cover ring-2 ring-[#00C9A7] ring-offset-2 ring-offset-[#0D1117]"
            />
            <div className="flex gap-4 mt-6">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent transition-colors"
                  aria-label={label}
                >
                  <Icon size={24} />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I&apos;m a founder and AI product builder with a track record of launching products
              from 0 to 1. As a founding team member at TimeTackle (YC W21), I helped scale to $500K
              ARR in 3 years. At Markopolo AI (HF0), I shipped 100+ AI features and led our expansion
              into South Korea — recognized as Top 10 at the Korean Startup Grand Challenge 2025. I
              specialize in turning complex AI ideas into scalable, user-loved products.
            </p>
            <div className="flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 bg-card border border-accent/30 rounded-full text-accent text-sm font-mono"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
