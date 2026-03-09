import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-grid relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-mono font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4">
          Farhan Kabir
        </h1>
        <p className="font-mono text-accent text-lg sm:text-xl md:text-2xl mb-6">
          Founder · AI Product Builder · Head of Product
        </p>
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-10">
          Building AI-powered products from 0 to 1. From ideation to execution.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#startups"
            className="inline-flex items-center justify-center px-6 py-3 bg-accent text-background font-medium rounded-lg hover:bg-accent/90 transition-colors"
          >
            See My Work →
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-accent text-accent font-medium rounded-lg hover:bg-accent/10 transition-colors"
          >
            Let&apos;s Talk
          </Link>
        </div>
        <div className="mt-12">
          <p className="text-gray-500 text-sm mb-4">Worked within</p>
          <div className="flex flex-wrap items-center justify-center gap-10">
            <a
              href="https://www.ycombinator.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/Y-combinator-logo.png"
                alt="Y Combinator"
                className="h-10 w-auto object-contain grayscale opacity-40 hover:opacity-80 hover:grayscale-0 transition-all duration-300"
              />
            </a>
            <a
              href="https://www.hf0.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/hf0.gif"
                alt="HF0"
                className="h-10 w-auto object-contain grayscale opacity-40 hover:opacity-80 hover:grayscale-0 transition-all duration-300"
              />
            </a>
            <a
              href="https://www.k-startup.go.kr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/ksgc.png"
                alt="K-Startup Grand Challenge"
                className="h-10 w-auto object-contain grayscale opacity-40 hover:opacity-80 hover:grayscale-0 transition-all duration-300"
              />
            </a>
            <a
              href="https://acceleratingasia.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/accelerating asia.webp"
                alt="Accelerating Asia"
                className="h-10 w-auto object-contain grayscale opacity-40 hover:opacity-80 hover:grayscale-0 transition-all duration-300"
              />
            </a>
          </div>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-accent"
        aria-label="Scroll to about"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
