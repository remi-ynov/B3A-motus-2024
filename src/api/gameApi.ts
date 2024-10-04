import { get } from 'src/api/call.ts';
import { WORD_API } from 'src/config/gameConfig.ts';
import { ApiWord } from 'src/types/GameTypes.ts';

export const getRandomWord = async () => {
  const response = await get<ApiWord[]>(WORD_API);

  return response[0].name;
}
