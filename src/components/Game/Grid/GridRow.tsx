import React from 'react';
import { generateArray } from 'src/helpers/genericHelper.ts';
import GridBox from 'src/components/Game/Grid/GridBox.tsx';

interface Props {
  word: string;
}

const GridRow: React.FC<Props> = ({ word }) => {
  return (
    <div className="flex">
        {
            generateArray(word.length).map((element, index) => (
              <GridBox
                key={element}
                letter={index === 0 ? word.charAt(0) : ''}
              />
            ))
        }
    </div>
  );
};

export default GridRow;
