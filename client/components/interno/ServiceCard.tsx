import React from 'react';

interface InfoCardProps {
  label: string;
  icon: string;
  text: string;
}

const ServiceCard: React.FC<InfoCardProps> = ({ label, icon, text }) => {
  return (
    <div className="text-center">
      <div className="bg-terra-navy shadow-lg rounded-3xl w-full h-0 pt-[100%] relative text-white">
        
        <span className="absolute text-[27px] top-4 left-4 text-lg font-light">{label}</span>
      
        <img 
          src={icon} 
          alt={text} 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 md:w-20 md:h-20 invert" 
        />

      </div>

      <p className="font-light sm:text-lg text-terra-navy mt-4">{text}</p>
    </div>
  );
};

export default ServiceCard;