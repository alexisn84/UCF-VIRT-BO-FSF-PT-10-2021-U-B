import React from 'react';
import Card from './Card';

const canine = {
  name: 'Spot',
  description: 'The best boy',
  id: 1,
};

export default function Display() {
  return (
    <div>
        // TODO: Write logic that will render a Card component for the dog
        <Card
          name={canine.name}
          description={canine.description}
          id={canine.id}
        />
        
    </div>
  );
}