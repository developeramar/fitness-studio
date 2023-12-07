// ServicePage.js
import { CgGym } from "react-icons/cg";
import React from 'react';

const services = [
  {
    id: 1,
    title: 'Gym Service',
    description: 'State-of-the-art gym equipment and personalized workout plans.',
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVz7crKyb8vk6pPqhsUiD8pvxZ0z8s9Moe3g&usqp=CAU", 
  },
  {
    id: 2,
    title: 'Personal Diet Plan',
    description: 'Tailored diet plans designed for individual fitness goals and needs.',
    url: 'https://images.news18.com/ibnkhabar/uploads/2021/06/gym-diet-plan.jpg?im=FitAndFill,width=1200,height=1200', 
  },
  {
    id: 3,
    title: 'Diet Products',
    description: 'Quality diet products to support your health and fitness journey.',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyZgUASAAU4ijJ6t-KKJh60UsiNS5JLzw6pqaCVsSpWizN4afH953i0iEVDUXRg7g5a90&usqp=CAU', 
  },
  {
    id: 4,
    title: 'Personal Trainers',
    description: 'Experienced and certified personal trainers to guide and motivate you.',
    url: 'https://www.constantcontact.com/blog/wp-content/uploads/2021/01/Social-16.jpg', 
  },
  {
    id: 5,
    title: 'Dress',
    description: 'Quality Dresses for your boady and fitness journey.',
    url: 'https://img101.urbanic.com/v1/goods-pic/4ba71bf1bc73419d825e135beadb19a4UR_w1440_q90.webp', 
  },
  {
    id: 6,
    title: 'Personal Gym Setup',
    description: 'personalized  personal Gyms at your Home with Certified and Exprienced Trainer.',
    url: 'https://webassets-prod.ultimateperformance.com/uploads/2023/01/13101233/Partner-Coach-Banner-1200x900px.jpg', 
  },
];

const Service = () => (
  <div className="container mx-auto my-8 px-4 md:px-0 " >
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Our Services</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 m-16  hover:cursor-pointer">
      {services.map((service) => (
        <div key={service.id} className="bg-white p-4 rounded-md shadow-md  ">
          <img src={service.url} alt={service.title} className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-lg font-bold mb-2">{service.title}</h2>
          <p className="text-sm">{service.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Service;
