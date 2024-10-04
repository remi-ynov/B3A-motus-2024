import React from 'react';
import KeyboardRow from 'src/components/Game/Keyboard/KeyboardRow.tsx';

const rows = ['AZERTYUIOP', 'QSDFGHJKLM', 'WXCVBN⌫↲'];

interface Props {
  onKeyPress: (letter: string) => void;
}

const Keyboard: React.FC<Props> = ({ onKeyPress }) => {
  return (
    <div className="flex flex-col justify-center items-center my-12">
      {rows.map((row) => (
        <KeyboardRow
          key={row[0]}
          letters={row}
          onKeyPress={onKeyPress}
        />
      ))}
    </div>
  );
};

export default Keyboard;
