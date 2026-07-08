import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { useEffect } from 'react';

export function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBookNow = () => {
    // Add booking functionality here
    console.log('Book Now clicked');
  };

  const handleExploreFleet = () => {
    // Add explore fleet functionality here
    console.log('Explore Fleet clicked');
  };

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url("/Home (1).png")',
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 py-20">
          <p className="mb-4 text-sm md:text-base font-semibold text-brand-red tracking-widest">
            DUBAI'S PREMIER LUXURY CHAUFFEUR SERVICE
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-brand-white leading-tight">
            Welcome to
          </h1>
          <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-brand-red mt-2 md:mt-4">
            LuxRideDXB
          </h2>
          <p className="mt-6 md:mt-8 font-serif text-xl md:text-2xl font-bold text-brand-white">
            Arrive Like You Mean It.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-sm md:text-base text-brand-gray leading-relaxed">
            Dubai's most trusted luxury chauffeur service — refined vehicles, impeccable professionals, and seamless journeys across the Emirates.
          </p>
          <div className="mt-10 md:mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
            <button
              onClick={handleBookNow}
              className="px-6 py-2 md:px-8 md:py-3 bg-brand-red text-brand-black font-bold font-display tracking-wider uppercase transition-all duration-200 hover:bg-brand-red/90 active:scale-95 text-sm md:text-base"
            >
              Book Now
            </button>
            <button
              onClick={handleExploreFleet}
              className="px-6 py-2 md:px-8 md:py-3 border-2 border-brand-red text-brand-red font-bold font-display tracking-wider uppercase transition-all duration-200 hover:bg-brand-red/10 active:scale-95 text-sm md:text-base"
            >
              Explore Fleet
            </button>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-20 md:bottom-24 flex flex-col items-center gap-3">
            <p className="text-xs md:text-sm text-brand-gray uppercase tracking-widest font-semibold">
              Scroll
            </p>
            <svg
              className="h-5 w-5 md:h-6 md:w-6 animate-bounce text-brand-gray"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}
