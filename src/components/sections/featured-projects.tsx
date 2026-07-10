'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ImageOff } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  image: string;
};

const projectsData: Project[] = [
  {
    title: 'Brand Boost Initiative',
    description: 'Drive lead generation for a sustainability firm.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=380&h=285&fit=crop&crop=center',
  },
  {
    title: 'EcomPro SEO Optimization',
    description: 'Increase brand awareness and engagement.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=380&h=285&fit=crop&crop=center',
  },
  {
    title: 'LuxuryLaunch Campaign',
    description: 'Revolutionizing industries with personalized, success-oriented marketing',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=380&h=285&fit=crop&crop=center',
  },
];

const fullProjectsList = [...projectsData, ...projectsData];

const ProjectCard = ({ project }: { project: Project }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="w-[260px] sm:w-[280px] md:w-[320px] lg:w-[380px] flex-shrink-0 snap-start">
      <div className="relative group overflow-hidden rounded-2xl sm:rounded-3xl bg-gray-200">
        {!imageError ? (
          <Image
            src={project.image}
            alt={project.title}
            width={380}
            height={285}
            className="w-full object-cover aspect-[4/3] transition-transform duration-700 ease-out group-hover:scale-110"
            onError={() => setImageError(true)}
            loading="lazy"
          />
        ) : (
          <div className="w-full aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">
            <div className="text-center">
              <ImageOff className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-2" />
              <p className="text-xs sm:text-sm text-gray-500">Image unavailable</p>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F35]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <h4 className="text-xl sm:text-2xl font-bold text-primary-background mt-4 sm:mt-6 transition-colors duration-300 group-hover:text-accent-purple">{project.title}</h4>
      <p className="text-sm sm:text-base text-text-secondary mt-1 sm:mt-2">{project.description}</p>
    </div>
  );
};

const FeaturedProjectsClient = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const card = scrollContainerRef.current.querySelector(':scope > div');
      if (card) {
        const scrollAmount = card.clientWidth + 24;
        scrollContainerRef.current.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 sm:mb-12 gap-y-4 sm:gap-y-6">
          <div className="animate-fade-in-up">
            <h5 className="font-bold text-xs sm:text-sm text-accent-red tracking-widest">OUR WORKS</h5>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-primary-background mt-1 sm:mt-2 uppercase max-w-lg">
              OUR FEATURED PROJECTS
            </h2>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-primary-background text-white flex items-center justify-center cursor-pointer transition-all duration-300 hover:opacity-80 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-primary-background text-white flex items-center justify-center cursor-pointer transition-all duration-300 hover:opacity-80 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </button>
          </div>
        </div>
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-4 sm:gap-6 pb-4 sm:pb-6 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
        {fullProjectsList.map((project, index) => (
          <ProjectCard key={`${project.title}-${index}`} project={project} />
        ))}
      </div>
    </div>
  );
};

const FeaturedProjects = () => {
  return (
    <section className="bg-card-background-white py-20 lg:py-32">
      <FeaturedProjectsClient />
    </section>
  );
};

export default FeaturedProjects;