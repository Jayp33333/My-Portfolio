import React from 'react';

const StatInfoCard = ({ label, icon: Icon, link }) => {
  return (
    <div className="p-2 text-[white] hover:text-primary transition-colors duration-300">
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-2 font-bold"
      >
        <Icon className="h-7 w-7 p-1 rounded-full" />
        {label}
      </a>
    </div>
  );
};

export default StatInfoCard;
