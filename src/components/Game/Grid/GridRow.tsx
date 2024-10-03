import React from 'react';
import { generateArray } from 'src/helpers/genericHelper.ts';
import GridBox from 'src/components/Game/Grid/GridBox.tsx';

const GridRow: React.FC = () => {
  return (
    <div className="flex">
        {
            generateArray(3).map((element) => (
              <GridBox key={element} />
            ))
        }
    </div>
  );
};

export default GridRow;
