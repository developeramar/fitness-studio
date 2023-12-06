import React from 'react';

const TeamMemberCard = ({ name, role, bio, imageUrl }) => (
  <div className="max-w-sm md:max-w-md lg:max-w-lg rounded overflow-hidden shadow-lg mx-auto mb-4">
    <img src={imageUrl} alt={name} className="w-full h-40 md:h-48 lg:h-56 object-cover" />
    <div className="px-6 py-4">
      <div className="font-bold text-lg md:text-xl lg:text-2xl mb-2">{name}</div>
      <p className="text-gray-700 text-base md:text-lg lg:text-xl">{role}</p>
      <p className="text-gray-600 text-sm md:text-base lg:text-lg mt-2">{bio}</p>
    </div>
  </div>
);

export default TeamMemberCard;
