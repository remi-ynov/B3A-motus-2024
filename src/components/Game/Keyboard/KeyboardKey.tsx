import React from 'react';

interface Props {
  letter: string;
  onKeyPress: (letter: string) => void;
}

const KeyboardKey: React.FC<Props> = ({ letter, onKeyPress }) => {
  return (
    <div
      key={letter}
      className="h-12 w-12 border-2 border-black rounded-md flex items-center justify-center m-1 hover:cursor-pointer"
      onClick={() => onKeyPress(letter)}
    >
      {letter}
    </div>
  );
};

export default KeyboardKey;
