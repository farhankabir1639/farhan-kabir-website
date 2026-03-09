import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Farhan has been an exceptionally resourceful and hardworking! He wears multiple hats and adeptly helps with customer success, growth, business operations, marketing, QA and product. He is the most amiable team member who goes above and beyond. A quick learner and very agile in adapting to trends in a fast-paced startup environment.",
    author: "Fariah Mahzabeen, Ph.D.",
    role: "Associate Professor, Stanford PhD · Co-Founder & COO at Tackle",
  },
  {
    quote:
      "It was a big pleasure to work with Farhan! His consistent positivity and relentless pursuit of solutions, even in challenging situations, were truly inspirational. His presence and input always added significant value to our work.",
    author: "Anastasiya Berezina",
    role: "Project Manager | Product Owner | PMP",
  },
  {
    quote:
      "Farhan was a very capable, responsive and considerate problem solver, building and repairing several elements of the platform with limited support. He showed a willingness to take on difficult deadlines and tasks with a consistent positive attitude.",
    author: "Luke Sheehan",
    role: "Copywriter, Editor, Content Strategist",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="font-mono text-accent text-2xl sm:text-3xl mb-12 text-center">
        &lt;testimonials /&gt;
      </h2>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(({ quote, author, role }) => (
            <div
              key={author}
              className="p-6 bg-card border border-[rgba(0,201,167,0.3)] rounded-xl hover:border-[rgba(0,201,167,0.6)] hover:shadow-[0_0_20px_rgba(0,201,167,0.4),0_0_60px_rgba(0,201,167,0.15)] hover:-translate-y-1 transition-all duration-300 overflow-visible"
            >
              <Quote className="text-accent/50 mb-4" size={32} />
              <p className="text-gray-300 text-sm leading-relaxed mb-6">&ldquo;{quote}&rdquo;</p>
              <div>
                <p className="font-mono font-semibold text-accent">— {author}</p>
                <p className="text-gray-500 text-xs mt-1">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
