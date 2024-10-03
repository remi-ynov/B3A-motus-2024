import React from 'react';
import GridRow from 'src/components/Game/Grid/GridRow.tsx';
import { generateArray } from 'src/helpers/genericHelper.ts';

interface Props {
  word: string;
}

const Grid: React.FC<Props> = ({ word }) => {
  return (
    <div>
      {
        generateArray(6).map((element) => (
          <GridRow key={element} word={word} />
        ))
      }
    </div>
  );
};

export default Grid;
