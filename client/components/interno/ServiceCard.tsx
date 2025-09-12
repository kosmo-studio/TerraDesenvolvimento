import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center max-w-sm">
      <div className="w-16 h-16 mb-4 flex items-center justify-center">
        <img src={icon} alt={title} className="w-full h-full object-contain" />
      </div>
      <h3 className="text-[#162946] text-lg font-semibold mb-3">{title}</h3>
      <p className="text-[#162946] text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
