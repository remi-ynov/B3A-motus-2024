import React from 'react';
import GridRow from 'src/components/Game/Grid/GridRow.tsx';
import { generateArray } from 'src/helpers/genericHelper.ts';

const Grid: React.FC = () => {
  return (
    <div>
      {
        generateArray(6).map((element) => (
          <GridRow key={element} />
        ))
      }
    </div>
  );
};

export default Grid;
