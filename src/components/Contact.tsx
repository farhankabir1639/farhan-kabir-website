import Link from "next/link";
import { Linkedin, Github, Twitter, Mail } from "lucide-react";

const socialLinks = [
  { href: "https://www.linkedin.com/in/farhan-kabir-602888131/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/farhankabir1639", icon: Github, label: "GitHub" },
  { href: "https://x.com/farhankabir039", icon: Twitter, label: "X" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-mono text-accent text-2xl sm:text-3xl mb-6">
          &lt;contact /&gt;
        </h2>
        <h3 className="text-3xl sm:text-4xl font-mono font-bold text-white mb-4">
          Let&apos;s build something.
        </h3>
        <p className="text-gray-400 text-lg mb-10">
          I&apos;m always open to new projects, opportunities, and collaborations.
        </p>
        <Link
          href="mailto:kabirfarhan2@gmail.com"
          className="inline-flex items-center justify-center px-8 py-4 bg-accent text-background font-medium rounded-lg hover:bg-accent/90 transition-colors"
        >
          Get In Touch →
        </Link>
        <a
          href="mailto:kabirfarhan2@gmail.com"
          className="block mt-4 text-[#00C9A7] hover:underline text-sm"
        >
          kabirfarhan2@gmail.com
        </a>
        <div className="flex justify-center gap-6 mt-10">
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
        <footer className="mt-16 pt-8 border-t border-card text-gray-500 text-sm">
          © 2026 Farhan Kabir. Built with Next.js & Tailwind CSS.
        </footer>
      </div>
    </section>
  );
}
