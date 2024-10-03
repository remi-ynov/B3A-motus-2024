import React from 'react';

interface Props {
  letter: string;
}

const GridBox: React.FC<Props> = ({ letter }) => {
  return (
    <div className="w-16 h-16 bg-blue-700 m-1 text-white text-3xl flex items-center justify-center">
      {letter}
    </div>
  );
};

export default GridBox;
