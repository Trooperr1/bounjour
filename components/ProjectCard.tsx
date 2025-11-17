'use client';

import { useState } from 'react';
import { ArrowRight, ExternalLink, LucideIcon } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  icon: LucideIcon;
  client: string;
  description: string;
  results: string[];
  technologies: string[];
  image: string;
  index: number;
}

export default function ProjectCard({
  title,
  category,
  icon: Icon,
  client,
  description,
  results,
  technologies,
  image,
  index,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="glass-effect rounded-2xl overflow-hidden group hover:bg-white/10 transition-all duration-500 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Project Visual */}
        <div className="relative bg-gradient-to-br from-white/10 to-white/0 p-8 lg:p-12 flex items-center justify-center overflow-hidden min-h-[400px]">
          <div className="absolute inset-0 grid-background opacity-20" />

          {/* Animated background */}
          <div
            className={`absolute inset-0 bg-gradient-to-br from-white/5 to-transparent transition-all duration-700 ${
              isHovered ? 'opacity-100 scale-110' : 'opacity-0 scale-100'
            }`}
          />

          {/* Icon display */}
          <div className="relative z-10 w-full aspect-square max-w-sm rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:border-white/20">
            <Icon
              size={120}
              className={`transition-all duration-500 ${
                isHovered ? 'text-white/40 scale-110' : 'text-white/20'
              }`}
            />
          </div>

          {/* Floating category badge */}
          <div className="absolute top-6 left-6 z-20">
            <div className="px-4 py-2 bg-black/80 backdrop-blur-xl border border-white/20 rounded-full text-sm font-medium">
              {category}
            </div>
          </div>
        </div>

        {/* Project Info */}
        <div className="p-8 lg:p-12 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                <Icon size={24} />
              </div>
              <span className="text-sm font-medium text-gray-400">{client}</span>
            </div>

            <h2 className="heading-sm mb-4 group-hover:text-shadow-glow transition-all duration-300">
              {title}
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>

            <div className="mb-6">
              <h3 className="font-semibold mb-3 text-white">Key Results:</h3>
              <ul className="space-y-2">
                {results.map((result, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/60 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-3 text-white">Technologies:</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button className="flex-1 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2">
              View Case Study
              <ArrowRight size={18} />
            </button>
            <button className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
              <ExternalLink size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
