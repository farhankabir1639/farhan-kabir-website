import { Trophy, DollarSign, Rocket, Bot, GraduationCap } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    stat: "Top 10",
    label: "Korea KSGC 2025",
  },
  {
    icon: DollarSign,
    stat: "$500K ARR",
    label: "YC Startup",
  },
  {
    icon: Rocket,
    stat: "#3 Product Hunt",
    label: "TimeTackle",
  },
  {
    icon: Rocket,
    stat: "#2 Product Hunt",
    label: "Markopolo AI",
  },
  {
    icon: Bot,
    stat: "5+ AI Tools",
    label: "Built Independently",
  },
  {
    icon: GraduationCap,
    stat: "Stanford Top 4",
    label: "Design Challenge 2020",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <h2 className="font-mono text-accent text-2xl sm:text-3xl mb-12 text-center">
        &lt;achievements /&gt;
      </h2>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {achievements.map(({ icon: Icon, stat, label }) => (
            <div
              key={label}
              className="p-4 bg-card border border-[rgba(0,201,167,0.3)] rounded-xl hover:border-[rgba(0,201,167,0.6)] hover:shadow-[0_0_20px_rgba(0,201,167,0.4),0_0_60px_rgba(0,201,167,0.15)] hover:-translate-y-1 transition-all duration-300 text-center overflow-visible"
            >
              <Icon className="mx-auto mb-2 text-accent" size={28} />
              <p className="font-mono font-bold text-white text-lg">{stat}</p>
              <p className="text-gray-500 text-xs mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
