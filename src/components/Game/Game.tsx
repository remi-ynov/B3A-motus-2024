import React from 'react';
import Grid from 'src/components/Game/Grid/Grid.tsx';
import Keyboard from 'src/components/Game/Keyboard/Keyboard.tsx';
import Button from 'src/components/Shared/Button.tsx';
import { useAtom } from 'jotai';
import { numberGamesAtom } from 'src/atoms/gameAtoms.ts';
import useGame from 'src/hooks/useGame.ts';

const Game: React.FC = () => {
  const [numberGames, setNumberGames] = useAtom(numberGamesAtom);
  const { onKeyPress } = useGame();

  return (
    <>
      <Grid />
      <Keyboard onKeyPress={onKeyPress} />

      <div className="items-center justify-center flex">
        <Button
          label="Rejouer"
          onClick={() => setNumberGames(numberGames + 1)}
        />
      </div>
    </>
  );
};

export default Game;
