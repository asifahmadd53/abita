import React from 'react';

const InfoCard = ({ icon, title, content, bgColor, borderColor }) => {
  return (
    <div className={`card flex flex-col items-start gap-6 p-6 h-72 w-full ss:w-[30rem] sm:w-80 lg:w-[28rem] shadow-lg ${borderColor ? `border ${borderColor}` : ''} md:items-center`}>
      <div className={`w-14 h-14 flex items-center justify-center rounded-full ${bgColor}`}>
        {icon}
      </div>
      <h1 className="text-2xl md:text-4xl">{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default InfoCard;
