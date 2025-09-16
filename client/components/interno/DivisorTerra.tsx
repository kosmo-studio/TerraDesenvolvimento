import React from 'react';

const DivisorTerra: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24 flex flex-col items-center text-center gap-10 md:gap-12 w-full">
      <div className="flex items-center justify-center gap-6 w-full max-w-4xl px-4">
        <div className="flex-grow h-px bg-[#162946]" />
        <img src="/images/terra logo.png" alt="Ícone Terra" className="w-10 h-10 object-contain" />
        <div className="flex-grow h-px bg-[#162946]" />
      </div>
    </section>
  );
};

export default DivisorTerra;