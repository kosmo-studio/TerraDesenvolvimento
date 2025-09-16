import React from 'react';


interface HeroSectionProps {
  backgroundImage: string;
  title: React.ReactNode; 
  subtitle: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ backgroundImage, title, subtitle }) => {
  return (
    <section className="relative w-full h-[80vh] text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
        aria-hidden="true"
      />

      <div className="relative h-full flex flex-col items-center pt-28 md:pt-32 xl:pt-36 text-center p-4 md:p-8 ">
        <h1 
          className="text-terra-navy text-4xl md:text-4xl xl:text-6xl lg:w-[1100px] font-bold xl:font-semibold leading-tight mb-4"
        >
         
          {title}
        </h1>
        <p 
          className="text-terra-navy text-md md:text-2xl max-w-4xl font-light"
        >
          
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;