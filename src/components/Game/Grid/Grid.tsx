import React from 'react';
import GridRow from 'src/components/Game/Grid/GridRow.tsx';
import { generateArray } from 'src/helpers/genericHelper.ts';
import { MAX_ATTEMPTS } from 'src/config/gameConfig.ts';
import { useAtomValue } from 'jotai/index';
import { attemptsAtom, getWordAtom, resultsAtom } from 'src/atoms/gameAtoms.ts';

const Grid: React.FC = () => {
  const word = useAtomValue(getWordAtom);
  const attempts = useAtomValue(attemptsAtom);
  const results = useAtomValue(resultsAtom);

  return (
    <div>
      {
        generateArray(MAX_ATTEMPTS).map((element, index) => (
          <GridRow
            key={element}
            length={word.length}
            attempt={index in attempts ? attempts[index] : ''}
            result={index in results ? results[index] : ''}
          />
        ))
      }
    </div>
  );
};

export default Grid;
