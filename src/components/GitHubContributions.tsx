"use client";

import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { fetchGitHubStats } from "@/lib/github";
import { FolderGit2, Star, GitCommit } from "lucide-react";

const GITHUB_USER = "farhankabir1639";

export default function GitHubContributions() {
  const [stats, setStats] = useState<{ repos: number; stars: number } | null>(null);

  useEffect(() => {
    fetchGitHubStats().then(setStats);
  }, []);

  return (
    <section id="github" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <h2 className="font-mono text-accent text-2xl sm:text-3xl mb-12 text-center">
        &lt;github_contributions /&gt;
      </h2>
      <div className="max-w-4xl mx-auto">
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="p-4 bg-card border border-[rgba(0,201,167,0.3)] rounded-xl hover:border-[rgba(0,201,167,0.6)] hover:shadow-[0_0_20px_rgba(0,201,167,0.4),0_0_60px_rgba(0,201,167,0.15)] transition-all duration-300 text-center overflow-visible">
            <FolderGit2 className="mx-auto mb-2 text-accent" size={28} />
            <p className="font-mono font-bold text-2xl text-white">
              {stats?.repos ?? "—"}
            </p>
            <p className="text-gray-500 text-sm">Repos</p>
          </div>
          <div className="p-4 bg-card border border-[rgba(0,201,167,0.3)] rounded-xl hover:border-[rgba(0,201,167,0.6)] hover:shadow-[0_0_20px_rgba(0,201,167,0.4),0_0_60px_rgba(0,201,167,0.15)] transition-all duration-300 text-center overflow-visible">
            <Star className="mx-auto mb-2 text-accent" size={28} />
            <p className="font-mono font-bold text-2xl text-white">
              {stats?.stars ?? "—"}
            </p>
            <p className="text-gray-500 text-sm">Stars</p>
          </div>
          <div className="p-4 bg-card border border-[rgba(0,201,167,0.3)] rounded-xl hover:border-[rgba(0,201,167,0.6)] hover:shadow-[0_0_20px_rgba(0,201,167,0.4),0_0_60px_rgba(0,201,167,0.15)] transition-all duration-300 text-center overflow-visible">
            <GitCommit className="mx-auto mb-2 text-accent" size={28} />
            <p className="font-mono font-bold text-2xl text-white">Live</p>
            <p className="text-gray-500 text-sm">Contributions</p>
          </div>
        </div>

        {/* Heatmap - react-github-calendar fetches its own data */}
        <div className="p-6 bg-card border border-[rgba(0,201,167,0.3)] rounded-xl hover:border-[rgba(0,201,167,0.6)] hover:shadow-[0_0_20px_rgba(0,201,167,0.4),0_0_60px_rgba(0,201,167,0.15)] transition-all duration-300 overflow-visible">
          <div className="overflow-x-auto">
          <GitHubCalendar
            username={GITHUB_USER}
            blockSize={12}
            blockMargin={3}
            fontSize={12}
            theme={{
              level0: "#0D1117",
              level1: "#0e4429",
              level2: "#006d32",
              level3: "#26a641",
              level4: "#00C9A7",
            }}
          />
          </div>
        </div>
      </div>
    </section>
  );
}
