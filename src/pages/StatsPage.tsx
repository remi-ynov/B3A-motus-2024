import React from 'react';
import LinkButton from 'src/components/Shared/LinkButton.tsx';

const StatsPage: React.FC = () => {
  return (
    <div>
      <LinkButton to="/" label="Retour" />

      <p className="my-12">
        Statistiques indisponibles pour le moment
      </p>
    </div>
  );
};

export default StatsPage;
