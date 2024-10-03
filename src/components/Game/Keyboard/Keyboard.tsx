import React from 'react';
import KeyboardRow from 'src/components/Game/Keyboard/KeyboardRow.tsx';

const rows = ['azertyuiop', 'qsdfghjklm', 'wxcvbn⌫↲'];

const Keyboard: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center my-12">
      {rows.map((row) => (
        <KeyboardRow key={row[0]} letters={row} />
      ))}
    </div>
  );
};

export default Keyboard;
