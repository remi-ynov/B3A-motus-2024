import React from 'react';

const firstRow = 'azertyuiop';
const secondRow = 'qsdfghjklm';
const thirdRow = 'wxcvbn⌫↲';

const Keyboard: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center my-12">
      <div className="flex">
        {
          Array.from(firstRow).map((letter) => (
            <div className="h-12 w-12 border-2 border-black rounded-md flex items-center justify-center" key={letter}>
              {letter}
            </div>
          ))
        }
      </div>

      <div className="flex">
        {
          Array.from(secondRow).map((letter) => (
            <div className="h-12 w-12 border-2 border-black rounded-md flex items-center justify-center" key={letter}>
              {letter}
            </div>
          ))
        }
      </div>

      <div className="flex">
        {
          Array.from(thirdRow).map((letter) => (
            <div className="h-12 w-12 border-2 border-black rounded-md flex items-center justify-center" key={letter}>
              {letter}
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Keyboard;
