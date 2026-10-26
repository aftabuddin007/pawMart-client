import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import {
  PawPrint,
  HeartHandshake,
  Users,
  ShoppingBag,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const achievements = [
  {
    id: 1,
    icon: PawPrint,
    number: 1200,
    suffix: "+",
    title: "Pets Listed",
    description: "Adorable pets waiting for loving homes",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "group-hover:border-emerald-500/40",
    glow: "group-hover:shadow-emerald-500/10",
  },
  {
    id: 2,
    icon: HeartHandshake,
    number: 850,
    suffix: "+",
    title: "Successful Adoptions",
    description: "Happy pets finding their forever families",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "group-hover:border-pink-500/40",
    glow: "group-hover:shadow-pink-500/10",
  },
  {
    id: 3,
    icon: Users,
    number: 2500,
    suffix: "+",
    title: "Happy Members",
    description: "Pet lovers connected through PawMart",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "group-hover:border-violet-500/40",
    glow: "group-hover:shadow-violet-500/10",
  },
  {
    id: 4,
    icon: ShoppingBag,
    number: 3500,
    suffix: "+",
    title: "Products Listed",
    description: "Quality pet essentials for every companion",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "group-hover:border-amber-500/40",
    glow: "group-hover:shadow-amber-500/10",
  },
];

const OurAchievements = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    const section = sectionRef.current;

    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0B1120] py-20 md:py-28"
    >
      {/* Background Glow Effects */}
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-emerald-500/5 blur-[120px]" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-violet-500/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">

          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
            <Sparkles size={16} />
            Our Milestones
          </div>

          <h2 className="mb-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Small Paws,{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Big Achievements
            </span>
          </h2>

          <p className="mx-auto max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
            Every adoption, every connection, and every happy tail
            brings us closer to creating a better world for pets.
            Here's what we've achieved together.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {achievements.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#151E30] p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${item.border} ${item.glow}`}
              >
                {/* Top Right Arrow */}
                <div className="absolute right-5 top-5 text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white">
                  <ArrowUpRight size={19} />
                </div>

                {/* Icon */}
                <div
                  className={`mb-7 flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg} ${item.color} transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon size={27} strokeWidth={1.8} />
                </div>

                {/* Animated Number */}
                <h3 className="mb-3 text-4xl font-bold tracking-tight text-white lg:text-5xl">
                  {isVisible ? (
                    <CountUp
                      start={0}
                      end={item.number}
                      duration={2.5}
                      separator=","
                    />
                  ) : (
                    0
                  )}
                  <span className={item.color}>{item.suffix}</span>
                </h3>

                {/* Title */}
                <h4 className="mb-2 text-lg font-semibold text-white">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>

                {/* Bottom Gradient Line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-emerald-400 to-teal-400 transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}

        </div>

      

      </div>
    </section>
  );
};

export default OurAchievements;