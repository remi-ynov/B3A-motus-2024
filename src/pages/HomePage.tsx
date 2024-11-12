import React from 'react';
import LinkButton from 'src/components/Shared/LinkButton.tsx';


const HomePage: React.FC = () => {
  return (
    <div className=" w-1/3 flex items-center justify-around">
      <LinkButton to="/game" label="Jouer" />
      <LinkButton to="/stats" label="Statistiques" />
    </div>
  );
};

export default HomePage;
