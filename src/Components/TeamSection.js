import React from 'react';
import TeamMemberCard from './TeamMemberCard';

const teamMembers = [
  {
    id: 1,
    name: 'Amar Patel',
    role: 'Fitness Trainer',
    bio: 'Passionate about helping individuals achieve their fitness goals. Certified personal trainer with 5+ years of experience.',
    imageUrl: 'https://media.licdn.com/dms/image/C5603AQG2nree0V_CEw/profile-displayphoto-shrink_800_800/0/1648127226917?e=2147483647&v=beta&t=lP0Lern7sfoH3VLY1qWdrz9wKhytBd9Gg4NHtaN0EN8', 
  },
  {
    id: 2,
    name: 'Anjali Arora',
    role: 'Yoga Instructor',
    bio: 'Experienced yoga instructor specializing in Hatha and Vinyasa. Committed to promoting holistic well-being through yoga practice.',
    imageUrl: 'https://www.shutterstock.com/image-photo/portrait-female-personal-trainer-holding-260nw-2249557387.jpg', 
  },
  {
    id: 3,
    name: 'Jagdish Narayanan',
    role: 'Fitness Trainer',
    bio: 'Passionate about helping individuals achieve their fitness goals. Certified personal trainer with 5+ years of experience.',
    imageUrl: 'https://www.fitnessmatters.org/wp-content/uploads/2022/05/IMG-20fff210307-WA0012.jpg', 
  },
  {
    id: 4,
    name: 'Sindhu Mishra',
    role: 'Yoga Instructor',
    bio: 'Experienced yoga instructor specializing in Hatha and Vinyasa. Committed to promoting holistic well-being through yoga practice.',
    imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zml0bmVzcyUyMHRyYWluZXJ8ZW58MHx8MHx8fDA%3D', 
  },
  // Add more team members as needed
];

const TeamSection = () => (
  <div className="mb-8">
    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">Meet Our Team</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {teamMembers.map((member) => (
        <TeamMemberCard key={member.id} {...member} />
      ))}
    </div>
  </div>
);

export default TeamSection;
